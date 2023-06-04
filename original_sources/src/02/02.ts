export type StudentType = {
    id: number
    name: "Dymych"
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<EachTechnologieType>
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type CityType = {
    title: string
    countryTitle: string
}

type EachTechnologieType = {
    id: number
    title: string
}


const student: StudentType = {
    id: 1,
    name: "Dymych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },

    ]

}

console.log(student.address.city.title);
console.log(student.technologies[2].title);

