import {s} from "vitest/dist/chunks/reporters.66aFHiyX";

type LocalCityType ={
    title: string
    countryTitle: string
}
type AddressType={
    streetTitle: string
    city: LocalCityType
}

type TechType={
    id: number
    title: string
}

type StudentType={
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}


const student:StudentType = {
    id: 1,
    name: "Pridur",
    age: 32,
    isActive: true,
    address: {
        streetTitle: "Брянская 2",
        city:{
            title: "Voronezh",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "CSS"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "HTML"
        },

    ]
}

console.log(student.age)
