/*
 * ★ 识字数据 ★
 * 每个字包含：
 *   char      今天的字（楷书）
 *   pinyin    拼音（点朗读时也用它发音）
 *   oracle    甲骨文写法（这里用字符近似，真实项目可换成甲骨文图片）
 *   like      "像什么"——字源联想，一句话讲给小朋友听
 *   story     字源小故事（追溯字源）
 *   anim      演变动画视频地址（放在 public/assets 下）；没有就设为 null
 *   painting  吕佛庭文字画图片地址；没有就设为 null
 *   words     组词（2-4 个）
 *   strokes   笔画数
 *   color     该字主题色（让每个字卡片有不同颜色，孩子更喜欢）
 *
 * 想加新字：复制一整段 { ... }，改里面的内容即可。
 * 想换成自己的动画：把 anim 改成你的视频地址。
 */

export const CHARS = [
  {
    id: 'mu',
    char: '木',
    pinyin: 'mù',
    oracle: '朩',
    like: '像一棵树：上面是伸展的树枝，下面是扎进土里的树根',
    story: '「木」就是树。甲骨文里，上面一横两撇是向上长的枝叶，下面两撇是往下扎的树根。一棵完整的树，就是「木」。两棵木叠在一起，就成了「林」。',
    anim: '/assets/jiaguwen-anim.mp4',
    painting: '/assets/wenzihua.png',
    paintingNote: '吕佛庭《文字画》中的松树，正是「木」的写意',
    words: ['树木', '木头', '花木', '木马'],
    strokes: 4,
    color: '#5B8C51',
  },
  {
    id: 'shui',
    char: '水',
    pinyin: 'shuǐ',
    oracle: '𣱱',
    like: '像一条弯弯流动的小河，中间是水流，两边是水花',
    story: '甲骨文的「水」，画的就是流动的河水——中间一条主流，两边溅起水点。古人看见河，就照着河的样子画下来，慢慢变成了今天的「水」字。',
    anim: null,
    painting: '/assets/wenzihua.png',
    paintingNote: '吕佛庭《文字画》——把「水」化进松树、石头与流水的山居图里',
    words: ['水果', '喝水', '流水', '水中'],
    strokes: 4,
    color: '#3E7CB1',
  },
  {
    id: 'ren',
    char: '人',
    pinyin: 'rén',
    oracle: '𠆢',
    like: '像一个侧身站着、迈开腿走路的人',
    story: '甲骨文的「人」，是一个侧面站立的人形——一撇是身体和头，一撇是垂下的手臂。简简单单两笔，就是一个人。',
    anim: null,
    painting: '/assets/goutu-zhongdian.png',
    paintingNote: '吕佛庭以「人」为重点的文字画构图',
    words: ['大人', '人们', '好人', '人口'],
    strokes: 2,
    color: '#C1662F',
  },
  {
    id: 'shi',
    char: '石',
    pinyin: 'shí',
    oracle: '𥐫',
    like: '像山崖下面掉落的一块石头',
    story: '「石」的甲骨文，是山崖（厂）下面一个圆圈，表示从山崖上滚落的石块。所以「石」字到今天，左上角还留着那个像山崖的角。',
    anim: null,
    painting: '/assets/wenzihua.png',
    paintingNote: '文字画中石头的形态，圆浑而稳',
    words: ['石头', '石子', '大石', '石桥'],
    strokes: 5,
    color: '#7A7266',
  },
  {
    id: 'cao',
    char: '草',
    pinyin: 'cǎo',
    oracle: '艸',
    like: '像地上并排长出来的两株小草',
    story: '最早的「草」写作「艸」，就是两株并排的小草，尖尖的叶子往上冒。后来为了表示读音，上面加了草字头，下面配「早」，成了今天的「草」。',
    anim: null,
    painting: '/assets/goutu-ziyou.png',
    paintingNote: '文字画里自由生长的草木意趣',
    words: ['小草', '花草', '草地', '青草'],
    strokes: 9,
    color: '#6AA84F',
  },
]

// 三种构图（吕佛庭文字画的知识拓展，给"了解更多"用）
export const GOUTU = [
  { id: 'g1', name: '重点式构图', img: '/assets/goutu-zhongdian.png', desc: '把一个字画成画面的主角，居中突出，一眼就看到。' },
  { id: 'g2', name: '自由式构图', img: '/assets/goutu-ziyou.png', desc: '把几个字化成小鱼、小虫，自由地散布在纸上，活泼灵动。' },
  { id: 'g3', name: '规律式构图', img: '/assets/goutu-guilv.png', desc: '文字与画面错落有致地排列，既有秩序，又有诗意。' },
]
