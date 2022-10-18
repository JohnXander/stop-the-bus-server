const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: [
            {
                username: 'John1',
                password: 'john1',
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
            { name: 'Game 1', userId: 1 },
            { name: 'Game 2', userId: 1 },
            { name: 'Game A', userId: 2 },
            { name: 'Game B', userId: 2 }
        ]
    })

    await prisma.team.createMany({
        data: [
            {
                name: 'Team Dog',
                players: ['Player 1', 'Player 2', 'Player 3'],
                points: 11,
                gameId: 1
            },
            {
                name: 'Team Cat',
                players: ['Player 100', 'Player 99', 'Player 98'],
                points: 12,
                gameId: 1
            },
            {
                name: 'Team Apple',
                players: ['Player A', 'Player B', 'Player C'],
                points: 13,
                gameId: 2
            },
            {
                name: 'Team Banana',
                players: ['Player Z', 'Player Y', 'Player X'],
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
            { word: 'soup', type: 'noun', imgUrl: 'soup.com' },
            { word: 'snake', type: 'noun', imgUrl: 'snake.com' },
            { word: 'spain', type: 'noun', imgUrl: 'spain.com' },
            { word: 'rice', type: 'noun', imgUrl: 'rice.com' },
            { word: 'rat', type: 'noun', imgUrl: 'rat.com' },
            { word: 'russia', type: 'noun', imgUrl: 'russia.com' },
            { word: 'tacos', type: 'noun', imgUrl: 'tacos.com' },
            { word: 'tiger', type: 'noun', imgUrl: 'tiger.com' },
            { word: 'thailand', type: 'noun', imgUrl: 'thailand.com' },
            { word: 'burger', type: 'noun', imgUrl: 'burger.com' },
            { word: 'bear', type: 'noun', imgUrl: 'bear.com' },
            { word: 'bolivia', type: 'noun', imgUrl: 'bolivia.com' },
            { word: 'fries', type: 'noun', imgUrl: 'fries.com' },
            { word: 'fox', type: 'noun', imgUrl: 'fox.com' },
            { word: 'france', type: 'noun', imgUrl: 'france.com' },
            { word: 'waffles', type: 'noun', imgUrl: 'waffles.com' },
            { word: 'walrus', type: 'noun', imgUrl: 'walrus.com' },
            { word: 'wales', type: 'noun', imgUrl: 'wales.com' }
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