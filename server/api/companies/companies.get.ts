import {prismaClient} from "../prismaClient"

export default defineEventHandler(async(event) => {

    try {
        let companies = null

        await  prismaClient.companies.findMany()
            .then(result => {
                companies = result
            })
        return {companies}
    } catch (e) {
        throw createError({statusCode: 500, message: "internal server error"})
    }

})