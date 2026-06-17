import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  const key = (k) => env[k] || "";

  const PROVIDERS = {
    groq: {
      url: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama3-70b-8192",
      key: () => key("GROQ_API_KEY") || key("VITE_GROQ_API_KEY"),
    },
    deepseek: {
      url: "https://api.deepseek.com/v1/chat/completions",
      model: "deepseek-chat",
      key: () => key("DEEPSEEK_API_KEY") || key("VITE_DEEPSEEK_API_KEY"),
    },
    gemini: {
      url: (k) =>
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${k}`,
      model: null,
      key: () => key("GEMINI_API_KEY") || key("VITE_GEMINI_API_KEY"),
      transformBody: (messages) => ({
        contents: messages
          .filter((m) => m.role !== "system")
          .map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
        systemInstruction: messages
          .filter((m) => m.role === "system")
          .slice(-1)
          .map((m) => ({ parts: [{ text: m.content }] }))[0],
      }),
      transformResponse: (json) => ({
        choices: [
          {
            message: {
              role: "assistant",
              content: json.candidates?.[0]?.content?.parts?.[0]?.text || "",
            },
          },
        ],
      }),
    },
    mistral: {
      url: "https://api.mistral.ai/v1/chat/completions",
      model: "mistral-medium",
      key: () => key("MISTRAL_API_KEY") || key("VITE_MISTRAL_API_KEY"),
    },
    nvidia: {
      url: "https://api.nvcf.nvidia.com/v2/nvcf/pexec/functions/201ca492-723b-46c5-b95d-ea848157b172",
      model: null,
      key: () => key("NVIDIA_API_KEY") || key("VITE_NVIDIA_API_KEY"),
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
              role: "assistant",
              content: json.choices?.[0]?.message?.content || json.content || "",
            },
          },
        ],
      }),
    },
    together: {
      url: "https://api.together.xyz/v1/chat/completions",
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      key: () => key("TOGETHER_API_KEY") || key("VITE_TOGETHER_API_KEY"),
    },
    openrouter: {
      url: "https://openrouter.ai/api/v1/chat/completions",
      model: "openai/gpt-4o-mini",
      key: () => key("OPENROUTER_API_KEY") || key("VITE_OPENROUTER_API_KEY"),
      headers: (key) => ({
        Authorization: `Bearer ${key}`,
      }),
    },
  };

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "api-proxy",
        configureServer(server) {
        server.middlewares.use("/api/proxy", async (req, res) => {
          if (req.method !== "POST") {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: "Method not allowed" }));
            return;
          }

          let body = "";
          req.on("data", (chunk) => (body += chunk));
          req.on("end", async () => {
            try {
              const { provider = "groq", messages } = JSON.parse(body);
              const cfg = PROVIDERS[provider];
              if (!cfg) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: `Unknown provider: ${provider}` }));
                return;
              }

              const apiKey = cfg.key();
              if (!apiKey) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: `No API key for ${provider}` }));
                return;
              }

              const url = typeof cfg.url === "function" ? cfg.url(apiKey) : cfg.url;
              const headers = { "Content-Type": "application/json" };
              if (cfg.headers) Object.assign(headers, cfg.headers(apiKey));
              else headers["Authorization"] = `Bearer ${apiKey}`;

              const reqBody = cfg.transformBody
                ? cfg.transformBody(messages)
                : { model: cfg.model, messages, temperature: 0.7, max_tokens: 1024 };

              const response = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(reqBody),
              });

              if (!response.ok) {
                const text = await response.text();
                const msg = `${provider} API ${response.status}: ${text.slice(0, 300)}`;
                res.statusCode = response.status;
                res.end(JSON.stringify({ error: msg }));
                return;
              }

              const json = await response.json();
              const result = cfg.transformResponse ? cfg.transformResponse(json) : json;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(result));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        });
      },
    },
  ],
};
});
