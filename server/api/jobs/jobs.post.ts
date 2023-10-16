import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {

    const {name, description} =  await readBody(event)

    if (!(name && description)) {
        throw createError({statusCode: 401, message : "first name and description are required"})
    }

    try {
        let job = null

        await prismaClient.job.create({
            data: {name, description}
        }).then(result => {
            job = result
        })

        return {
            job
        }
    } catch (err) {
        throw createError({statusCode: 500, message : "internal server error"})
    }

})