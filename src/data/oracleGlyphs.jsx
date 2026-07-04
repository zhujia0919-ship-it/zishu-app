/*
 * ★ 甲骨文字形（手绘 SVG）★
 * 依甲骨文原形绘制的简化图形，线条圆润，适合小朋友辨认。
 * 想加新字：在 GLYPHS 里加一个 id 对应的 <>...</> 片段即可。
 */

export function OracleGlyph({ id, size = 48, className = '' }) {
  const g = GLYPHS[id]
  if (!g) return null
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {g}
    </svg>
  )
}

const GLYPHS = {
  /* 木：上枝下根的一棵树 */
  mu: (<><path d="M50 14 V86" /><path d="M50 34 L30 16" /><path d="M50 34 L70 16" /><path d="M50 60 L30 82" /><path d="M50 60 L70 82" /></>),
  /* 水：中间水流，两边水花 */
  shui: (<><path d="M50 12 C40 30 60 46 50 62 C42 76 58 82 50 90" /><path d="M28 26 C25 33 31 37 28 44" /><path d="M72 26 C75 33 69 37 72 44" /><path d="M28 58 C25 65 31 69 28 76" /><path d="M72 58 C75 65 69 69 72 76" /></>),
  /* 人：侧身站立的人 */
  ren: (<><path d="M58 14 C56 32 54 44 46 58 C41 68 39 78 37 88" /><path d="M56 34 C48 40 42 48 38 54" /></>),
  /* 石：山崖下一块石头 */
  shi: (<><path d="M76 24 H30 L22 52" /><path d="M36 56 H62 V78 H36 Z" /></>),
  /* 草：并排的两株小草 */
  cao: (<><path d="M35 82 V48" /><path d="M35 56 C28 50 26 42 29 34" /><path d="M35 56 C42 50 44 42 41 34" /><path d="M65 82 V48" /><path d="M65 56 C58 50 56 42 59 34" /><path d="M65 56 C72 50 74 42 71 34" /></>),
  /* 日：圆圆的太阳，中间一点 */
  ri: (<><circle cx="50" cy="50" r="30" /><path d="M43 50 H57" /></>),
  /* 月：弯弯的月牙 */
  yue: (<><path d="M62 14 C30 26 30 74 62 88" /><path d="M62 14 C48 34 48 66 62 88" /><path d="M55 40 C52 48 52 56 55 64" /></>),
  /* 山：三座山峰 */
  shan: (<><path d="M18 80 H82" /><path d="M30 80 L38 42 L46 80" /><path d="M42 80 L50 26 L58 80" /><path d="M54 80 L62 42 L70 80" /></>),
  /* 火：跳动的火苗 */
  huo: (<><path d="M50 20 C44 38 56 50 50 80" /><path d="M28 42 C26 56 34 68 36 80" /><path d="M72 42 C74 56 66 68 64 80" /></>),
  /* 田：整齐的田地 */
  tian: (<><rect x="26" y="28" width="48" height="46" rx="6" /><path d="M50 28 V74" /><path d="M26 51 H74" /></>),
  /* 禾：垂着穗的庄稼 */
  he: (<><path d="M50 32 V82" /><path d="M50 32 C42 20 30 18 22 24" /><path d="M50 54 L32 44" /><path d="M50 54 L68 44" /><path d="M50 70 L34 84" /><path d="M50 70 L66 84" /></>),
  /* 口：张开的嘴巴 */
  kou: (<><path d="M28 34 C30 60 40 70 50 70 C60 70 70 60 72 34" /><path d="M28 34 L22 28" /><path d="M72 34 L78 28" /></>),
  /* 目：一只眼睛 */
  mu4: (<><path d="M14 50 C30 30 70 30 86 50 C70 70 30 70 14 50 Z" /><circle cx="50" cy="50" r="9" /></>),
  /* 耳：耳朵的轮廓 */
  er: (<><path d="M42 18 C62 14 70 30 66 46 C62 60 58 68 56 84" /><path d="M42 18 C38 36 38 58 46 80" /><path d="M48 34 C56 36 58 44 53 52" /></>),
  /* 手：五根手指 */
  shou: (<><path d="M50 90 V56" /><path d="M50 56 V24" /><path d="M50 60 C42 52 36 44 32 34" /><path d="M50 60 C58 52 64 44 68 34" /><path d="M50 68 C42 64 34 60 26 54" /><path d="M50 68 C58 64 66 60 74 54" /></>),
  /* 云：天上打卷的云 */
  yun: (<><path d="M32 24 H68" /><path d="M26 38 H74" /><path d="M64 50 C42 52 32 62 40 70 C46 76 58 74 54 64 C51 58 44 60 46 66" /></>),
  /* 雨：落下的雨点 */
  yu3: (<><path d="M22 30 H78" /><path d="M32 42 V58" /><path d="M46 42 V64" /><path d="M60 42 V58" /><path d="M74 42 V64" /></>),
  /* 鸟：一只小鸟 */
  niao: (<><path d="M20 34 L32 30" /><path d="M32 30 C36 20 48 20 52 28 C66 28 76 42 70 58 C66 70 54 76 44 70" /><circle cx="42" cy="28" r="2.5" fill="currentColor" stroke="none" /><path d="M52 44 C62 42 70 46 74 54" /><path d="M70 58 L84 70" /><path d="M48 72 V86" /><path d="M58 70 V86" /></>),
  /* 鱼：头、鳞、尾俱全的鱼 */
  yu2: (<><path d="M18 50 C34 30 66 30 82 50 C66 70 34 70 18 50 Z" /><path d="M82 50 L94 38" /><path d="M82 50 L94 62" /><path d="M34 40 C32 46 32 54 34 60" /><path d="M48 35 V65" /><path d="M62 35 V65" /><path d="M40 50 H70" /><circle cx="28" cy="48" r="2.5" fill="currentColor" stroke="none" /></>),
  /* 大：张开手脚的人 */
  da: (<><path d="M50 18 V58" /><path d="M22 40 C36 33 64 33 78 40" /><path d="M50 58 L30 86" /><path d="M50 58 L70 86" /></>),
}
