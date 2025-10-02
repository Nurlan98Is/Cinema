const classicSitcoms = [
    {
      id: 12,
      title: {
        original: "Friends",
        russian: "Друзья"
      },
      image: 'https://www.kino-teatr.ru/movie/posters/big/0/1/18910.jpg',
      genre: ["Ситком", "Комедия", "Романтика"],
      years: {
        start: 1994,
        end: 2004,
        status: "Завершён"
      },
      seasons: 10,
      episodes: 236,
      description: "Жизнь шестерых друзей, живущих в Манхэттене. История их приключений, любовных отношений и карьеры на протяжении десяти лет.",
      creators: ["Дэвид Крейн", "Марта Кауффман"],
      imdbRating: 8.9,
      awards: ["6 премий Эмми", "1 Золотой глобус"],
      cast: ["Дженнифер Энистон", "Кортни Кокс", "Лиза Кудроу", "Мэтт ЛеБлан", "Мэттью Перри", "Дэвид Швиммер"],
      streaming: "Netflix",
      notable: "Один из самых популярных ситкомов в истории телевидения"
    },
    {
      id: 13,
      title: {
        original: "How I Met Your Mother",
        russian: "Как я встретил вашу маму"
      },
      image: 'https://www.kino-teatr.ru/movie/poster/20165/86690.jpg',
      genre: ["Ситком", "Комедия", "Романтика"],
      years: {
        start: 2005,
        end: 2014,
        status: "Завершён"
      },
      seasons: 9,
      episodes: 208,
      description: "Тед Мосби рассказывает своим детям историю о том, как он встретил их мать, вспоминая свои приключения с друзьями в Нью-Йорке.",
      creators: ["Картер Бэйс", "Крейг Томас"],
      imdbRating: 8.3,
      awards: ["10 премий Эмми"],
      cast: ["Джош Рэднор", "Нил Патрик Харрис", "Коби Смолдерс", "Джейсон Сигел", "Элисон Хэннигэн"],
      streaming: "Disney+",
      notable: "Известен нелинейным повествованием и культовой финальной сценой"
    },
    {
      id: 14,
      title: {
        original: "Scrubs",
        russian: "Клиника"
      },
      image: 'https://www.kino-teatr.ru/movie/poster/24029/185437.jpg',
      genre: ["Ситком", "Комедия", "Медицинская драма"],
      years: {
        start: 2001,
        end: 2010,
        status: "Завершён"
      },
      seasons: 9,
      episodes: 182,
      description: "Молодой интерн Джон Дориан начинает работу в больнице и учится справляться с профессиональными вызовами и личной жизнью.",
      creators: ["Билл Лоуренс"],
      imdbRating: 8.4,
      awards: ["2 премии Эмми"],
      cast: ["Зак Брафф", "Дональд Фэйсон", "Сара Чок", "Джон Макгинли", "Джуди Рейес"],
      streaming: "Hulu",
      notable: "Известен смешением комедии и драмы, а также внутренним монологом главного героя"
    },
    {
      id: 15,
      title: {
        original: "Brooklyn Nine-Nine",
        russian: "Бруклин 9-9"
      },
      image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ed9bd856-e92c-4a33-8035-91a910aeca45/1920x',
      genre: ["Ситком", "Комедия", "Полицейская драма"],
      years: {
        start: 2013,
        end: 2021,
        status: "Завершён"
      },
      seasons: 8,
      episodes: 153,
      description: "Комедия о работе детективов в 99-м участке полиции Бруклина во главе с серьезным капитаном и талантливым, но незрелым детективом.",
      creators: ["Дэн Гур", "Майкл Шур"],
      imdbRating: 8.4,
      awards: ["2 премии Эмми", "2 Золотых глобуса"],
      cast: ["Энди Сэмберг", "Стефани Беатриз", "Терри Крюс", "Мелисса Фумеро", "Джо Ло Трульо"],
      streaming: "Netflix",
      notable: "Известен разнообразным составом персонажей и социально значимыми темами"
    },
    {
      id: 16,
      title: {
        original: "Modern Family",
        russian: "Американская семейка"
      },
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Modern_Family_season_11_poster.jpg/250px-Modern_Family_season_11_poster.jpg',
      genre: ["Ситком", "Комедия", "Мокьюментари"],
      years: {
        start: 2009,
        end: 2020,
        status: "Завершён"
      },
      seasons: 11,
      episodes: 250,
      description: "История трех разных, но связанных семей из Лос-Анджелеса, показанная в формате мокьюментари.",
      creators: ["Кристофер Ллойд", "Стивен Левитан"],
      imdbRating: 8.4,
      awards: ["22 премии Эмми", "1 Золотой глобус"],
      cast: ["Эд О'Нил", "София Вергара", "Джули Боуэн", "Тай Беррелл", "Джесси Тайлер Фергюсон"],
      streaming: "Hulu",
      notable: "Рекордсмен по количеству премий Эмми для комедийного сериала"
    },
    {
      id: 17,
      title: {
        original: "The Big Bang Theory",
        russian: "Теория большого взрыва"
      },
      image: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/film/78/27712-1000x830.jpg',
      genre: ["Ситком", "Комедия", "Романтика"],
      years: {
        start: 2007,
        end: 2019,
        status: "Завершён"
      },
      seasons: 12,
      episodes: 279,
      description: "Комедия о группе друзей-ученых и их соседке, которая пытается научить их жизни за пределами лаборатории.",
      creators: ["Чак Лорри", "Билл Прэди"],
      imdbRating: 8.1,
      awards: ["7 премий Эмми"],
      cast: ["Джим Парсонс", "Джонни Галэки", "Кейли Куоко", "Саймон Хелберг", "Кунал Найяр"],
      streaming: "HBO Max",
      notable: "Один из самых рейтинговых ситкомов в истории телевидения"
    },
    {
      id: 18,
      title: {
        original: "The Office",
        russian: "Офис"
      },
      image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7893514_b_v13_ab.jpg',
      genre: ["Ситком", "Комедия", "Мокьюментари"],
      years: {
        start: 2005,
        end: 2013,
        status: "Завершён"
      },
      seasons: 9,
      episodes: 188,
      description: "Мокьюментари о повседневной жизни сотрудников офиса бумажной компании в Скрантоне, Пенсильвания.",
      creators: ["Грег Дэниелс"],
      imdbRating: 8.9,
      awards: ["5 премий Эмми"],
      cast: ["Стив Карелл", "Дженна Фишер", "Джон Красински", "Рэйн Уилсон", "Бриджет Мойнэхэн"],
      streaming: "Peacock",
      notable: "Американская адаптация британского сериала, ставшая культовой"
    },
    {
      id: 19,
      title: {
        original: "Parks and Recreation",
        russian: "Парки и зоны отдыха"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BNDlhMzAwNTAtNTk2NS00MTdkLWE3ZWYtMDU0MTFiYmU2ZTc0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Ситком", "Комедия", "Мокьюментари"],
      years: {
        start: 2009,
        end: 2015,
        status: "Завершён"
      },
      seasons: 7,
      episodes: 125,
      description: "Сотрудники департамента парков вымышленного города Пони, Индиана, пытаются сделать свой город лучше.",
      creators: ["Грег Дэниелс", "Майкл Шур"],
      imdbRating: 8.6,
      awards: ["1 премия Эмми"],
      cast: ["Эми Полер", "Ник Офферман", "Азiz Ансари", "Обри Плаза", "Крис Прэтт"],
      streaming: "Peacock",
      notable: "Известен оптимистичным взглядом на государственную службу"
    },
    {
      id: 20,
      title: {
        original: "The Simpsons",
        russian: "Симпсоны"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Ситком", "Комедия", "Анимация", "Сатира"],
      years: {
        start: 1989,
        end: null,
        status: "Продолжается"
      },
      seasons: 34,
      episodes: 750,
      description: "Анимационный сериал о жизни семьи Симпсонов и их приключениях в вымышленном городе Спрингфилд.",
      creators: ["Мэтт Грейнинг"],
      imdbRating: 8.6,
      awards: ["35 премий Эмми", "1 Золотой глобус"],
      cast: ["Дэн Кастелланета", "Джулия Кавнер", "Нэнси Картрайт", "Ярдли Смит", "Хэнк Азариа"],
      streaming: "Disney+",
      notable: "Самый длинный американский ситком и анимационный сериал"
    },
    {
      id: 21,
      title: {
        original: "Seinfeld",
        russian: "Сайнфелд"
      },
      image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183875_b_v8_ab.jpg',
      genre: ["Ситком", "Комедия"],
      years: {
        start: 1989,
        end: 1998,
        status: "Завершён"
      },
      seasons: 9,
      episodes: 180,
      description: "О жизни комика Джерри Сайнфелда и его друзей в Нью-Йорке. Сериал о 'ни о чём'.",
      creators: ["Ларри Дэвид", "Джерри Сайнфелд"],
      imdbRating: 8.8,
      awards: ["10 премий Эмми", "3 Золотых глобуса"],
      cast: ["Джерри Сайнфелд", "Джулия Луи-Дрейфус", "Майкл Ричардс", "Джейсон Александер"],
      streaming: "Netflix",
      notable: "Считается одним из величайших телевизионных шоу всех времен"
    },
    {
      id: 22,
      title: {
        original: "The Fresh Prince of Bel-Air",
        russian: "Принц из Беверли-Хиллз"
      },
      image: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/freshprinceposter.png',
      genre: ["Ситком", "Комедия", "Семейный"],
      years: {
        start: 1990,
        end: 1996,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 148,
      description: "Уличный парень из Филадельфии переезжает к богатым родственникам в Беверли-Хиллз.",
      creators: ["Энди Боровиц", "Сюзанна Боровиц"],
      imdbRating: 7.9,
      awards: ["2 премии Эмми"],
      cast: ["Уилл Смит", "Джеймс Эйvery", "Джанет Хьюберт", "Альфонсо Рибейро"],
      streaming: "HBO Max",
      notable: "Сериал, который сделал Уилла Смита звездой"
    },
    {
      id: 23,
      title: {
        original: "How I Met Your Father",
        russian: "Как я встретил вашего отца"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BMGZlNWVkMWItMWNlMS00YTcyLWJkOWUtM2JiMDg1MDcwZThhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Ситком", "Комедия", "Романтика"],
      years: {
        start: 2022,
        end: 2023,
        status: "Завершён"
      },
      seasons: 2,
      episodes: 30,
      description: "Спин-офф 'Как я встретил вашу маму', рассказывающий историю Софи и ее друзей в Нью-Йорке.",
      creators: ["Айзек Аптакер", "Элизабет Бергер"],
      imdbRating: 5.4,
      awards: [],
      cast: ["Хилари Дафф", "Крис Лоуэлл", "Франсия Райса", "Том Эйнсли"],
      streaming: "Hulu",
      notable: "Продолжение культового сериала с новой перспективой"
    },
    {
      id: 24,
      title: {
        original: "New Girl",
        russian: "Новая девушка"
      },
      image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8677772_b_v8_al.jpg',
      genre: ["Ситком", "Комедия", "Романтика"],
      years: {
        start: 2011,
        end: 2018,
        status: "Завершён"
      },
      seasons: 7,
      episodes: 146,
      description: "Джесс переезжает в лофт с тремя незнакомыми парнями после расставания с бойфрендом.",
      creators: ["Элизабет Мериуэзер"],
      imdbRating: 7.7,
      awards: ["1 премия Эмми"],
      cast: ["Зоуи Дешанель", "Джейк Джонсон", "Мэйс Уильямс", "Ханна Симоне"],
      streaming: "Netflix",
      notable: "Известен эксцентричным характером главной героини"
    },
    {
      id: 25,
      title: {
        original: "The Good Place",
        russian: "В лучшем мире"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BNjI3ZGRhNDYtNDFjOS00OGFlLTg4NTEtYjZjYTViY2ZiMzBkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Ситком", "Комедия", "Фэнтези"],
      years: {
        start: 2016,
        end: 2020,
        status: "Завершён"
      },
      seasons: 4,
      episodes: 53,
      description: "Элеонор Шеллстроп попадает в загробную жизнь, но понимает, что оказалась там по ошибке.",
      creators: ["Майкл Шур"],
      imdbRating: 8.2,
      awards: ["1 премия Эмми"],
      cast: ["Кристен Белл", "Тед Дэнсон", "Уильям Джексон Харпер", "Джамила Джамиль"],
      streaming: "Netflix",
      notable: "Философская комедия с неожиданными поворотами сюжета"
    },
    {
      id: 26,
      title: {
        original: "Community",
        russian: "Сообщество"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BOGIwYzNmYTktZWExZC00MzAyLTk4NTItODgwZmIyNWZhNDEyXkEyXkFqcGc@._V1_.jpg',
      genre: ["Ситком", "Комедия", "Мета-юмор"],
      years: {
        start: 2009,
        end: 2015,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 110,
      description: "Группа студентов community college образует неожиданную дружбу во время занятий в учебной группе.",
      creators: ["Дэн Хармон"],
      imdbRating: 8.5,
      awards: ["1 премия Эмми"],
      cast: ["Джоэль Макхейл", "Джиллиан Джейкобс", "Дэнни Пуди", "Элисон Бри"],
      streaming: "Netflix",
      notable: "Известен креативными эпизодами-пародиями на разные жанры"
    },
    {
      id: 27,
      title: {
        original: "It's Always Sunny in Philadelphia",
        russian: "В Филадельфии всегда солнечно"
      },
      image: 'https://m.media-amazon.com/images/M/MV5BMTFiMDg5ZTItNWU2Ni00YzJlLWE4NTQtZjUwNWFhOTViYTk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genre: ["Ситком", "Комедия", "Чёрный юмор"],
      years: {
        start: 2005,
        end: null,
        status: "Продолжается"
      },
      seasons: 16,
      episodes: 170,
      description: "Пятеро эгоистичных друзей управляют ирландским баром в Филадельфии.",
      creators: ["Роб Макэлхенни", "Гленн Хоуэртон"],
      imdbRating: 8.8,
      awards: [],
      cast: ["Чарли Дэй", "Роб Макэлхенни", "Гленн Хоуэртон", "Кейтлин Олсон", "Дэнни ДеВито"],
      streaming: "Hulu",
      notable: "Самый длинный живой ситком в американской телевизионной истории"
    },
    {
      id: 28,
      title: {
        original: "Arrested Development",
        russian: "Задержка в развитии"
      },
      image: 'src/assets/arrested-development.jpg',
      genre: ["Ситком", "Комедия", "Сатира"],
      years: {
        start: 2003,
        end: 2019,
        status: "Завершён"
      },
      seasons: 5,
      episodes: 84,
      description: "После ареста главы семьи Майкл Блут должен спасти семейный бизнес от краха.",
      creators: ["Митч Хервиц"],
      imdbRating: 8.7,
      awards: ["6 премий Эмми", "1 Золотой глобус"],
      cast: ["Джейсон Бейтман", "Майкл Сера", "Портия де Росси", "Уилл Арнетт"],
      streaming: "Netflix",
      notable: "Культовый сериал с плотным сценарием и повторяющимися шутками"
    },
    {
      id: 29,
      title: {
        original: "30 Rock",
        russian: "Студия 30"
      },
      image: 'src/assets/30-rock.jpg',
      genre: ["Ситком", "Комедия", "Сатира"],
      years: {
        start: 2006,
        end: 2013,
        status: "Завершён"
      },
      seasons: 7,
      episodes: 138,
      description: "Закулисная жизнь создательницы комедийного шоу и ее команды на канале NBC.",
      creators: ["Тина Фей"],
      imdbRating: 8.2,
      awards: ["16 премий Эмми"],
      cast: ["Тина Фей", "Алек Болдуин", "Трейси Морган", "Джейн Краковски"],
      streaming: "Peacock",
      notable: "Автобиографический сериал о работе Тины Фей на Saturday Night Live"
    },
    {
      id: 30,
      title: {
        original: "The Marvelous Mrs. Maisel",
        russian: "Великая миссис Мейзел"
      },
      image: 'src/assets/mrs-maisel.jpg',
      genre: ["Ситком", "Комедия", "Период драма"],
      years: {
        start: 2017,
        end: 2023,
        status: "Завершён"
      },
      seasons: 5,
      episodes: 43,
      description: "Домохозяйка 1950-х годов обнаруживает талант к стендап-комедии после распада брака.",
      creators: ["Эми Шерман-Палладино"],
      imdbRating: 8.7,
      awards: ["20 премий Эмми", "2 Золотых глобуса"],
      cast: ["Рэйчел Броснахэн", "Алекс Борштейн", "Майкл Зеген", "Тони Шэлуб"],
      streaming: "Prime Video",
      notable: "Обладатель множества наград за костюмы и диалоги"
    },
    {
      id: 31,
      title: {
        original: "Schitt's Creek",
        russian: "Шиттс Крик"
      },
      image: 'src/assets/schitts-creek.jpg',
      genre: ["Ситком", "Комедия", "Семейный"],
      years: {
        start: 2015,
        end: 2020,
        status: "Завершён"
      },
      seasons: 6,
      episodes: 80,
      description: "Богатая семья теряет состояние и вынуждена переехать в маленький городок, который они купили в шутку.",
      creators: ["Юджин Леви", "Дэн Леви"],
      imdbRating: 8.5,
      awards: ["9 премий Эмми"],
      cast: ["Юджин Леви", "Кэтрин О'Хара", "Дэн Леви", "Энни Мерфи"],
      streaming: "Netflix",
      notable: "Сериал, который завоевал все главные комедийные номинации на Эмми в 2020 году"
    }
  ];

  export default classicSitcoms