import {prismaClient} from './prismaClient'

const companies = [
    {
        "name": "microsoft",
        "email": "microsoft@gmail.com",
        "about": "computer science company",
        "address": "New york",
        "phone": "07888888888",
    },
    {
        "name": "lumapps",
        "email": "lumapps@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
    },
    {
        "name": "Google",
        "email": "lumapps@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
    },
    {
        "name": "Montempo+",
        "email": "Montempo@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
    },
    {
        "name": "Tesla",
        "email": "Tesla@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
    },
    {
        "name": "Samsung",
        "email": "Samsung@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
    },
    {
        "name": "apple",
        "email": "apple@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
    }
]



export default defineEventHandler(async(event) => {

    const fillCompTable = async  (item: any) => {
        let comp = null
        await prismaClient.companies.create({
            data: item
        }).then(response => {
            comp = response
        })
        return comp
    }

    let items = null
    companies.forEach(item => {
        items = fillCompTable(item)
    })

    return {
        massage : "completed",
    }
})