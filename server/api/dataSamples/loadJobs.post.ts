import {prismaClient} from '../prismaClient'

const jobs = [
    {
        "name": "front dev",
        "description": "front developpement"
    },
    {
        "name": "back dev",
        "description": "back developpement"
    },
    {
        "name": "HR",
        "description": "charge de recretement dev back"
    }
]

export default defineEventHandler(async(event) => {

    const fillTable = async  (item: any) => {
        let comp = null
        await prismaClient.job.create({
            data : item
        })
        return comp
    }

    jobs.forEach(item => {
        fillTable(item)
    })

    return {
        massage : "completed",
    }
})