import {prismaClient} from './prismaClient'

const people = [
    {
        "email": "chr@gamil.com",
        "password": "regix",
        "firstName": "chr",
        "lastName": "chr@gamil.com",
    },
    {
        "email": "roro@gamil.com",
        "password": "regix",
        "firstName": "roro",
        "lastName": "ruku",
    },
    {
        "email": "Quentin@gamil.com",
        "password": "Quentin",
        "firstName": "Quentin",
        "lastName": "ruku",
    },
    {
        "email": "juju@gamil.com",
        "password": "juju",
        "firstName": "Juju",
        "lastName": "Ineza",
    }
]

export default defineEventHandler(async(event) => {

    const fillCompTable = async  (item: any) => {
        let comp = null
        await prismaClient.people.create({
            data : item
        })
        return comp
    }

    people.forEach(item => {
        fillCompTable(item)
    })

    return {
        massage : "completed",
    }
})