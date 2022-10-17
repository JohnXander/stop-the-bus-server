const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: [
            {
                username: 'John1',
                password: '123',
                imgUrl: 'https://www.gilpa.co.uk/wp-content/uploads/2015/06/dsc_4223.jpg'
            },
            {
                username: 'John2',
                password: '123',
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
                gameId: 1
            },
            {
                name: 'Team Cat',
                players: ['Player 100', 'Player 99', 'Player 98'],
                gameId: 1
            },
            {
                name: 'Team Apple',
                players: ['Player A', 'Player B', 'Player C'],
                gameId: 2
            },
            {
                name: 'Team Banana',
                players: ['Player Z', 'Player Y', 'Player X'],
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
            { letter: 'S', gameId: 1 },
            { letter: 'R', gameId: 1 },
            { letter: 'T', gameId: 1 },
            { letter: 'B', gameId: 2 },
            { letter: 'F', gameId: 2 },
            { letter: 'W', gameId: 2 }
        ]
    })

    await prisma.card.createMany({
        data: [
            {
                word: 'sausage',
                type: 'noun',
                imgUrl: 'sausage.com',
                roundId: 1
            },
            {
                word: 'snake',
                type: 'noun',
                imgUrl: 'snake.com',
                roundId: 1
            },
            {
                word: 'spain',
                type: 'noun',
                imgUrl: 'spain.com',
                roundId: 1
            },
            {
                word: 'brick',
                type: 'noun',
                imgUrl: 'brick.com',
                roundId: 2
            },
            {
                word: 'find',
                type: 'noun',
                imgUrl: 'find.com',
                roundId: 2
            },
            {
                word: 'white',
                type: 'noun',
                imgUrl: 'white.com',
                roundId: 2
            },
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