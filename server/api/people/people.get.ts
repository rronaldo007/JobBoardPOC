import {prismaClient} from "../prismaClient"

export default defineEventHandler(async(event) => {

    try {
        let people = null

        await  prismaClient.people.findMany()
            .then(result => {
                people = result
            })
        return {people}
    } catch (e) {
        throw createError({statusCode: 500, message: "internal server error"})
    }

})