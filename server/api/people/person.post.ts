import {prismaClient} from '../prismaClient'
import {tryCatch} from "standard-as-callback/built/utils";

export default defineEventHandler(async(event) => {
    const {firstName, lastName, email, password} = await readBody(event)
    let Person = null

    if (!(firstName && lastName && email && password)) {
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }


    try {
        if (firstName && lastName && email && password) {
            await prismaClient.people.create({
                data : {
                    email,
                    password,
                    firstName,
                    lastName,
                }
            }).then((res) => {
                Person = res
            })

        }
        return {
            Person,
        }
    } catch (e) {
            throw createError({statusCode: 409, message : `${email} is already in use`})
    }
    
})