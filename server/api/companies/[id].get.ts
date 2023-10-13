import {prismaClient} from "../prismaClient"

export default defineEventHandler(async(event) => {

    try {
        let company = null

        await  prismaClient.companies.findMany({where: {id : getRouterParam(event, 'id')}})
            .then(result => {
                company = result
            })
        return {company}
    } catch (e) {
        throw createError({statusCode: 500, message: "internal server error"})
    }

})