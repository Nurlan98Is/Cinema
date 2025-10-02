const netflixSeries = [
    {
      id: 53,
      title: {
        original: "Stranger Things",
        russian: "Очень странные дела"
      },
      image: 'src/assets/stranger-things.jpg',
      genre: ["Научная фантастика", "Ужасы", "Драма"],
      years: {
        start: 2016,
        end: null,
        status: "Продолжается"
      },
      seasons: 4,
      episodes: 34,
      description: "Группа детей в маленьком городке сталкивается со сверхъестественными явлениями и правительственными заговорами.",
      creators: ["Братья Даффер"],
      imdbRating: 8.7,
      awards: ["7 премий Эмми"],
      cast: ["Милли Бобби Браун", "Финн Вулфхард", "Дэвид Харбор", "Вайнона Райдер"],
      streaming: "Netflix",
      notable: "Культовый сериал, возродивший интерес к ностальгии по 80-м"
    },
    {
      id: 54,
      title: {
        original: "The Crown",
        russian: "Корона"
      },
      image: 'src/assets/the-crown.jpg',
      genre: ["Драма", "Исторический", "Биографический"],
      years: {
        start: 2016,
        end: 2023,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 60,
      description: "История правления королевы Елизаветы II и событий, которые сформировали вторую половину XX века.",
      creators: ["Питер Морган"],
      imdbRating: 8.6,
      awards: ["21 премия Эмми", "3 Золотых глобуса"],
      cast: ["Клэр Фой", "Оливия Колман", "Имельда Стонтон", "Мэтт Смит"],
      streaming: "Netflix",
      notable: "Один из самых дорогих телесериалов в истории"
    },
    {
      id: 55,
      title: {
        original: "Narcos",
        russian: "Нарко"
      },
      image: 'src/assets/narcos.jpg',
      genre: ["Криминал", "Драма", "Биографический"],
      years: {
        start: 2015,
        end: 2017,
        status: "Завершён"
      },
      seasons: 3,
      episodes: 30,
      description: "Взлет и падение печально известного наркобарона Пабло Эскобара и кокаинового картеля Медельина.",
      creators: ["Крис Бранкато", "Карло Бернард", "Дуг Миро"],
      imdbRating: 8.8,
      awards: ["3 премии Эмми"],
      cast: ["Вагнер Моура", "Педро Паскаль", "Бойд Холбрук", "Хуан Пабло Раба"],
      streaming: "Netflix",
      notable: "Популяризировал жанр нарко-драм на телевидении"
    },
    {
      id: 56,
      title: {
        original: "The Witcher",
        russian: "Ведьмак"
      },
      image: 'src/assets/the-witcher.jpg',
      genre: ["Фэнтези", "Драма", "Приключения"],
      years: {
        start: 2019,
        end: null,
        status: "Продолжается"
      },
      seasons: 3,
      episodes: 24,
      description: "Ведьмак Геральт из Ривии, мутант и наемный убийца монстров, struggles to find his place in a world where people often prove more wicked than beasts.",
      creators: ["Лорен Шмидт"],
      imdbRating: 8.2,
      awards: [],
      cast: ["Генри Кавилл", "Аня Чалотра", "Фрейя Аллан", "Джоуи Бэти"],
      streaming: "Netflix",
      notable: "Адаптация культовой серии книг и видеоигр"
    },
    {
      id: 57,
      title: {
        original: "House of Cards",
        russian: "Карточный домик"
      },
      image: 'src/assets/house-of-cards.jpg',
      genre: ["Политический триллер", "Драма"],
      years: {
        start: 2013,
        end: 2018,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 73,
      description: "Беспринципный конгрессмен Фрэнк Андервуд начинает свой путь к вершинам власти в Вашингтоне.",
      creators: ["Бо Уиллимон"],
      imdbRating: 8.7,
      awards: ["7 премий Эмми"],
      cast: ["Кевин Спейси", "Робин Райт", "Майкл Келли", "Кейт Мара"],
      streaming: "Netflix",
      notable: "Первый оригинальный сериал Netflix, получивший премию Эмми"
    },
    {
      id: 58,
      title: {
        original: "Orange Is the New Black",
        russian: "Оранжевый — хит сезона"
      },
      image: 'src/assets/orange-is-new-black.jpg',
      genre: ["Комедия", "Драма"],
      years: {
        start: 2013,
        end: 2019,
        status: "Завершён"
      },
      seasons: 7,
      episodes: 91,
      description: "Жизнь женщин в федеральной тюрьме после того, как благополучная жительница Нью-Йорка попадает за решетку за прошлое преступление.",
      creators: ["Дженджи Коэн"],
      imdbRating: 8.1,
      awards: ["6 премий Эмми"],
      cast: ["Тейлор Шиллинг", "Лоренцо Препун", "Джейсон Биггс", "Кейт Малгрю"],
      streaming: "Netflix",
      notable: "Прорывной сериал, показавший разнообразие женских персонажей"
    },
    {
      id: 59,
      title: {
        original: "Black Mirror",
        russian: "Черное зеркало"
      },
      image: 'src/assets/black-mirror.jpg',
      genre: ["Научная фантастика", "Драма", "Антология"],
      years: {
        start: 2011,
        end: null,
        status: "Продолжается"
      },
      seasons: 6,
      episodes: 27,
      description: "Антология, исследующая темную сторону технологий и их влияние на современное общество.",
      creators: ["Чарли Брукер"],
      imdbRating: 8.8,
      awards: ["6 премий Эмми"],
      cast: ["Разные актеры в каждом эпизоде"],
      streaming: "Netflix",
      notable: "Современная классика научной фантастики с культурным влиянием"
    },
    {
      id: 60,
      title: {
        original: "The Queen's Gambit",
        russian: "Ход королевы"
      },
      image: 'src/assets/queens-gambit.jpg',
      genre: ["Драма", "Исторический"],
      years: {
        start: 2020,
        end: 2020,
        status: "Мини-сериал"
      },
      seasons: 1,
      episodes: 7,
      description: "Сирота-шахматистка в 1950-х годах стремится стать величайшим шахматистом в мире, борясь с зависимостью.",
      creators: ["Скотт Фрэнк"],
      imdbRating: 8.5,
      awards: ["11 премий Эмми", "2 Золотых глобуса"],
      cast: ["Аня Тейлор-Джой", "Билл Кэмп", "Мошелл Дэвис", "Томас Броди-Сангстер"],
      streaming: "Netflix",
      notable: "Вызвал всемирный всплеск интереса к шахматам"
    },
    {
      id: 61,
      title: {
        original: "Money Heist",
        russian: "Бумажный дом"
      },
      image: 'src/assets/money-heist.jpg',
      genre: ["Криминал", "Драма", "Триллер"],
      years: {
        start: 2017,
        end: 2021,
        status: "Завершён"
      },
      seasons: 5,
      episodes: 41,
      description: "Загадочный человек по имени Профессор собирает команду для осуществления крупнейшего ограбления в истории Испании.",
      creators: ["Алекс Пина"],
      imdbRating: 8.2,
      awards: ["1 премия Эмми"],
      cast: ["Урсула Корберо", "Альваро Морте", "Ициар Итуно", "Педро Алонсо"],
      streaming: "Netflix",
      notable: "Испанский сериал, ставший международным феноменом"
    },
    {
      id: 62,
      title: {
        original: "Dark",
        russian: "Тьма"
      },
      image: 'src/assets/dark.jpg',
      genre: ["Научная фантастика", "Триллер", "Драма"],
      years: {
        start: 2017,
        end: 2020,
        status: "Завершён"
      },
      seasons: 3,
      episodes: 26,
      description: "Исчезновение детей в немецком городке раскрывает тайны четырех семей, связанных путешествиями во времени.",
      creators: ["Баран бо Одар", "Янтье Фризе"],
      imdbRating: 8.7,
      awards: [],
      cast: ["Луи Хофманн", "Лиза Виккари", "Оливер Мазуччи", "Каролина Айххорн"],
      streaming: "Netflix",
      notable: "Считается одним из самых сложных и продуманных сериалов о путешествиях во времени"
    },
    {
      id: 63,
      title: {
        original: "Ozark",
        russian: "Озарк"
      },
      image: 'src/assets/ozark.jpg',
      genre: ["Криминал", "Драма", "Триллер"],
      years: {
        start: 2017,
        end: 2022,
        status: "Завершён"
      },
      seasons: 4,
      episodes: 44,
      description: "Финансовый консультант вынужден перевезти семью в Озарк, чтобы отмывать деньги для наркокартеля.",
      creators: ["Билл Дубюк", "Марк Уильямс"],
      imdbRating: 8.4,
      awards: ["3 премии Эмми"],
      cast: ["Джейсон Бейтман", "Лора Линни", "Джулия Гарнер", "София Хьюблиц"],
      streaming: "Netflix",
      notable: "Критический успех за напряженное повествование и сильную игру актеров"
    },
    {
      id: 64,
      title: {
        original: "Bridgerton",
        russian: "Бриджертоны"
      },
      image: 'src/assets/bridgerton.jpg',
      genre: ["Драма", "Романтика", "Исторический"],
      years: {
        start: 2020,
        end: null,
        status: "Продолжается"
      },
      seasons: 2,
      episodes: 16,
      description: "Семья Бриджертонов в регентской Англии ищет любовь и счастье в высшем обществе.",
      creators: ["Крис Ван Дюзен"],
      imdbRating: 7.3,
      awards: [],
      cast: ["Фиби Дайневор", "Реджи-Жан Пейдж", "Джонатан Бейли", "Никола Коглан"],
      streaming: "Netflix",
      notable: "Один из самых популярных сериалов Netflix с рекордными показателями просмотров"
    },
    {
      id: 65,
      title: {
        original: "The Umbrella Academy",
        russian: "Академия Амбрелла"
      },
      image: 'src/assets/umbrella-academy.jpg',
      genre: ["Супергерои", "Комедия", "Драма"],
      years: {
        start: 2019,
        end: null,
        status: "Продолжается"
      },
      seasons: 3,
      episodes: 30,
      description: "Разобщенная семья супергероев воссоединяется, чтобы раскрыть тайну смерти своего отца и предотвратить апокалипсис.",
      creators: ["Стив Блэкман"],
      imdbRating: 7.9,
      awards: [],
      cast: ["Эллиот Пейдж", "Том Хоппер", "Эйдан Галлахер", "Роберт Шиэн"],
      streaming: "Netflix",
      notable: "Адаптация комиксов Джерарда Вэя"
    },
    {
      id: 66,
      title: {
        original: "Mindhunter",
        russian: "Охотник за разумом"
      },
      image: 'src/assets/mindhunter.jpg',
      genre: ["Криминал", "Драма", "Триллер"],
      years: {
        start: 2017,
        end: 2019,
        status: "На паузе"
      },
      seasons: 2,
      episodes: 19,
      description: "Агенты ФБР в конце 1970-х годов разрабатывают профилирование серийных убийц, интервьюируя осужденных преступников.",
      creators: ["Джо Пенхолл"],
      imdbRating: 8.6,
      awards: [],
      cast: ["Джонатан Грофф", "Холт Маккленани", "Анна Торв", "Кэмерон Бриттон"],
      streaming: "Netflix",
      notable: "Культовый статус несмотря на преждевременное завершение"
    },
    {
      id: 67,
      title: {
        original: "BoJack Horseman",
        russian: "БоДжек Всадник"
      },
      image: 'src/assets/bojack-horseman.jpg',
      genre: ["Анимация", "Комедия", "Драма"],
      years: {
        start: 2014,
        end: 2020,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 77,
      description: "Бывшая звезда ситкомов 90-х, антропоморфная лошадь, пытается вернуться к славе в Голливуде.",
      creators: ["Рафаэль Боб-Ваксберг"],
      imdbRating: 8.8,
      awards: [],
      cast: ["Уилл Арнетт", "Эми Седарис", "Аарон Пол", "Элисон Бри"],
      streaming: "Netflix",
      notable: "Считается одним из лучших анимационных сериалов для взрослых"
    },
    {
      id: 68,
      title: {
        original: "The Haunting of Hill House",
        russian: "Призраки дома на холме"
      },
      image: 'src/assets/hill-house.jpg',
      genre: ["Ужасы", "Драма", "Мистика"],
      years: {
        start: 2018,
        end: 2018,
        status: "Мини-сериал"
      },
      seasons: 1,
      episodes: 10,
      description: "Братья и сестры, которые выросли в самом известном доме с привидениями в Америке, вынуждены вернуться туда.",
      creators: ["Майк Флэнаган"],
      imdbRating: 8.6,
      awards: [],
      cast: ["Михил Хаусман", "Карла Гуджино", "Тимоти Хаттон", "Элизабет Ризер"],
      streaming: "Netflix",
      notable: "Критический успех за сочетание ужасов и семейной драмы"
    },
    {
      id: 69,
      title: {
        original: "You",
        russian: "Ты"
      },
      image: 'src/assets/you.jpg',
      genre: ["Психологический триллер", "Драма", "Криминал"],
      years: {
        start: 2018,
        end: null,
        status: "Продолжается"
      },
      seasons: 4,
      episodes: 40,
      description: "Менеджер книжного магазина использует социальные сети и технологии, чтобы манипулировать жизнью женщин, в которых влюбляется.",
      creators: ["Грег Берланти", "Сера Гэмбл"],
      imdbRating: 7.8,
      awards: [],
      cast: ["Пенн Бэджли", "Виктория Педретти", "Элизабет Лайл", "Шарлотта Ричи"],
      streaming: "Netflix",
      notable: "Популярный триллер о токсичной одержимости в цифровую эпоху"
    },
    {
      id: 70,
      title: {
        original: "Squid Game",
        russian: "Игра в кальмара"
      },
      image: 'src/assets/squid-game.jpg',
      genre: ["Триллер", "Драма", "Выживание"],
      years: {
        start: 2021,
        end: null,
        status: "Продолжается"
      },
      seasons: 1,
      episodes: 9,
      description: "Участники с финансовыми проблемами соревнуются в детских играх с смертельным исходом за огромный денежный приз.",
      creators: ["Хван Дон Хёк"],
      imdbRating: 8.0,
      awards: ["3 премии Эмми"],
      cast: ["Ли Джон Джэ", "Пак Хе Су", "Ви Ха Джун", "О Ён Су"],
      streaming: "Netflix",
      notable: "Самый популярный сериал Netflix за всю историю"
    },
    {
      id: 71,
      title: {
        original: "Wednesday",
        russian: "Уэнсдей"
      },
      image: 'src/assets/wednesday.jpg',
      genre: ["Комедия", "Драма", "Фэнтези"],
      years: {
        start: 2022,
        end: null,
        status: "Продолжается"
      },
      seasons: 1,
      episodes: 8,
      description: "Уэнсдей Аддамс расследует серию убийств в академии для необычных детей, развивая свои психические способности.",
      creators: ["Альфред Гоф", "Майлз Миллар"],
      imdbRating: 8.2,
      awards: [],
      cast: ["Дженна Ортега", "Кэтрин Зета-Джонс", "Луис Гусман", "Гвендолин Кристи"],
      streaming: "Netflix",
      notable: "Второй самый популярный сериал Netflix после 'Игры в кальмара'"
    },
    {
      id: 72,
      title: {
        original: "The Sandman",
        russian: "Песочный человек"
      },
      image: 'src/assets/sandman.jpg',
      genre: ["Фэнтези", "Драма", "Мистика"],
      years: {
        start: 2022,
        end: null,
        status: "Продолжается"
      },
      seasons: 1,
      episodes: 11,
      description: "После десятилетий заточения Повелитель Снов Морфей отправляется в путешествие по мирам, чтобы восстановить свои силы.",
      creators: ["Нил Гейман", "Дэвид С. Гойер", "Аллан Хайнберг"],
      imdbRating: 7.7,
      awards: [],
      cast: ["Том Стэрридж", "Джена Коулман", "Гвендолин Кристи", "Бойд Холбрук"],
      streaming: "Netflix",
      notable: "Долгожданная адаптация культового комикса Нила Геймана"
    },
    {
      id: 73,
      title: {
        original: "Love, Death & Robots",
        russian: "Любовь, смерть и роботы"
      },
      image: 'src/assets/love-death-robots.jpg',
      genre: ["Анимация", "Научная фантастика", "Антология"],
      years: {
        start: 2019,
        end: null,
        status: "Продолжается"
      },
      seasons: 3,
      episodes: 35,
      description: "Антология анимационных короткометражек, исследующих темы любви, смерти, технологий и будущего.",
      creators: ["Тим Миллер", "Дэвид Финчер"],
      imdbRating: 8.5,
      awards: ["5 премий Эмми"],
      cast: ["Разные актеры в каждом эпизоде"],
      streaming: "Netflix",
      notable: "Визуально инновационная антология с разнообразными анимационными стилями"
    },
    {
      id: 74,
      title: {
        original: "Russian Doll",
        russian: "Русская кукла"
      },
      image: 'src/assets/russian-doll.jpg',
      genre: ["Комедия", "Драма", "Мистика"],
      years: {
        start: 2019,
        end: 2022,
        status: "Завершён"
      },
      seasons: 2,
      episodes: 15,
      description: "Женщина застревает в временной петле, постоянно умирая и возрождаясь на своей вечеринке в честь дня рождения.",
      creators: ["Лесли Хедленд", "Наташа Лионн", "Эми Полер"],
      imdbRating: 7.8,
      awards: ["4 премии Эмми"],
      cast: ["Наташа Лионн", "Чарли Барнетт", "Грета Ли", "Иветт Меррит Браун"],
      streaming: "Netflix",
      notable: "Инновационный подход к теме временной петли"
    },
    {
      id: 75,
      title: {
        original: "The Squid Game: The Challenge",
        russian: "Игра в кальмара: Вызов"
      },
      image: 'src/assets/squid-game-challenge.jpg',
      genre: ["Реалити-шоу", "Соревнование"],
      years: {
        start: 2023,
        end: null,
        status: "Продолжается"
      },
      seasons: 1,
      episodes: 10,
      description: "Реалити-шоу, в котором 456 участников соревнуются в играх из оригинального сериала за самый большой денежный приз в истории телевидения.",
      creators: ["Создано по мотивам сериала Хвана Дон Хёка"],
      imdbRating: 6.0,
      awards: [],
      cast: ["Участники-неактеры"],
      streaming: "Netflix",
      notable: "Самое масштабное реалити-шоу в истории с рекордным призовым фондом"
    }
  ];

export default netflixSeries