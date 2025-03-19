import {beforeEach, expect, test} from 'vitest'
import {StudentType} from "./02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";


let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Pridur",
        age: 32,
        isActive: false,
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
test("new skill should be made active", () => {
        expect(student.isActive).toBe(false)

        makeStudentActive(student)
        expect(student.isActive).toBe(true)

    }
)
test("lives in the city", () => {

        let result1 = doesStudentLiveIn(student, "Moscow")
        let result2 = doesStudentLiveIn(student, "Voronezh")
        expect(result1).toBe(false)
        expect(result2).toBe(true)
    }
)