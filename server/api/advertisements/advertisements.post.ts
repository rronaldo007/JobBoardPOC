import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {
<<<<<<< HEAD
    const {title, description, companyId, type} = await readBody(event)

    if (!(title && description && companyId && type)) {
=======
    const {title, description, companyId, jobId} = await readBody(event)

    if (!(title && description && companyId && jobId)) {
>>>>>>> origin/nuxt-server
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }

    try {
        let advertisement = null
        await  prismaClient.advertisement.create({
<<<<<<< HEAD
            data: {title, description, advertisementId: companyId, type}
=======
            data: {
                title,
                description,
                advertisementId: companyId,
                jobs: {
                    connect :[{id : jobId}]
                }
            },
            include : {
                jobs : true
            }
>>>>>>> origin/nuxt-server
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