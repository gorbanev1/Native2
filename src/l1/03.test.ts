import {beforeEach, expect, test} from 'vitest'
import {StudentType} from "./02";
import {addSkill} from "./03";


let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Pridur",
        age: 32,
        isActive: true,
        address: {
            streetTitle: "Брянская 2",
            city: {
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
})

test("new skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "sadsdfsd")
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe("sadsdfsd")
}
)