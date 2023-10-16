import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {
    const {title, description, companyId, type} = await readBody(event)

    if (!(title && description && companyId && type)) {
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }

    try {
        let advertisement = null
        await  prismaClient.advertisement.create({
            data: {title, description, advertisementId: companyId, type}
        }).then((res) => {
            advertisement = res
        })
        return {
            advertisement
        }
    } catch (err) {
        throw err
    }

})