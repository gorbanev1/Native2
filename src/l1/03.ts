import {StudentType} from "./02";

export const sum = (a: number, b: number) =>{
    return a+b
}
export const addSkill = (student:StudentType, skill:string)=> {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

const res=sum(sum(1,5),sum(2,5))