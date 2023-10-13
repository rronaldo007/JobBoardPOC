import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {
    const {name, email, about, address, phone} = await readBody(event)

    if (!(name && email && about && address && phone)) {
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }

    try {
        let company = null
        await  prismaClient.companies.create({
            data: {name, email, about, address, phone}
        }).then((res) => {
            company = res
        })
        return {
            company
        }
    } catch (err) {
        throw createError({statusCode: 500, message : "server internal error"})
    }

})