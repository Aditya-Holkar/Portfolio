import { useState, useRef, useEffect, memo, useCallback } from 'react'
import { FaComment, FaTimes, FaMicrophone, FaPaperPlane, FaRobot, FaUser, FaTrash } from 'react-icons/fa'
import { usePortfolioChat } from '../hooks/usePortfolioChat'

const SUGGESTIONS = [
  'What projects have you built?',
  'What are your skills?',
  'Work experience?',
  'Education?',
  'Tell me about Capslock Studio',
  'Show me your LinkedIn',
  'Which projects used AI?',
  'How can I contact you?',
]

function pick(n) {
  const s = [...SUGGESTIONS].sort(() => Math.random() - 0.5)
  return s.slice(0, n)
}

function LoadingDots() {
  return (
    <span className='inline-flex items-center gap-1 px-1'>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className='inline-block h-1.5 w-1.5 rounded-full'
          style={{
            backgroundColor: 'var(--text-muted)',
            animation: `spn-b 0.9s ease-in-out ${i * 0.15}s infinite alternate`,
          }}
        />
      ))}
    </span>
  )
}

const BotAvatar = memo(() => (
  <div
    className='flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs'
    style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
  >
    <FaRobot size={12} />
  </div>
))

function parseBold(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={j}>{p.slice(2, -2)}</strong>
      : p
  )
}

function renderContent(text) {
  const lines = text.split('\n')
  const blocks = []
  let listItems = []

  const flushList = () => {
    if (listItems.length) {
      blocks.push(<ul key={`ul-${blocks.length}`} className='my-1.5 space-y-0.5'>{listItems}</ul>)
      listItems = []
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()
    if (!trimmed) { flushList(); continue }

    const isListItem = /^[-*]\s/.test(trimmed)
    if (isListItem) {
      const text = trimmed.replace(/^[-*]\s/, '')
      listItems.push(<li key={i} className='ml-4 list-disc'>{parseBold(text)}</li>)
    } else {
      flushList()
      blocks.push(<p key={`p-${i}`} className={blocks.length ? 'mt-2.5' : ''}>{parseBold(trimmed)}</p>)
    }
  }
  flushList()

  return blocks
}

function ChatMessage({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}>
      {!isUser && <BotAvatar />}
      <div
        className='max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed'
        style={{
          backgroundColor: isUser ? 'var(--accent)' : 'var(--bg-secondary)',
          color: isUser ? '#fff' : 'var(--text)',
          border: isUser ? 'none' : '1px solid var(--border-subtle)',
          borderBottomRightRadius: isUser ? 4 : undefined,
          borderBottomLeftRadius: !isUser ? 4 : undefined,
        }}
      >
        {isUser ? msg.content : renderContent(msg.content)}
      </div>
    </div>
  )
}

export default function PortfolioChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [listening, setListening] = useState(false)
  const [suggestions, setSuggestions] = useState(() => pick(3))
  const { messages, sendMessage, loading, clearMessages } = usePortfolioChat()
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const recognitionRef = useRef(null)

  const botCount = useRef(0)
  useEffect(() => {
    const c = messages.filter((m) => m.role === 'assistant').length
    if (c > botCount.current) {
      botCount.current = c
      setSuggestions(pick(3))
    }
  }, [messages])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, loading])

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 350)
      window._chatScrollY = scrollY
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      window.scrollTo(0, window._chatScrollY || 0)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
    }
  }, [open])

  const handleSend = useCallback(() => {
    if (!input.trim() || loading) return
    sendMessage(input)
    setInput('')
  }, [input, loading, sendMessage])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend],
  )

  const toggleVoice = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) return

    if (listening) {
      recognitionRef.current?.stop()
      setListening(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognitionRef.current = recognition

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript
      setInput((prev) => prev + transcript)
    }
    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)

    recognition.start()
    setListening(true)
  }, [listening])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='fixed bottom-6 right-6 z-[10000] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95'
        style={{
          backgroundColor: 'var(--accent)',
          boxShadow: '0 0 24px rgba(124, 77, 255, 0.5)',
        }}
      >
        <FaComment size={20} />
      </button>

      <div
        className='fixed inset-0 z-[10001] transition-opacity duration-300'
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          touchAction: open ? 'none' : 'auto',
        }}
        onClick={() => setOpen(false)}
      />

      <div
        className='fixed right-0 top-0 z-[10002] flex h-full w-full flex-col transition-transform duration-300 sm:w-[400px]'
        style={{
          backgroundColor: 'rgba(13,13,13,0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid var(--border-subtle)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          overscrollBehavior: 'contain',
        }}
      >
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage: "url('/100-90-5-monochrome.png')",
            backgroundBlendMode: 'multiply',
            opacity: 0.5,
          }}
        />

        <div className='relative z-10 flex h-full flex-col'>
          <div
            className='flex items-center justify-between border-b px-4 py-3'
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className='flex items-center gap-2'>
              <div
                className='flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold'
                style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              >
                AH
              </div>
              <div>
                <div className='text-sm font-semibold' style={{ color: 'var(--text)' }}>
                  Portfolio Assistant
                </div>
                <div className='text-[10px]' style={{ color: 'var(--text-muted)' }}>
                  Ask me anything about Aditya
                </div>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              {messages.length > 0 && (
                <button
                  onClick={clearMessages}
                  className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-sm transition-colors hover:opacity-70'
                  style={{ color: 'var(--text-muted)' }}
                  title='Clear chat'
                >
                  <FaTrash size={13} />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-sm transition-colors hover:opacity-70'
                style={{ color: 'var(--text-muted)' }}
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          <div
            ref={listRef}
            className='flex-1 overflow-y-auto px-4 py-4 scroll-smooth'
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' }}
          >
            {messages.length === 0 && (
              <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
                <div
                  className='flex h-14 w-14 items-center justify-center rounded-2xl text-2xl'
                  style={{ backgroundColor: 'rgba(124,77,255,0.15)', color: 'var(--accent)' }}
                >
                  <FaRobot size={24} />
                </div>
                <div className='text-sm font-medium' style={{ color: 'var(--text)' }}>
                  Hi! I'm Aditya's portfolio assistant
                </div>
                <div className='max-w-[260px] text-xs leading-relaxed' style={{ color: 'var(--text-muted)' }}>
                  Ask me about my experience, skills, projects, or anything else about my work.
                </div>
                <div className='mt-2 flex flex-wrap justify-center gap-2'>
                  {pick(4).map((q) => (
                    <button
                      key={q}
                      onClick={() => { sendMessage(q) }}
                      className='cursor-pointer rounded-full border px-3 py-1.5 text-xs transition-colors hover:opacity-70'
                      style={{
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className='flex flex-col gap-3'>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} msg={msg} />
              ))}
              {loading && (
                <div className='flex items-start gap-2.5'>
                  <BotAvatar />
                  <div
                    className='rounded-2xl px-3.5 py-3'
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      borderBottomLeftRadius: 4,
                    }}
                  >
                    <LoadingDots />
                  </div>
                </div>
              )}
              {!loading && messages.some((m) => m.role === 'assistant') && (
                <div className='mt-1 flex flex-wrap gap-2'>
                  {suggestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => { sendMessage(q) }}
                      className='cursor-pointer rounded-full border px-3 py-1.5 text-xs transition-colors hover:opacity-70'
                      style={{
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            className='relative z-10 border-t px-4 py-3'
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div
              className='flex items-center gap-2 rounded-xl border px-3 py-2'
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <button
                onClick={toggleVoice}
                className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors hover:opacity-70'
                style={{
                  color: listening ? 'var(--accent)' : 'var(--text-muted)',
                  backgroundColor: listening ? 'rgba(124,77,255,0.15)' : 'transparent',
                }}
                title={listening ? 'Stop listening' : 'Voice input'}
              >
                <FaMicrophone size={14} />
              </button>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Ask about Aditya...'
                className='flex-1 bg-transparent text-sm outline-none'
                style={{ color: 'var(--text)' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-30'
                style={{
                  color: input.trim() && !loading ? 'var(--accent)' : 'var(--text-muted)',
                }}
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
