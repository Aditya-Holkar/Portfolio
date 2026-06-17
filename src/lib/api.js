const PRIORITY = [
  'openrouter',
  'together',
  'nvidia',
  'mistral',
  'gemini',
  'deepseek',
  'groq',
]

export async function sendChatMessage(messages) {
  let lastError

  const tryProvider = async (provider) => {
    const res = await fetch('/api/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ provider, messages }),
    })
    if (!res.ok) {
      const json = await res.json().catch(() => ({}))
      throw new Error(json.error || `${provider} returned ${res.status}`)
    }
    return res.json()
  }

  for (const provider of PRIORITY) {
    try {
      return await tryProvider(provider)
    } catch (err) {
      lastError = err
    }
  }

  throw lastError || new Error('All providers failed')
}
