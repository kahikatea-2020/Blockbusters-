// What are you in the Mood for: Sad, Fun, Nostalgic, Different, Schlocky, Intense
// Genres: action, kids, comedy, romance, sci-fi, adventure, xxx, horror
// Quality: 1 -5

//
// I think for simplicity keep to one genre
// export default
const movies = [
    {   id: 1,
        title: 'Pacific Rim',
        mood: 'fun',
        genre:'action', 
        description: 'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.',
        quality: 5,
        ageRating:  'PG13',
        stanRating: true, //is a must 
        release: '2013',
        Poster: 'Posters1.png',
    }, //we should have a set list of moods btw so everything is consistent
    { 
        id: 2,
        title: 'Dragonball Super: Broly', 
        mood: 'fun',
        genre: 'action',
        description: 'One fateful day, a Saiyan appears before Goku and Vegeta who they have never seen before: Broly. With the return of Frieza from hell, a fierce battle awaits these three Saiyans who have followed completely different destinies.',
        quality: 5,
        ageRating:'PG13',
        stanRating: true,
        release: '2018', 
        Poster: 'Posters2.png',
    },
    {   id: 3,
        title: 'Schindlers List',
        mood: 'sad',
        genre: 'war',
        description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.' ,
        quality: 8,
        ageRating: 'r16',
        stanRating: true,
        release: '1993',
        Poster: 'Posters3.png'
    },
    {   id: 4,
        title: 'Barbie and the Twelve Dancing Princesses',
        mood: 'Nostalgic',
        genre: 'kids',
        description: "The widowed King Randolph enlists the help of his cousin to teach his daughters the proper royal etiquette. Instead, she bans all dancing in the palace. Can the twelve dancing princesses save the kingdom with their late mother's gift?",
        quality: 1,
        ageRating: 'g',
        stanRating: false,
        release: '2006',
        Poster: 'Posters4.png',
    },
    {   id: 5,
        title: 'Scream',
        mood: 'Intense',
        genre: 'horror',
        description: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.',
        quality: 4,
        ageRating: 'R',
        stanRating: true,
        release: '1996',
        Poster: 'Posters5.png',
    },
    {   id: 6,
        title: 'The Wolf of Wallstreet',
        mood:'fun',
        genre: '',
        description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '2013',
        Poster: 'Posters6.png',
    },
    {   id: 7,
        title: 'Godzilla: King of the Monsters',
        mood: 'fun',
        genre: 'action',
        description: 'The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.',
        quality: 5,
        ageRating: 'PG13',
        stanRating: true,
        release: '201',
        Poster: 'Posters7.png',
    },
     {  id: 8,
        title: 'Friday the 13th',
        mood:'intense' ,
        genre: 'horror',
        description: "A group of camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp where, years before, it was the site of a child's drowning and a grisly double murder.",
        quality: 3,
        ageRating: '',
        stanRating: true,
        release: '1980',
        Poster: 'Posters8.png',
    },
    {   id: 9,
        title: 'The Conjuring',
        mood:'intense',
        genre: 'horror',
        description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
        quality: 4,
        ageRating: 'r16',
        stanRating: true,
        release: '2013',
        Poster: 'Posters9.png',
    },
    {   id: 10,
        title: 'Apocalypse Now',
        mood:'intense',
        genre: 'war',
        description:'A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.',
        quality: '',
        ageRating: '',
        stanRating: true,
        release: '1979',
        Poster: 'Posters10.png',
    },
    {   id: 11,
        title: 'The Dark Knight',
        mood: 'Nostalgic',
        genre: 'action',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        quality: 5,
        ageRating: 'pg13',
        stanRating: true,
        release: '2008', 
        Poster: 'Posters11.png',
    },
    {   id: 12,
        title: 'Iron Man',
        mood: 'fun',
        genre: '',
        description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '2008',
        Poster: 'Posters12.png',
    },
    {   id: 13,
        title: 'Nightmare before Christmas',
        mood:'Nostalgic',
        genre: '',
        description: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.',
        quality: 3,
        ageRating: '',
        stanRating: true,
        release: '1993',
        Poster: 'Posters13.png',
    },
    {   id: 14,
        title: "Breakfast at Tiffany's",
        mood: 'fun',
        genre: '',
        description: 'A young New York socialite becomes interested in a young man who has moved into her apartment building, but her past threatens to get in the way.',
        quality: 2,
        ageRating: '',
        stanRating: false,
        release: '1961',
        Poster: 'Posters14.png',
    },
    {   id: 15,
        title: 'The Notebook',
        mood: 'sad',
        genre: 'romance',
        description: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '2004',
        Poser: 'Posters15.png',
    },
    {   id: 16,
        title: 'Pulp Fiction',
        mood: 'fun',
        genre: 'comedy',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1994',
        Poser: 'Posters16.png',
    },
    {   id: 17,
        title: 'Inglorious Basterds',
        mood: 'fun',
        genre: 'war',
        description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '2009',
        Poser: 'Posters17.png',
    },
    {   id: 18,
        title: 'Once Upon A Time In Hollywood',
        mood: 'different',
        genre: 'comedy',
        description: "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles",
        quality: 2,
        ageRating: '',
        stanRating: true,
        release: '2019',
        Poser: 'Posters18.png',
    },
    {   id: 19,
        title: 'Planet Terror',
        mood: 'Different',
        genre: 'horror',
        description: "After an experimental bio-weapon is released, turning thousands into zombie-like creatures, it's up to a rag-tag group of survivors to stop the infected and those behind its release.",
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '2007',
        Poser: 'Posters19.png',
    },
    {   id: 20,
        title: 'Scooby Doo',
        mood: 'Nostalgic',
        genre: 'kids',
        description:'After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on.',
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '2002',
        Poser: 'Posters20.png',
    },
    {   id: 21,
        title: 'The Shining',
        mood: 'intense',
        genre: 'horror',
        description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1980',
        Poser: 'Posters21.png',
    },
    {   id: 22,
        title: 'A Clockwork Orange',
        mood: 'Different',
        genre: 'comedy',
        description:"In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned." ,
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1971',
        Poser: 'Posters22.png',
    },
    {   id: 23,
        title: '2001: A Space Oddysey',
        mood: 'intense',
        genre: 'sci-fi',
        description:'After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.',
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1968',
        Poser: 'Posters23.png',
    },
    {   id: 24,
        title: 'Jurassic Park',
        mood: 'fun',
        genre: 'sci-fi',
        description:"A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1993',
        Poser: 'Posters24.png',
    },
    {   id: 25,
        title: 'Star Wars: A New Hope',
        mood: 'fun',
        genre: 'Sci-Fi',
        description:"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1977',
        Poser: 'Posters25.png',
    },
    {   id: 26,
        title: 'Star Wars: The Empire Strikes Back',
        mood: 'fun',
        genre: 'Sci-Fi',
        description:"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '',
        Poser: 'Posters26.png',
    },
    {   id: 27,
        title: 'Star Wars: Return Of The Jedi',
        mood: 'fun',
        genre: 'Sci-Fi',
        description:"After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1980',
        Poser: 'Posters27.png',
    },
    {   id: 28,
        title: 'Pineapple Express',
        mood: 'fun',
        genre: 'comedy',
        description:"A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealer's boss murder a competitor while trying to serve papers on him.",
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '2008',
        Poser: 'Posters28.png',
    },
    {
        id: 29,
        title: 'Superbad',
        mood: 'fun',
        genre: 'comedy',
        description:"Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '2007',
        Poser: 'Posters29.png',
    },
    {   id: 30,
        title: 'The Room',
        mood: 'schlocky',
        genre: 'romance',
        description:"Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his future wife, Lisa. One day, putting aside any scruple, she seduces Johnny's best friend, Mark. From there, nothing will be the same again.",
        quality: 3,
        ageRating: '',
        stanRating: false,
        release: '2003',
        Poser: 'Posters30.png',
    },
    {   id: 31,
        title: 'Cats',
        mood: 'schlocky',
        genre: 'comedy',
        description:"A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
        quality: 1,
        ageRating: '',
        stanRating: false,
        release: '2019',
        Poser: 'Posters31.png',
    },
    {   id: 32,
        title: 'Harold and Maude',
        mood: 'schlocky',
        genre: 'comedy',
        description:"Young, rich, and obsessed with death, Harold finds himself changed forever when he meets lively septuagenarian Maude at a funeral.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1971',
        Poser: 'Posters32.png',
    },
    {   id: 33,
        title: 'Blow Out',
        mood: 'intense',
        genre: 'thriller',
        description:"A movie sound recordist accidentally records the evidence that proves that a car accident was actually murder and consequently finds himself in danger.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1981',
        Poser: 'Posters33.png',
    },
    {   id: 34,
        title: 'Scarface',
        mood: 'intense',
        genre: 'crime',
        description:"In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1983',
        Poser: 'Posters34.png',
    },
    {   id: 35,
        title: 'Marley and Me',
        mood: 'sad',
        genre: 'drama',
        description:"A family learns important life lessons from their adorable, but naughty and neurotic dog.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '2008',
        Poser: 'Posters35.png',
    },
    {   id: 36,
        title: 'Million Dollar Baby',
        mood: 'sad',
        genre: 'drama',
        description:"A determined woman works with a hardened boxing trainer to become a professional.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '2004',
        Poser: 'Posters36.png',
    },
    {   id: 37,
        title: 'Toy Story',
        mood: 'Nostalgic',
        genre: 'kids',
        description:"A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1995',
        Poser: 'Posters37.png',
    },
    {   id: 38,
        title: 'Bad Taste',
        mood: 'schlocky',
        genre: 'horror',
        description:"The population of a small town disappears and is replaced by aliens that chase human flesh for their intergalactic fast-food chain.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '1987',
        Poser: 'Posters38.png',
    },
    {   id: 39,
        title: 'The Man With The X-Ray Eyes',
        mood: 'schlocky',
        genre: 'sci-fi',
        description:"A doctor uses special eye drops to give himself x-ray vision, but the new power has disastrous consequences.",
        quality: 3,
        ageRating: '',
        stanRating: false,
        release: '1963',
        Poser: 'Posters39.png',
    },
    {   id: 40,
        title: 'House(Hausu)',
        mood: 'different',
        genre: 'horror',
        description: "A schoolgirl and six of her classmates travel to her aunt's country home, which turns out to be haunted.",
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '1977',
        Poser: 'Posters40.png',
    },
    {   id: 41,
        title: 'Mulholland Drive',
        mood: 'different',
        genre: 'horror',
        description: "After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.",
        quality: 5,
        ageRating: '',
        stanRating: true,
        release: '2001',
        Poser: 'Posters41.png',
    },
    {   id: 42,
        title: 'Spy Kids',
        mood: 'fun',
        genre: 'kids',
        description: "The children of secret-agent parents must save them from danger.",
        quality: 4,
        ageRating: '',
        stanRating: true,
        release: '2001',
        Poser: 'Posters42.png',
    }
    
]

export default movies