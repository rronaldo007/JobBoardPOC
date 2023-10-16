import {prismaClient} from "../prismaClient"

export default defineEventHandler(async(event) => {

    try {
        let jobs = null

        await  prismaClient.job.findMany()
            .then(result => {
                jobs = result
            })
        return {jobs}
    } catch (e) {
        throw createError({statusCode: 500, message: "internal server error"})
    }

})