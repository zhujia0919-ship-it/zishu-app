/*
 * ★ 识字数据 ★
 * 选字依据：以部编版一年级教材中的象形字为主（如《日月水火》《口耳目》等识字课）。
 * 每个字的甲骨文图形在 oracleGlyphs.jsx 中手绘。
 *
 * 字段说明：
 *   char/pinyin/strokes  字、拼音、笔画数
 *   like     "像什么"——一句话字源联想
 *   story    字的来历小故事
 *   anim     真实演变动画视频（放 public/assets/ 后填路径）；没有填 null，
 *            app 会自动显示内置的"甲骨文 ↔ 楷书"简易演变动画
 *   painting / paintingNote  吕佛庭文字画；没有填 null
 *   words    组词（点击可朗读）
 *   color    卡片主题色
 *   group    分组：自然 / 身体 / 动物
 *
 * 加新字：复制一段 { ... } 修改，再到 oracleGlyphs.jsx 加对应字形。
 */

export const CHARS = [
  /* ── 大自然 ── */
  {
    id: 'mu', char: '木', pinyin: 'mù', strokes: 4, group: '自然', color: '#5B8C51',
    like: '像一棵树：上面是伸展的树枝，下面是扎进土里的树根',
    story: '「木」就是树。甲骨文里，上面的分叉是向上长的枝叶，下面的分叉是往下扎的树根。一棵完整的树，就是「木」。两棵木叠在一起，就成了「林」。',
    anim: '/assets/jiaguwen-anim.mp4',
    painting: '/assets/wenzihua.png',
    paintingNote: '吕佛庭《文字画》中的松树，正是「木」的写意',
    words: ['树木', '木头', '花木', '木马'],
  },
  {
    id: 'ri', char: '日', pinyin: 'rì', strokes: 4, group: '自然', color: '#E4572E',
    like: '像天上圆圆的太阳，中间一点是太阳的光',
    story: '古人抬头看太阳，就照着画了一个圆圈，中间加一点表示太阳是实实在在发光的。后来圆圈慢慢写方了，就成了今天的「日」。',
    anim: null, painting: null, paintingNote: null,
    words: ['日出', '生日', '日子', '明日'],
  },
  {
    id: 'yue', char: '月', pinyin: 'yuè', strokes: 4, group: '自然', color: '#5C6BC0',
    like: '像夜空里弯弯的月牙',
    story: '月亮圆的时候少，弯的时候多，所以古人画月亮就画一弯月牙，里面加一小笔表示月亮上的影子。「日」和「月」在一起，就是「明」——又亮又明。',
    anim: null, painting: null, paintingNote: null,
    words: ['月亮', '月牙', '明月', '月光'],
  },
  {
    id: 'shan', char: '山', pinyin: 'shān', strokes: 3, group: '自然', color: '#6D8B74',
    like: '像地上耸起的三座山峰',
    story: '甲骨文的「山」，就是一排山峰的样子——中间高，两边低。古人远远望见连绵的群山，几笔就画了下来。今天的「山」字，还是三座山峰的模样。',
    anim: null, painting: null, paintingNote: null,
    words: ['大山', '山水', '上山', '火山'],
  },
  {
    id: 'shui', char: '水', pinyin: 'shuǐ', strokes: 4, group: '自然', color: '#3E7CB1',
    like: '像一条弯弯流动的小河，中间是水流，两边是水花',
    story: '甲骨文的「水」，画的就是流动的河水——中间一条弯弯的主流，两边溅起小水点。古人看见河，就照着河的样子画下来，慢慢变成了今天的「水」。',
    anim: null,
    painting: '/assets/wenzihua.png',
    paintingNote: '吕佛庭《文字画》——把「水」化进松树、石头与流水的山居图里',
    words: ['水果', '喝水', '流水', '雨水'],
  },
  {
    id: 'huo', char: '火', pinyin: 'huǒ', strokes: 4, group: '自然', color: '#D64545',
    like: '像一团往上跳动的火苗',
    story: '「火」的甲骨文就是燃烧的火焰：中间一簇大火苗，两边两簇小火苗，呼呼地往上蹿。看到「火」字，是不是觉得它真的在烧？',
    anim: null, painting: null, paintingNote: null,
    words: ['火苗', '大火', '灯火', '火车'],
  },
  {
    id: 'shi', char: '石', pinyin: 'shí', strokes: 5, group: '自然', color: '#7A7266',
    like: '像山崖下面掉落的一块石头',
    story: '「石」的甲骨文，是山崖下面一块方方的石头，表示从山崖上滚落的石块。所以「石」字到今天，左上角还留着那个像山崖的角。',
    anim: null,
    painting: '/assets/wenzihua.png',
    paintingNote: '文字画中石头的形态，圆浑而稳',
    words: ['石头', '石子', '大石', '石桥'],
  },
  {
    id: 'tian', char: '田', pinyin: 'tián', strokes: 5, group: '自然', color: '#7BA05B',
    like: '像一块块方方正正的田地',
    story: '古人把田地整整齐齐分成小块，中间留出小路走人、通水。「田」字就是从天上往下看田地的样子——横一条、竖一条，是田埂，也是小路。',
    anim: null, painting: null, paintingNote: null,
    words: ['田地', '水田', '田野', '种田'],
  },
  {
    id: 'he', char: '禾', pinyin: 'hé', strokes: 5, group: '自然', color: '#C9A227',
    like: '像一株成熟了、垂着头的庄稼',
    story: '「禾」是庄稼。甲骨文里，它有根、有叶，顶上还弯着头——因为谷穗成熟了，沉甸甸地垂下来。古诗「锄禾日当午」里的「禾」，就是它。',
    anim: null, painting: null, paintingNote: null,
    words: ['禾苗', '禾田', '锄禾'],
  },
  {
    id: 'cao', char: '草', pinyin: 'cǎo', strokes: 9, group: '自然', color: '#6AA84F',
    like: '像地上并排长出来的两株小草',
    story: '最早的「草」写作「艸」，就是两株并排的小草，尖尖的叶子往上冒。后来为了表示读音，上面留下草字头，下面配了个「早」，成了今天的「草」。',
    anim: null,
    painting: '/assets/goutu-ziyou.png',
    paintingNote: '吕佛庭文字画里自由生长的草木意趣',
    words: ['小草', '花草', '草地', '青草'],
  },
  {
    id: 'yun', char: '云', pinyin: 'yún', strokes: 4, group: '自然', color: '#6FA8C9',
    like: '像天上打着卷儿的一朵云',
    story: '甲骨文的「云」，上面两横表示天空，下面是一朵打着卷儿的云。云卷云舒，古人抬头一看，就把它画了下来。「云对雨，雪对风」，说的就是它。',
    anim: null, painting: null, paintingNote: null,
    words: ['白云', '云朵', '乌云', '云彩'],
  },
  {
    id: 'yu3', char: '雨', pinyin: 'yǔ', strokes: 8, group: '自然', color: '#5A87B0',
    like: '像天上落下来的一串串雨点',
    story: '「雨」的甲骨文，上面一横是天，下面一点一点的，是从天上落下的雨滴。下雨啦，滴滴答答——「雨」字里真的装着雨点呢。',
    anim: null, painting: null, paintingNote: null,
    words: ['下雨', '大雨', '雨点', '雨伞'],
  },

  /* ── 我的身体 ── */
  {
    id: 'ren', char: '人', pinyin: 'rén', strokes: 2, group: '身体', color: '#C1662F',
    like: '像一个侧身站着、垂着手臂的人',
    story: '甲骨文的「人」，是一个侧面站立的人——弯弯的是身体，垂下来的是手臂。简简单单两笔，就是一个人。',
    anim: null,
    painting: '/assets/goutu-zhongdian.png',
    paintingNote: '吕佛庭以人形为重点的文字画构图',
    words: ['大人', '人们', '好人', '人口'],
  },
  {
    id: 'kou', char: '口', pinyin: 'kǒu', strokes: 3, group: '身体', color: '#E88C3A',
    like: '像一张张开的嘴巴',
    story: '「口」就是嘴巴。甲骨文里它嘴角上翘，像在微笑。吃饭用口，说话用口，唱歌也用口——带「口」的字，很多都和嘴巴有关系。',
    anim: null, painting: null, paintingNote: null,
    words: ['人口', '开口', '口水', '门口'],
  },
  {
    id: 'mu4', char: '目', pinyin: 'mù', strokes: 5, group: '身体', color: '#4A7FA5',
    like: '像一只横着的眼睛，中间是眼珠',
    story: '「目」就是眼睛。甲骨文里它是横着的一只眼，中间圆圆的是眼珠。后来人们把它竖了起来，就成了今天的「目」。「耳聪目明」，说的就是耳朵灵、眼睛亮。',
    anim: null, painting: null, paintingNote: null,
    words: ['目光', '耳目', '题目', '双目'],
  },
  {
    id: 'er', char: '耳', pinyin: 'ěr', strokes: 6, group: '身体', color: '#A2708A',
    like: '像一只耳朵的轮廓',
    story: '「耳」就是照着耳朵画的：外面一圈是耳廓，里面一笔是耳窝。用耳朵听一听，风声、雨声、读书声，都从「耳」进来。',
    anim: null, painting: null, paintingNote: null,
    words: ['耳朵', '木耳', '耳目', '悦耳'],
  },
  {
    id: 'shou', char: '手', pinyin: 'shǒu', strokes: 4, group: '身体', color: '#B07A4A',
    like: '像一只张开的手，五根手指伸开',
    story: '甲骨文的「手」，五根手指清清楚楚，下面连着手臂。写字用手、画画用手、拍手也用手。伸出你的小手对一对，是不是一样有五根手指？',
    anim: null, painting: null, paintingNote: null,
    words: ['小手', '手心', '拍手', '手足'],
  },
  {
    id: 'da', char: '大', pinyin: 'dà', strokes: 3, group: '身体', color: '#B0563B',
    like: '像一个人张开手、叉开腿，站得大大的',
    story: '怎么表示「大」？古人想了个好办法：画一个正面站立的人，两只手臂张开，两条腿叉开——把自己撑得最大！这就是「大」。',
    anim: null, painting: null, paintingNote: null,
    words: ['大人', '大小', '大山', '长大'],
  },

  /* ── 小动物 ── */
  {
    id: 'niao', char: '鸟', pinyin: 'niǎo', strokes: 5, group: '动物', color: '#4E937A',
    like: '像一只侧身站着的小鸟：尖嘴、翅膀、小爪子',
    story: '甲骨文的「鸟」，就是一只小鸟的侧影——尖尖的嘴、圆圆的眼睛、收拢的翅膀，还有两只小爪子。今天「鸟」字里的一点，就是它的眼睛。',
    anim: null, painting: null, paintingNote: null,
    words: ['小鸟', '飞鸟', '鸟儿', '鸟窝'],
  },
  {
    id: 'yu2', char: '鱼', pinyin: 'yú', strokes: 8, group: '动物', color: '#3E9BA8',
    like: '像一条完整的鱼：鱼头、鱼鳞、鱼尾巴',
    story: '甲骨文的「鱼」特别像鱼：有头、有眼睛、身上有一格一格的鱼鳞，还有摆动的尾巴。今天「鱼」字下面的一横，就是从鱼尾巴变来的。',
    anim: null, painting: null, paintingNote: null,
    words: ['小鱼', '金鱼', '鱼儿', '钓鱼'],
  },
]

// 三种构图（吕佛庭文字画的知识拓展）
export const GOUTU = [
  { id: 'g1', name: '重点式构图', img: '/assets/goutu-zhongdian.png', desc: '把一个字画成画面的主角，居中突出，一眼就看到。' },
  { id: 'g2', name: '自由式构图', img: '/assets/goutu-ziyou.png', desc: '把几个字化成小鱼、小虫，自由地散布在纸上，活泼灵动。' },
  { id: 'g3', name: '规律式构图', img: '/assets/goutu-guilv.png', desc: '文字与画面错落有致地排列，既有秩序，又有诗意。' },
]

// 首页分组
export const GROUPS = ['自然', '身体', '动物']
export const GROUP_META = {
  自然: { title: '大自然', em: '🌈' },
  身体: { title: '我的身体', em: '🙋' },
  动物: { title: '小动物', em: '🐣' },
}
