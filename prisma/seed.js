const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: [
            {
                username: 'Johnston',
                password: 'john123',
                imgUrl: 'https://www.gilpa.co.uk/wp-content/uploads/2015/06/dsc_4223.jpg'
            },
            {
                username: 'Xanderini',
                password: 'xander123',
                imgUrl: 'https://www.ukpets.com/oc-content/uploads/breeds/0/4265.jpg'
            }
        ]
    })

    await prisma.game.createMany({
        data: [
            { name: 'Game 1', userId: 1 },
            { name: 'Game 2', userId: 2 },
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
                players: ['Player A', 'Player B', 'Player C'],
                gameId: 1
            },
            {
                name: 'Team Elephant',
                players: ['Player 1', 'Player 2', 'Player 3'],
                gameId: 2
            }
        ]
    })

    await prisma.category.createMany({
        data: [
            { name: 'Food', gameId: 1 },
            { name: 'Animals', gameId: 1 },
            { name: 'Countries', gameId: 2 }
        ]
    })

    await prisma.round.createMany({
        data: [
            { letter: 'S', gameId: 1 },
            { letter: 'B', gameId: 1 },
            { letter: 'T', gameId: 2 }
        ]
    })

    await prisma.card.createMany({
        data: [
            {
                word: 'chocolate',
                type: 'noun',
                imgUrl: 'choc',
                roundId: 1
            },
            {
                word: 'pizza',
                type: 'noun',
                imgUrl: 'pizza',
                roundId: 1
            },
            {
                word: 'apple',
                type: 'noun',
                imgUrl: 'apple',
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