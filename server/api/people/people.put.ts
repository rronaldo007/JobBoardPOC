import {prismaClient} from '../prismaClient'
import {tryCatch} from "standard-as-callback/built/utils";

export default defineEventHandler(async(event) => {
    const {firstName, lastName, email, id} = await readBody(event)
    let person : any | null = null

    if (!id)
        throw createError({statusCode: 409, message: `please provide a user id`})

    try {
        let updatedPerson = null
            await prismaClient.people.update({
                where : {
                    id,
                },
                data : {
                    email,
                    firstName,
                    lastName: email,
                }
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