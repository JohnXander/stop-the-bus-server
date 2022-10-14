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