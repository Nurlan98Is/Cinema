const hboSeries = [
    {
      id: 32,
      title: {
        original: "The Sopranos",
        russian: "Клан Сопрано"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_.jpg',
      genre: ["Криминал", "Драма", "Психологический триллер"],
      years: {
        start: 1999,
        end: 2007,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 86,
      description: "Тони Сопрано - босс нью-джерсийской мафии, который вынужден посещать психотерапевта из-за панических атак.",
      creators: ["Дэвид Чейз"],
      imdbRating: 9.2,
      awards: ["21 премия Эмми", "5 Золотых глобусов"],
      cast: ["Джеймс Гандольфини", "Лоррейн Бракко", "Эди Фалко", "Майкл Империоли"],
      streaming: "HBO Max",
      notable: "Считается одним из величайших телесериалов в истории"
    },
    {
      id: 33,
      title: {
        original: "The Wire",
        russian: "Прослушка"
      },
      image: 'https://m.media-amazon.com/images/I/91i4+EUYM0L._UF1000,1000_QL80_.jpg',
      genre: ["Криминал", "Драма", "Детектив"],
      years: {
        start: 2002,
        end: 2008,
        status: "Завершён"
      },
      seasons: 5,
      episodes: 60,
      description: "Детективы и наркоторговцы Балтимора в реалистичном изображении городских проблем и коррупции.",
      creators: ["Дэвид Саймон"],
      imdbRating: 9.3,
      awards: ["1 премия Эмми"],
      cast: ["Доминик Уэст", "Идрис Эльба", "Майкл К. Уильямс", "Лэнс Реддик"],
      streaming: "HBO Max",
      notable: "Культовый статус за социальный реализм и сложное повествование"
    },
    {
      id: 34,
      title: {
        original: "Game of Thrones",
        russian: "Игра престолов"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Фэнтези", "Драма", "Приключения"],
      years: {
        start: 2011,
        end: 2019,
        status: "Завершён"
      },
      seasons: 8,
      episodes: 73,
      description: "Борьба за Железный трон Семи королевств Вестероса в мире магии, драконов и политических интриг.",
      creators: ["Дэвид Бениофф", "Д. Б. Уайсс"],
      imdbRating: 9.2,
      awards: ["59 премий Эмми"],
      cast: ["Питер Динклэйдж", "Лина Хиди", "Эмилия Кларк", "Кит Харингтон"],
      streaming: "HBO Max",
      notable: "Один из самых дорогих и популярных сериалов в истории телевидения"
    },
    {
      id: 35,
      title: {
        original: "Succession",
        russian: "Наследство"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Драма", "Сатира", "Семейный"],
      years: {
        start: 2018,
        end: 2023,
        status: "Завершён"
      },
      seasons: 4,
      episodes: 39,
      description: "Борьба детей медиа-магната Логана Роя за контроль над семейной империей.",
      creators: ["Джесси Армстронг"],
      imdbRating: 8.8,
      awards: ["13 премий Эмми", "5 Золотых глобусов"],
      cast: ["Брайан Кокс", "Джереми Стронг", "Сара Снук", "Киран Калкин"],
      streaming: "HBO Max",
      notable: "Критический успех за острое изображение власти и семейных отношений"
    },
    {
      id: 36,
      title: {
        original: "Chernobyl",
        russian: "Чернобыль"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Драма", "Исторический", "Триллер"],
      years: {
        start: 2019,
        end: 2019,
        status: "Мини-сериал"
      },
      seasons: 1,
      episodes: 5,
      description: "Хроника катастрофы на Чернобыльской АЭС в 1986 году и последующих расследований.",
      creators: ["Крейг Мейзин"],
      imdbRating: 9.4,
      awards: ["10 премий Эмми", "2 Золотых глобуса"],
      cast: ["Джаред Харрис", "Стеллан Скарсгард", "Эмили Уотсон", "Пол Риттер"],
      streaming: "HBO Max",
      notable: "Самый высокооцененный сериал на IMDb"
    },
    {
      id: 37,
      title: {
        original: "The Last of Us",
        russian: "Одни из нас"
      },
      image: 'src/assets/last-of-us.jpg',
      genre: ["Постапокалипсис", "Драма", "Ужасы"],
      years: {
        start: 2023,
        end: null,
        status: "Продолжается"
      },
      seasons: 1,
      episodes: 9,
      description: "Джоэл должен перевезти через постапокалиптическую Америку девочку Элли, которая может быть ключом к спасению человечества.",
      creators: ["Крейг Мейзин", "Нил Дракманн"],
      imdbRating: 8.8,
      awards: ["8 премий Эмми"],
      cast: ["Педро Паскаль", "Белла Рамзи", "Анна Торв", "Нико Паркер"],
      streaming: "HBO Max",
      notable: "Успешная адаптация культовой видеоигры"
    },
    {
      id: 38,
      title: {
        original: "Westworld",
        russian: "Мир Дикого Запада"
      },
      image: 'src/assets/westworld.jpg',
      genre: ["Научная фантастика", "Драма", "Триллер"],
      years: {
        start: 2016,
        end: 2022,
        status: "Завершён"
      },
      seasons: 4,
      episodes: 36,
      description: "В тематическом парке с андроидами гости могут жить своими фантазиями, но синтетическое сознание просыпается.",
      creators: ["Джонатан Нолан", "Лиза Джой"],
      imdbRating: 8.5,
      awards: ["9 премий Эмми"],
      cast: ["Эван Рachel Вуд", "Джеффри Райт", "Эд Харрис", "Тэндиве Ньютон"],
      streaming: "HBO Max",
      notable: "Современная адаптация фильма 1973 года"
    },
    {
      id: 39,
      title: {
        original: "True Detective",
        russian: "Настоящий детектив"
      },
      image: 'src/assets/true-detective.jpg',
      genre: ["Детектив", "Драма", "Криминал"],
      years: {
        start: 2014,
        end: null,
        status: "Антология"
      },
      seasons: 4,
      episodes: 30,
      description: "Антологический сериал, где каждый сезон - новая детективная история с новыми персонажами.",
      creators: ["Ник Пиццолатто"],
      imdbRating: 8.9,
      awards: ["5 премий Эмми"],
      cast: ["Мэттью Макконахи", "Вуди Харрельсон", "Махершала Али", "Джоди Фостер"],
      streaming: "HBO Max",
      notable: "Первый сезон считается одним из лучших в истории телевидения"
    },
    {
      id: 40,
      title: {
        original: "The White Lotus",
        russian: "Белый лотос"
      },
      image: 'src/assets/white-lotus.jpg',
      genre: ["Комедия", "Драма", "Сатира"],
      years: {
        start: 2021,
        end: null,
        status: "Продолжается"
      },
      seasons: 2,
      episodes: 13,
      description: "Сатира о гостях и сотрудниках роскошных курортов сети Белый Лотос.",
      creators: ["Майк Уайт"],
      imdbRating: 7.8,
      awards: ["10 премий Эмми"],
      cast: ["Дженнифер Кулидж", "Мюррей Бартлетт", "Обри Плаза", "Ф. Мюррей Абрахам"],
      streaming: "HBO Max",
      notable: "Критический успех и культурный феномен"
    },
    {
      id: 41,
      title: {
        original: "House of the Dragon",
        russian: "Дом Дракона"
      },
      image: 'src/assets/hotd.jpg',
      genre: ["Фэнтези", "Драма", "Приключения"],
      years: {
        start: 2022,
        end: null,
        status: "Продолжается"
      },
      seasons: 1,
      episodes: 10,
      description: "Приквел 'Игры престолов' о гражданской войне в семье Таргариенов за 200 лет до событий оригинала.",
      creators: ["Райан Кондал", "Джордж Р. Р. Мартин"],
      imdbRating: 8.5,
      awards: ["1 премия Эмми"],
      cast: ["Пэдди Консидайн", "Эмма Д'Арси", "Мэтт Смит", "Оливия Кук"],
      streaming: "HBO Max",
      notable: "Успешное возвращение во вселенную 'Игры престолов'"
    },
    {
      id: 42,
      title: {
        original: "Band of Brothers",
        russian: "Братья по оружию"
      },
      image: 'src/assets/band-of-brothers.jpg',
      genre: ["Военный", "Драма", "Исторический"],
      years: {
        start: 2001,
        end: 2001,
        status: "Мини-сериал"
      },
      seasons: 1,
      episodes: 10,
      description: "История роты Easy 506-го парашютно-пехотного полка 101-й воздушно-десантной дивизии США во время Второй мировой войны.",
      creators: ["Стивен Спилберг", "Том Хэнкс"],
      imdbRating: 9.4,
      awards: ["6 премий Эмми", "1 Золотой глобус"],
      cast: ["Дэмиэн Льюис", "Рон Ливингстон", "Донни Уолберг", "Мэттью Сеттл"],
      streaming: "HBO Max",
      notable: "Считается одним из лучших военных сериалов всех времен"
    },
    {
      id: 43,
      title: {
        original: "The Pacific",
        russian: "Тихий океан"
      },
      image: 'src/assets/the-pacific.jpg',
      genre: ["Военный", "Драма", "Исторический"],
      years: {
        start: 2010,
        end: 2010,
        status: "Мини-сериал"
      },
      seasons: 1,
      episodes: 10,
      description: "Три морских пехотинца США во время боевых действий на Тихом океане во Второй мировой войне.",
      creators: ["Стивен Спилберг", "Том Хэнкс"],
      imdbRating: 8.3,
      awards: ["8 премий Эмми"],
      cast: ["Джозеф Маццелло", "Джеймс Бэдж Дейл", "Джон Седа", "Асимофф"],
      streaming: "HBO Max",
      notable: "Духовный преемник 'Братьев по оружию'"
    },
    {
      id: 44,
      title: {
        original: "Barry",
        russian: "Барри"
      },
      image: 'src/assets/barry.jpg',
      genre: ["Чёрная комедия", "Драма", "Криминал"],
      years: {
        start: 2018,
        end: 2023,
        status: "Завершён"
      },
      seasons: 4,
      episodes: 32,
      description: "Наемник-киллер переезжает в Лос-Анджелес и пытается стать актером, но его прошлое не отпускает.",
      creators: ["Алек Берг", "Билл Хейдер"],
      imdbRating: 8.4,
      awards: ["9 премий Эмми"],
      cast: ["Билл Хейдер", "Стивен Рут", "Сара Голдберг", "Генри Уинклер"],
      streaming: "HBO Max",
      notable: "Уникальное сочетание комедии и психологической драмы"
    },
    {
      id: 45,
      title: {
        original: "Euphoria",
        russian: "Эйфория"
      },
      image: 'src/assets/euphoria.jpg',
      genre: ["Драма", "Подростковый", "Психологический"],
      years: {
        start: 2019,
        end: null,
        status: "Продолжается"
      },
      seasons: 2,
      episodes: 16,
      description: "Группа старшеклассников переживает любовь, дружбу, зависимости и травмы в эпоху социальных сетей.",
      creators: ["Сэм Левенсон"],
      imdbRating: 8.4,
      awards: ["6 премий Эмми"],
      cast: ["Зендея", "Хантер Шафер", "Сидна Суини", "Джейкоб Элорди"],
      streaming: "HBO Max",
      notable: "Визуально инновационный сериал, ставший культурным феноменом"
    },
    {
      id: 46,
      title: {
        original: "The Leftovers",
        russian: "Оставленные"
      },
      image: 'src/assets/leftovers.jpg',
      genre: ["Драма", "Фэнтези", "Мистика"],
      years: {
        start: 2014,
        end: 2017,
        status: "Завершён"
      },
      seasons: 3,
      episodes: 28,
      description: "После внезапного исчезновения 2% населения мира оставшиеся пытаются жить в изменившейся реальности.",
      creators: ["Деймон Линделоф", "Том Перротта"],
      imdbRating: 8.3,
      awards: ["1 премия Эмми"],
      cast: ["Джастин Теру", "Эми Бреннеман", "Кэрри Кун", "Кристофер Эклистон"],
      streaming: "HBO Max",
      notable: "Культовый статус за философскую глубину и эмоциональное воздействие"
    },
    {
      id: 47,
      title: {
        original: "Six Feet Under",
        russian: "Клиент всегда мёртв"
      },
      image: 'src/assets/six-feet-under.jpg',
      genre: ["Драма", "Чёрная комедия", "Семейный"],
      years: {
        start: 2001,
        end: 2005,
        status: "Завершён"
      },
      seasons: 5,
      episodes: 63,
      description: "Семья Фишеров управляет похоронным бюро в Лос-Анджелесе после смерти отца семейства.",
      creators: ["Алан Болл"],
      imdbRating: 8.7,
      awards: ["9 премий Эмми", "3 Золотых глобуса"],
      cast: ["Питер Краузе", "Майкл С. Холл", "Фрэнсис Конрой", "Лорен Эмброуз"],
      streaming: "HBO Max",
      notable: "Считается одним из сериалов с лучшим финалом в истории телевидения"
    },
    {
      id: 48,
      title: {
        original: "Veep",
        russian: "Вице-президент"
      },
      image: 'src/assets/veep.jpg',
      genre: ["Сатира", "Комедия", "Политический"],
      years: {
        start: 2012,
        end: 2019,
        status: "Завершён"
      },
      seasons: 7,
      episodes: 65,
      description: "Селина Майер становится вице-президентом США и обнаруживает, что эта должность не имеет реальной власти.",
      creators: ["Армандо Ианнуччи"],
      imdbRating: 8.3,
      awards: ["17 премий Эмми"],
      cast: ["Джулия Луи-Дрейфус", "Тони Хейл", "Анна Кламски", "Мэтт Уолш"],
      streaming: "HBO Max",
      notable: "Рекордсмен по количеству премий Эмми для комедийного сериала"
    },
    {
      id: 49,
      title: {
        original: "Deadwood",
        russian: "Дедвуд"
      },
      image: 'src/assets/deadwood.jpg',
      genre: ["Вестерн", "Драма", "Исторический"],
      years: {
        start: 2004,
        end: 2006,
        status: "Завершён"
      },
      seasons: 3,
      episodes: 36,
      description: "Жизнь в лагерях золотоискателей Дедвуда, Южная Дакота, в 1870-х годах.",
      creators: ["Дэвид Милч"],
      imdbRating: 8.7,
      awards: ["8 премий Эмми", "1 Золотой глобус"],
      cast: ["Тимоти Олифант", "Иэн МакШейн", "Молли Паркер", "Джон Хоукс"],
      streaming: "HBO Max",
      notable: "Известен уникальным диалоговым стилем и исторической достоверностью"
    },
    {
      id: 50,
      title: {
        original: "The Night Of",
        russian: "Ночной гость"
      },
      image: 'src/assets/the-night-of.jpg',
      genre: ["Криминал", "Драма", "Детектив"],
      years: {
        start: 2016,
        end: 2016,
        status: "Мини-сериал"
      },
      seasons: 1,
      episodes: 8,
      description: "Студент обвиняется в убийстве, с которым он провел ночь, и попадает в сложную судебную систему.",
      creators: ["Стивен Заиллян", "Ричард Прайс"],
      imdbRating: 8.5,
      awards: ["5 премий Эмми"],
      cast: ["Риз Ахмед", "Джон Туртурро", "Билл Кэмп", "Пэйман Маади"],
      streaming: "HBO Max",
      notable: "Критический успех за реалистичное изображение судебной системы"
    },
    {
      id: 51,
      title: {
        original: "Big Little Lies",
        russian: "Большая маленькая ложь"
      },
      image: 'src/assets/big-little-lies.jpg',
      genre: ["Драма", "Детектив", "Триллер"],
      years: {
        start: 2017,
        end: 2019,
        status: "Завершён"
      },
      seasons: 2,
      episodes: 14,
      description: "Три матери в престижном калифорнийском городке вовлекаются в расследование убийства.",
      creators: ["Дэвид Э. Келли"],
      imdbRating: 8.5,
      awards: ["8 премий Эмми", "4 Золотых глобуса"],
      cast: ["Риз Уизерспун", "Николь Кидман", "Шейлин Вудли", "Лора Дерн"],
      streaming: "HBO Max",
      notable: "Звездный состав и остросоциальная тематика"
    },
    {
        id: 52,
        title: {
          original: "Sex and the City",
          russian: "Секс в большом городе"
        },
        image: 'src/assets/sex-and-the-city.jpg',
        genre: ["Комедия", "Драма", "Романтика"],
        years: {
          start: 1998,
          end: 2004,
          status: "Завершён"
        },
        seasons: 6,
        episodes: 94,
        description: "Четыре подруги в Нью-Йорке исследуют сложности любви, карьеры и дружбы через призму колонки Кэрри Брэдшоу о сексе и отношениях.",
        creators: ["Даррен Стар"],
        imdbRating: 7.1,
        awards: ["7 премий Эмми", "8 Золотых глобусов"],
        cast: ["Сара Джессика Паркер", "Ким Кэтролл", "Синтия Никсон", "Кристин Дэвис"],
        streaming: "HBO Max",
        notable: "Культовый сериал, определивший стиль и разговоры о сексе и отношениях для целого поколения"
      }
  ];

  export default hboSeries