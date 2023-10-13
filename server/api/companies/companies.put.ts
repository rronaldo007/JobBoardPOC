import {prismaClient} from '../prismaClient'
import {tryCatch} from "standard-as-callback/built/utils";

export default defineEventHandler(async(event) => {
    const {name, email, about, address, phone, id} = await readBody(event)

    if (!id) {
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }

    try {
        let updatedPerson = null
        await prismaClient.companies.update({
            where : {
                id,
            },
            data : { name, email, about, address, phone }
        }).then(result => {
            updatedPerson = result
        })
        return {
            updatedPerson
        }

    } catch (e) {
        throw createError({statusCode: 500, message: `internal server error`})
    }


})