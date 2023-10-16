import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {

    const {name, description, id} =  await readBody(event)

    if (!id)
        throw createError({statusCode: 409, message: `please provide a user id`})

    try {
        let updatedJob = null

        await prismaClient.job.update({
            where : {id},
            data: {name, description}
        }).then(result => {
            updatedJob = result
        })

        return {
            updatedJob
        }
    } catch (err) {
        throw createError({statusCode: 500, message : "internal server error"})
    }

<<<<<<< HEAD
})
=======
})
>>>>>>> origin/nuxt-server
