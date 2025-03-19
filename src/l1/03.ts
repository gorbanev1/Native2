import {StudentType} from "./02";
import {CityType, GovernmentBuildingType} from "./02_02";

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

export const makeStudentActive = (student:StudentType)=>{
    student.isActive=true
}

export function doesStudentLiveIn(student:StudentType, city:string){
    return(student.address.city.title===city)
}

export function addMoneyToBudget(building:GovernmentBuildingType, plusBudget:number ){
    building.budget+=plusBudget
}
export function demolishHouseOnTheStreet(city:CityType, street:string){
    city.houses.filter((h)=>h.address.street.title!==street)
}