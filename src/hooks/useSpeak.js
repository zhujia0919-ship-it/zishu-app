import { useCallback, useRef, useState } from 'react'

/**
 * 中文语音朗读 —— 使用浏览器内置的 Web Speech API，完全免费、无需任何后台。
 * 手机和电脑浏览器基本都支持。少数环境不支持时会静默跳过。
 */
export function useSpeak() {
  const [speakingId, setSpeakingId] = useState(null)
  const idRef = useRef(0)

  const speak = useCallback((text, id = null) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'zh-CN'
    u.rate = 0.75   // 放慢一点，方便小朋友听清
    u.pitch = 1.05
    const myId = ++idRef.current
    setSpeakingId(id ?? myId)
    u.onend = () => { if (idRef.current === myId) setSpeakingId(null) }
    u.onerror = () => { if (idRef.current === myId) setSpeakingId(null) }
    window.speechSynthesis.speak(u)
  }, [])

  return { speak, speakingId }
}
