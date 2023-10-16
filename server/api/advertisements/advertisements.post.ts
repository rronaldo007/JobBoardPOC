import {prismaClient} from '../prismaClient'

export default defineEventHandler(async(event) => {
    const {title, description, companyId, jobId} = await readBody(event)

    if (!(title && description && companyId && jobId)) {
        throw createError({statusCode: 401, message : "first name or last name or email or password is required"})
    }

    try {
        let advertisement = null
        await  prismaClient.advertisement.create({
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