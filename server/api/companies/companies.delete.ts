import {prismaClient} from '../prismaClient'
import {tryCatch} from "standard-as-callback/built/utils";

export default defineEventHandler(async(event) => {
    const {id} = await readBody(event)
    let company = null

    if (!id)
        throw createError({statusCode: 409, message: `please provide a user id`})

    try {
        await  prismaClient.companies.findMany({
            where : {
                id,
            }
        })
            .then(result => {
                company = result[0]
            })
    } catch (e) {
        throw createError({statusCode: 401, message: `no person is associated to id ${id}`})
    }

    try {
        let updatedCompany = null
        if (company)
            await prismaClient.companies.delete({
                where : {
                    id,
                }
            }).then(result => {
                updatedCompany = result
            })
        return {
            updatedCompany
        }

    } catch (e) {
        throw createError({statusCode: 500, message: `internal server error`})
    }


})