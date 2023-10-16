import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {
    const {id} = await readBody(event)

    if (!id) {
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }

    try {
        let advertisement = null
        await  prismaClient.advertisement.delete({
            where: {id}
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