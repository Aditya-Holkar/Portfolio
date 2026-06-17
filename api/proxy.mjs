const PROVIDERS = {
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama3-70b-8192',
    key: () => process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY || '',
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
  },
  deepseek: {
    url: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat',
    key: () => process.env.DEEPSEEK_API_KEY || process.env.VITE_DEEPSEEK_API_KEY || '',
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
  },
  gemini: {
    url: (key) =>
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
    model: null,
    key: () => process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '',
    headers: () => ({}),
    transformBody: (messages) => ({
      contents: messages
        .filter((m) => m.role !== 'system')
        .map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        })),
      systemInstruction: messages
        .filter((m) => m.role === 'system')
        .slice(-1)
        .map((m) => ({ parts: [{ text: m.content }] }))[0],
    }),
    transformResponse: (json) => ({
      choices: [
        {
          message: {
            role: 'assistant',
            content: json.candidates?.[0]?.content?.parts?.[0]?.text || '',
          },
        },
      ],
    }),
  },
  mistral: {
    url: 'https://api.mistral.ai/v1/chat/completions',
    model: 'mistral-medium',
    key: () => process.env.MISTRAL_API_KEY || process.env.VITE_MISTRAL_API_KEY || '',
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
  },
  nvidia: {
    url: 'https://api.nvcf.nvidia.com/v2/nvcf/pexec/functions/201ca492-723b-46c5-b95d-ea848157b172',
    model: null,
    key: () => process.env.NVIDIA_API_KEY || process.env.VITE_NVIDIA_API_KEY || '',
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
    transformBody: (messages) => ({
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 1024,
      stream: false,
    }),
    transformResponse: (json) => ({
      choices: [
        {
          message: {
            role: 'assistant',
            content: json.choices?.[0]?.message?.content || json.content || '',
          },
        },
      ],
    }),
  },
  together: {
    url: 'https://api.together.xyz/v1/chat/completions',
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    key: () => process.env.TOGETHER_API_KEY || process.env.VITE_TOGETHER_API_KEY || '',
    headers: (key) => ({ Authorization: `Bearer ${key}` }),
  },
  openrouter: {
    url: 'https://openrouter.ai/api/v1/chat/completions',
    model: 'openai/gpt-4o-mini',
    key: () => process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY || '',
    headers: (key) => ({
      Authorization: `Bearer ${key}`,
      'HTTP-Referer': process.env.VERCEL_URL || 'http://localhost:5173',
    }),
  },
}

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { provider = 'groq', messages } = await req.json()
    const cfg = PROVIDERS[provider]
    if (!cfg) {
      return new Response(JSON.stringify({ error: `Unknown provider: ${provider}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const apiKey = cfg.key()
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: `No API key configured for ${provider}` }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const url = typeof cfg.url === 'function' ? cfg.url(apiKey) : cfg.url
    const headers = { 'Content-Type': 'application/json', ...cfg.headers(apiKey) }
    const body = cfg.transformBody
      ? cfg.transformBody(messages)
      : { model: cfg.model, messages, temperature: 0.7, max_tokens: 1024 }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const text = await response.text()
      const msg = `${provider} API ${response.status}: ${text.slice(0, 300)}`
      return new Response(JSON.stringify({ error: msg }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const json = await response.json()
    const result = cfg.transformResponse ? cfg.transformResponse(json) : json

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
