export interface Reciter {
  id: string
  name: string
  audioUrl: string
  duration: string
}

export interface Poem {
  id: string
  title: string
  poet: string
  category: string
  text: string
  reciters: Reciter[]
}

export interface Category {
  id: string
  name: string
  description: string
  count: number
}

export const categories: Category[] = [
  { id: 'love', name: 'قصائد حب', description: 'أجمل قصائد الغزل والحب والعشق', count: 8 },
  { id: 'honor', name: 'قصائد شرف', description: 'قصائد الفخر والشجاعة والرجولة', count: 6 },
  { id: 'nature', name: 'قصائد طبيعة', description: 'وصف الطبيعة والبداوة والصحراء', count: 5 },
  { id: 'memories', name: 'ذكريات', description: 'قصائد الحنين والشوق والذكريات', count: 7 },
  { id: 'wisdom', name: 'قصائد حكمة', description: 'قصائد الحكمة والعبر والمواعظ', count: 6 },
  { id: 'celebrations', name: 'احتفالات', description: 'قصائد الفرح والمناسبات السعيدة', count: 4 },
]

export const poems: Poem[] = [
  {
    id: 'poem-1',
    title: 'يا بعد حيي',
    poet: 'الأمير بدر بن عبدالمحسن',
    category: 'love',
    text: 'يا بعد حيي ويا بعد حيي.. يا بعد روحي ويا بعد حيي\nما بقى في قلبي مكان غيرك.. وكل ما فيه أهواك أنت',
    reciters: [
      { id: 'reciter-1', name: 'فهد بن سعيد', audioUrl: '/audio/poem1-1.mp3', duration: '4:30' },
      { id: 'reciter-2', name: 'ناصر السيحاني', audioUrl: '/audio/poem1-2.mp3', duration: '5:15' },
    ],
  },
  {
    id: 'poem-2',
    title: 'يا راكب من عندنا',
    poet: 'محمد بن فطيس',
    category: 'love',
    text: 'يا راكب من عندنا للمليون.. خذ معك مني سلامٍ يوصف\nقل له اللي في حشا قلبه شجون.. ما يبين ولا يبين التكفف',
    reciters: [
      { id: 'reciter-1', name: 'فهد بن سعيد', audioUrl: '/audio/poem2-1.mp3', duration: '5:00' },
    ],
  },
  {
    id: 'poem-3',
    title: 'يا نسمة من هوى نجد',
    poet: 'صاحب السمو الملكي الأمير خالد الفيصل',
    category: 'nature',
    text: 'يا نسمة من هوى نجدٍ هبّي.. حنيت لك والحشا من ناره دافي\nذكرتني بالزمن ذيك ولي.. ما بين شوقي وبين الدمع وافي',
    reciters: [
      { id: 'reciter-3', name: 'عبدالله المبدل', audioUrl: '/audio/poem3-1.mp3', duration: '4:45' },
    ],
  },
  {
    id: 'poem-4',
    title: 'وقفة رجال',
    poet: 'مستور العصيمي',
    category: 'honor',
    text: 'يا صاحبي وقفة رجالٍ تعزّي.. في يوم ما تنفع حجج والا أعذار\nالموقف اللي ينكشف فيه رزّي.. ولاّ وقوف الجبان وسط الأخطار',
    reciters: [
      { id: 'reciter-4', name: 'ظافر الحبابي', audioUrl: '/audio/poem4-1.mp3', duration: '6:10' },
    ],
  },
  {
    id: 'poem-5',
    title: 'أقبل الليل',
    poet: 'محسن بن عثمان الهزاني',
    category: 'memories',
    text: 'أقبل الليل وطال السهر.. وذكرت أيام مضت واندثرت\nوالفكر يجري في مسالكه.. والقلب من جور الزمن يعتصر',
    reciters: [
      { id: 'reciter-2', name: 'ناصر السيحاني', audioUrl: '/audio/poem5-1.mp3', duration: '5:30' },
      { id: 'reciter-5', name: 'راشد الماجد', audioUrl: '/audio/poem5-2.mp3', duration: '4:50' },
    ],
  },
]
