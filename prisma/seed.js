const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: [
            {
                username: 'John1',
                password: '$2b$10$sU7anN5vGOR6t/OOLQeGYu70aHXGkBGEn5OlNgKLZYFKy6g/5ZXj.',
                imgUrl: 'https://www.gilpa.co.uk/wp-content/uploads/2015/06/dsc_4223.jpg'
            },
            {
                username: 'John2',
                password: 'john2',
                imgUrl: 'https://www.ukpets.com/oc-content/uploads/breeds/0/4265.jpg'
            }
        ]
    })

    await prisma.game.createMany({
        data: [
            { name: 'Unit 1 Revision', completed: true, userId: 1 },
            { name: 'Unit 2 Revision', completed: false, userId: 1 },
            { name: 'Module 1 Revision', completed: true, userId: 2 },
            { name: 'Module 2 Revision', completed: false, userId: 2 }
        ]
    })

    await prisma.team.createMany({
        data: [
            {
                name: 'Team Dog',
                points: 11,
                gameId: 1
            },
            {
                name: 'Team Cat',
                points: 12,
                gameId: 1
            },
            {
                name: 'Team Apple',
                points: 13,
                gameId: 2
            },
            {
                name: 'Team Banana',
                points: 14,
                gameId: 2
            }
        ]
    })

    await prisma.category.createMany({
        data: [
            { name: 'Food', gameId: 1 },
            { name: 'Animals', gameId: 1 },
            { name: 'Countries', gameId: 1 },
            { name: 'Nouns', gameId: 2 },
            { name: 'Verbs', gameId: 2 },
            { name: 'Adjectives', gameId: 2 }
        ]
    })

    await prisma.round.createMany({
        data: [
            { letter: 'S', answers: ['soup', 'snake', 'spain'], gameId: 1 },
            { letter: 'R', answers: ['rice', 'rat', 'russia'], gameId: 1 },
            { letter: 'T', answers: ['tacos', 'tiger', 'thailand'], gameId: 1 },
            { letter: 'B', answers: ['burger', 'bear', 'bolivia'], gameId: 2 },
            { letter: 'F', answers: ['fries', 'fox', 'france'], gameId: 2 },
            { letter: 'W', answers: ['waffles', 'walrus', 'wales'], gameId: 2 }
        ]
    })

    await prisma.card.createMany({
        data: [
            { word: 'soup', type: 'noun', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-ee0d41a.jpg', userId: 1 },
            { word: 'snake', type: 'noun', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg', userId: 1 },
            { word: 'spain', type: 'noun', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png', userId: 1 },
            { word: 'rice', type: 'noun', imgUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg', userId: 1 },
            { word: 'rat', type: 'noun', imgUrl: 'https://cdn.britannica.com/26/65326-050-53232216/Norway-rat.jpg?q=60', userId: 1 },
            { word: 'russia', type: 'noun', imgUrl: 'https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg', userId: 1 },
            { word: 'tacos', type: 'noun', imgUrl: 'https://img.taste.com.au/w_-0kcUJ/taste/2016/11/aussie-style-beef-and-salad-tacos-86525-1.jpeg', userId: 1 },
            { word: 'tiger', type: 'noun', imgUrl: 'https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg', userId: 1 },
            { word: 'thailand', type: 'noun', imgUrl: 'https://c4.wallpaperflare.com/wallpaper/698/202/493/thailand-flag-national-symbol-thailand-large-flag-flag-of-thailand-hd-wallpaper-preview.jpg', userId: 1 },
            { word: 'burger', type: 'noun', imgUrl: 'https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg', userId: 1 },
            { word: 'bear', type: 'noun', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg', userId: 1 },
            { word: 'bolivia', type: 'noun', imgUrl: 'https://cdn.britannica.com/54/6754-004-AE3C4294/Flag-Bolivia.jpg', userId: 1 },
            { word: 'fries', type: 'noun', imgUrl: 'https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg', userId: 1 },
            { word: 'fox', type: 'noun', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2014-06-20_Vulpes_vulpes_vulpes%2C_B%C3%B6nhamn%2C_V%C3%A4sternorrlands_L%C3%A4n%2C_Sverige_1.jpg/800px-2014-06-20_Vulpes_vulpes_vulpes%2C_B%C3%B6nhamn%2C_V%C3%A4sternorrlands_L%C3%A4n%2C_Sverige_1.jpg', userId: 1 },
            { word: 'france', type: 'noun', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png', userId: 1 },
            { word: 'waffles', type: 'noun', imgUrl: 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg', userId: 1 },
            { word: 'walrus', type: 'noun', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg', userId: 1 },
            { word: 'wales', type: 'noun', imgUrl: 'https://cdn.britannica.com/62/4962-004-7D6CF6DB/Flag-Wales.jpg', userId: 1 }
        ]
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })