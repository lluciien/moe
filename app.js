const { createApp, ref, computed } = Vue;
const { Menu: MenuIcon, X: XIcon, ChevronDown: ChevronDownIcon } = LucideVueNext;

const characters = [
  {
    id: 1,
    name: "莉莉安",
    shortDescription: "神秘的魔法师",
    description: "莉莉安是一位来自遥远森林的神秘魔法师。她精通元素魔法，能够操控自然的力量。她的目标是寻找失落的魔法典籍，以增强自己的能力。在她的旅途中，她结识了许多朋友，也遇到了不少强大的对手。",
    age: 25,
    occupation: "魔法师",
    skills: ["元素魔法", "占卜", "药剂制作"],
    image: "https://s1.locimgm/2024/10/15/f1efa27687bf9.jpg?height=600&width=400",
    author: "艾米莉·布朗",
    stories: [
      { title: "森林的呼唤", content: "莉莉安第一次听到森林的呼唤是在她12岁的时候..." },
      { title: "魔法学院的考验", content: "在魔法学院的最后一年，莉莉安面临了最严峻的考验..." }
    ]
  },
  {
    id: 2,
    name: "阿克塞尔",
    shortDescription: "勇敢的剑士",
    description: "阿克塞尔是王国最勇敢的剑士之一。他的剑术无人能敌，曾多次拯救王国于危难之中。他梦想有朝一日能成为王国的守护者。阿克塞尔的忠诚和勇气赢得了国王的信任，但也引来了宫廷中一些人的嫉妒。",
    age: 30,
    occupation: "剑士",
    skills: ["剑术", "战术", "骑术"],
    image: "/placeholder.svg?height=600&width=400",
    author: "大卫·史密斯",
    stories: [
      { title: "王城之战", content: "在王城保卫战中，阿克塞尔以一敌百..." },
      { title: "龙骑士的挑战", content:  "为了成为真正的龙骑士，阿克塞尔必须面对自己最大的恐惧..." }
    ]
  },
  {
    id: 3,
    name: "艾琳",
    shortDescription: "聪明的发明家",
    description: "艾琳是一位天才发明家，她的创造力无人能及。她的发明改变了王国的面貌，为人们的生活带来了诸多便利。她正在研究一种可以飞行的机器。艾琳的梦想是有一天能够飞到云端之上，探索未知的天空。",
    age: 28,
    occupation: "发明家",
    skills: ["机械工程", "炼金术", "绘图"],
    image: "/placeholder.svg?height=600&width=400",
    author: "艾米莉·布朗",
    stories: [
      { title: "飞行梦想", content: "艾琳从小就梦想能够像鸟儿一样飞翔..." },
      { title: "蒸汽革命", content: "艾琳的蒸汽机发明彻底改变了王国的工业..." }
    ]
  },
  {
    id: 4,
    name: "奥利维亚",
    shortDescription: "敏捷的弓箭手",
    description: "奥利维亚是森林中最出色的弓箭手。她的箭无论多远都能命中目标。她立志保护森林和其中的生物免受邪恶势力的侵害。奥利维亚与森林中的动物有着特殊的联系，它们经常在她需要帮助时出现。",
    age: 23,
    occupation: "弓箭手",
    skills: ["箭术", "追踪", "野外生存"],
    image: "/placeholder.svg?height=600&width=400",
    author: "菲特·雨果",
    stories: [
      { title: "森林守护者", content: "奥利维亚成为森林守护者的那天，整个森林都在欢呼..." },
      { title: "神秘的精灵", content: "在一次巡逻中，奥利维亚遇到了一个神秘的森林精灵..." }
    ]
  }
];

const authors = [
  {
    name: "艾米莉·布朗",
    shortDescription:  "奇幻小说大师",
    biography: "艾米莉·布朗是一位备受赞誉的奇幻小说作家，以其丰富的想象力和细腻的人物刻画而闻名。她的作品常常探讨魔法与现实的交织，以及人性在面对超自然力量时的反应。",
    writingStyle: "优雅细腻，富有诗意",
    notableWorks: ["魔法森林的秘密", "时间之轮", "星辰魔法师"],
    image: "/placeholder.svg?height=600&width=400"
  },
  {
    name: "大卫·史密斯",
    shortDescription: "史诗奇幻作家",
    biography: "大卫·史密斯是一位擅长创作宏大史诗奇幻的作家。他的作品以复杂的世界观和跌宕起伏的情节著称。史密斯先生在创作之前常常会花费大量时间构建完整的幻想世界，包括其历史、地理和文化。",
    writingStyle: "宏大磅礴，情节紧凑",
    notableWorks: ["龙骑士传奇", "永恒之剑", "影子王国"],
    image: "/placeholder.svg?height=600&width=400"
  },
  {
    name: "菲特·雨果",
    shortDescription: "侦探",
    biography: "菲特·雨果，虽然名字和某个童话作家相似，但是他是侦探，很聪明的侦探，当然没有什么名气，因为某些原因（顾客说女装更容易接到委托）他穿上了女装，变成了雨果小姐，为了金钱和自己的饭，她卧底过黑帮去，抓过贵族出轨，性别欺诈过别人，其人生丰富程度够写一本，雨果小姐·不可思议探案集。",
    writingStyle: "推理，探案",
    notableWorks: ["贝德尔巷案", "侦探与助手", "与克丽希亚女士（千里湘漓的英译谐音）"],
    image: "/placeholder.svg?height=600&width=400"
  }
];

const app = createApp({
  components: {
    MenuIcon,
    XIcon,
    ChevronDownIcon
  },
  setup() {
    const selectedCharacter = ref(null);
    const selectedAuthor = ref(null);
    const isSidebarOpen = ref(true);
    const currentTheme = ref('default');
    const authorExpanded = ref({});
    const longPressTimer = ref(null);
    const newStory = ref({ title: '', content: '' });

    const themes = [
      { name: 'default', label: '默认主题', color: 'purple-600' },
      { name: 'elegant', label: '冷淡高级风', color: 'gray-700' },
      { name: 'cute', label: '可爱风格', color: 'pink-400' },
      { name: 'dark', label: '暗黑主题', color: 'gray-900' }
    ];

    const groupedCharacters = computed(() => {
      return authors.map(author => ({
        name: author.name,
        characters: characters.filter(character => character.author === author.name)
      }));
    });

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    const toggleAuthor = (authorName) => {
      authorExpanded.value[authorName] = !authorExpanded.value[authorName];
    };

    const selectCharacter = (character) => {
      selectedCharacter.value = character;
      selectedAuthor.value = null;
      if (window.innerWidth < 1024) {
        isSidebarOpen.value = false;
      }
    };

    const selectAuthor = (authorName) => {
      selectedAuthor.value = authors.find(author => author.name === authorName);
      selectedCharacter.value = null;
      if (window.innerWidth < 1024) {
        isSidebarOpen.value = false;
      }
    };

    const setTheme = (themeName) => {
      currentTheme.value = themeName;
    };

    const startLongPress = (author) => {
      longPressTimer.value = setTimeout(() => {
        selectAuthor(author.name);
      }, 500); // 500ms for long press
    };

    const endLongPress = () => {
      if (longPressTimer.value) {
        clearTimeout(longPressTimer.value);
      }
    };

    const addStory = () => {
      if (selectedCharacter.value && newStory.value.title && newStory.value.content) {
        selectedCharacter.value.stories.push({
          title: newStory.value.title,
          content: newStory.value.content
        });
        newStory.value = { title: '', content: '' };
      }
    };

    return {
      selectedCharacter,
      selectedAuthor,
      isSidebarOpen,
      currentTheme,
      authorExpanded,
      newStory,
      themes,
      groupedCharacters,
      toggleSidebar,
      toggleAuthor,
      selectCharacter,
      selectAuthor,
      setTheme,
      startLongPress,
      endLongPress,
      addStory
    };
  }
});

app.mount('#app');
