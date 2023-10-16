import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {

    const {name, description, id} =  await readBody(event)

    if (!id)
        throw createError({statusCode: 409, message: `please provide a user id`})

    try {
        let deletedJob = null

        await prismaClient.job.delete({
            where : {id},
        }).then(result => {
            deletedJob = result
        })

        return {
            deletedJob
        }
    } catch (err) {
        throw createError({statusCode: 500, message : "internal server error"})
    }

})