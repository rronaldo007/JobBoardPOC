import {prismaClient} from "../prismaClient"

export default defineEventHandler(async(event) => {
    const id = getRouterParam(event, 'id')
    if (!id)
        throw createError({statusCode: 409, message: `please provide a user id`})

    try {
        let jobs = null

        await  prismaClient.job.findMany({where: {id}})
            .then(result => {
                jobs = result
            })
        return {jobs}
    } catch (e) {
        throw createError({statusCode: 500, message: "internal server error"})
    }

})