import { useState } from 'react'
import { CHARS, GOUTU, GROUPS, GROUP_META } from './data/chars.js'
import { OracleGlyph } from './data/oracleGlyphs.jsx'
import { useSpeak } from './hooks/useSpeak.js'

/* ── 内置简易演变动画：甲骨文 ↔ 楷书 自动渐变 ── */
function EvoAnim({ c }) {
  return (
    <div>
      <div className="evo-box" style={{ color: c.color }}>
        <div className="evo-stage s1">
          <OracleGlyph id={c.id} size={86} />
          <span className="evo-label">三千年前 · 甲骨文</span>
        </div>
        <div className="evo-stage s2">
          <b className="evo-char">{c.char}</b>
          <span className="evo-label">今天 · 楷书</span>
        </div>
      </div>
      <div className="evo-note">简易演变演示 · 正式动画制作中</div>
    </div>
  )
}

/* ── 首页：分组字卡 ── */
function Home({ onOpen }) {
  return (
    <div className="page">
      <div className="home-head">
        <div className="logo">字·树 🌳</div>
        <div className="sub">追字源 · 看动画 · 赏文字画</div>
      </div>
      <div className="home-hint">
        每个汉字都是一幅画。<br />点一个字，看看它三千年前长什么样！
      </div>

      {GROUPS.map((g) => (
        <div key={g}>
          <div className="group-title">
            <span>{GROUP_META[g].em}</span>{GROUP_META[g].title}
          </div>
          <div className="char-grid">
            {CHARS.filter((c) => c.group === g).map((c) => (
              <button
                key={c.id}
                className="char-cell"
                style={{ background: c.color }}
                onClick={() => onOpen(c)}
              >
                <span className="oracle-mini"><OracleGlyph id={c.id} size={26} /></span>
                <span className="big">{c.char}</span>
                <span className="py">{c.pinyin}</span>
                <span className="go">去认识 ›</span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <p className="foot-note">演示版 · 已收录一年级象形字 {CHARS.length} 个</p>
    </div>
  )
}

/* ── 字详情页 ── */
function Detail({ c, onBack }) {
  const { speak, speakingId } = useSpeak()

  return (
    <div className="page">
      <div className="detail-head">
        <button className="back-btn" onClick={onBack} aria-label="返回">‹</button>
        <div className="title">认识「{c.char}」</div>
      </div>

      <div className="hero-card" style={{ background: c.color }}>
        <div className="hero-row">
          <div className="hero-oracle">
            <span className="oc"><OracleGlyph id={c.id} size={62} /></span>
            <span className="hero-label">三千年前</span>
          </div>
          <span className="hero-arrow">➜</span>
          <div className="hero-today">
            <span className="tc">{c.char}</span>
            <span className="hero-label">今天</span>
          </div>
        </div>
        <div className="hero-py">
          {c.pinyin}
          <button
            className={`speak-btn${speakingId === 'main' ? ' speaking' : ''}`}
            onClick={() => speak(c.char, 'main')}
            aria-label={`朗读 ${c.char}`}
          >
            🔊
          </button>
        </div>
        <div className="hero-strokes">{c.strokes} 画</div>
      </div>

      <div className="block">
        <div className="block-title"><span className="em">👀</span>它像什么？</div>
        <div className="like-line">{c.like}</div>
      </div>

      <div className="block">
        <div className="block-title"><span className="em">📜</span>字的来历</div>
        <p>{c.story}</p>
      </div>

      <div className="block">
        <div className="block-title"><span className="em">🎬</span>看动画：字是怎么变的</div>
        {c.anim ? (
          <div className="media-box">
            <video src={c.anim} controls playsInline preload="metadata" />
          </div>
        ) : (
          <EvoAnim c={c} />
        )}
      </div>

      {c.painting && (
        <div className="block">
          <div className="block-title"><span className="em">🖼️</span>文字画：字变成了画</div>
          <div className="painting-box">
            <img src={c.painting} alt={`${c.char} 的文字画`} />
            <div className="painting-note">{c.paintingNote}</div>
          </div>
        </div>
      )}

      <div className="block">
        <div className="block-title"><span className="em">🗣️</span>组个词，读一读</div>
        <div className="words">
          {c.words.map((w) => (
            <button key={w} className="word-chip" onClick={() => speak(w, w)}>
              {w} <span className="mini-speak">{speakingId === w ? '🔊' : '▷'}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="block">
        <div className="block-title"><span className="em">✨</span>小知识：文字画的三种构图</div>
        <div className="goutu-scroll">
          {GOUTU.map((g) => (
            <div className="goutu-card" key={g.id}>
              <img src={g.img} alt={g.name} />
              <div className="gc-body">
                <h4>{g.name}</h4>
                <p>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="foot-note">文字画：吕佛庭 · 演示用途</p>
    </div>
  )
}

export default function App() {
  const [current, setCurrent] = useState(null)

  return (
    <div className="app-frame">
      <div className="phone">
        <div className="screen">
          {current
            ? <Detail c={current} onBack={() => setCurrent(null)} />
            : <Home onOpen={setCurrent} />}
        </div>
      </div>
    </div>
  )
}
