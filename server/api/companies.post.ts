import {prismaClient} from './prismaClient'

const companies = [
    {
        "id": "clnox7srb0002pktaizr2pjtc",
        "name": "microsoft",
        "email": "microsoft@gmail.com",
        "about": "computer science company",
        "address": "New york",
        "phone": "07888888888",
        "createdAt": "2023-10-13T18:06:59.159Z",
        "updatedAt": "2023-10-13T20:37:48.453Z"
    },
    {
        "id": "clnp1gm2a0003pkta04o7smtx",
        "name": "lumapps",
        "email": "lumapps@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
        "createdAt": "2023-10-13T20:05:48.850Z",
        "updatedAt": "2023-10-13T20:05:48.850Z"
    },
    {
        "id": "clnp1gta70004pktarku7ar1u",
        "name": "Google",
        "email": "lumapps@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
        "createdAt": "2023-10-13T20:05:58.208Z",
        "updatedAt": "2023-10-13T20:05:58.208Z"
    },
    {
        "id": "clnp1ho7h0005pkta57afxnv6",
        "name": "Montempo+",
        "email": "Montempo@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
        "createdAt": "2023-10-13T20:06:38.285Z",
        "updatedAt": "2023-10-13T20:06:38.285Z"
    },
    {
        "id": "clnp1iadq0006pktalmhzkr3v",
        "name": "Tesla",
        "email": "Tesla@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
        "createdAt": "2023-10-13T20:07:07.022Z",
        "updatedAt": "2023-10-13T20:07:07.022Z"
    },
    {
        "id": "clnp1im2f0007pktas6x5m64i",
        "name": "Samsung",
        "email": "Samsung@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
        "createdAt": "2023-10-13T20:07:22.167Z",
        "updatedAt": "2023-10-13T20:07:22.167Z"
    },
    {
        "id": "clnp1iykr0008pkta5hz8xns4",
        "name": "apple",
        "email": "apple@gmail.com",
        "about": "kkfknfjnjnfjnjnf",
        "address": "tassin",
        "phone": "07888888888",
        "createdAt": "2023-10-13T20:07:38.379Z",
        "updatedAt": "2023-10-13T20:07:38.379Z"
    }
]

companies.forEach(item => {
    console.log(item)
})
console.log("item")