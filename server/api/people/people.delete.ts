import {prismaClient} from '../prismaClient'
import {tryCatch} from "standard-as-callback/built/utils";

export default defineEventHandler(async(event) => {
    const {firstName, lastName, email, id} = await readBody(event)
    let person : any | null = null

    if (!id)
        throw createError({statusCode: 409, message: `please provide a user id`})

    try {
        await  prismaClient.people.findMany({
            where : {
                id,
            }
        })
            .then(result => {
                person = result[0]
            })
    } catch (e) {
        throw createError({statusCode: 401, message: `no person is associated to id ${id}`})
    }

    try {
        let updatedPerson = null
        if (person)
            await prismaClient.people.delete({
                where : {
                    id,
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