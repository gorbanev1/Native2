import {StudentType} from "./02";
import {CityType, GovernmentBuildingType, HouseType} from "./02_02";

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
   city.houses= city.houses.filter((h)=>h.address.street.title!==street)
}
export function repairHouse(house:HouseType){
   house.repaired
}
export function toFireStaff(governmentBuilding:GovernmentBuildingType, staffToFire){
   governmentBuilding.staffCount-=staffToFire
}
export function toHireStaff(governmentBuilding:GovernmentBuildingType, staffToHire){
   governmentBuilding.staffCount+=staffToHire
}
export function createMessage(city){
    return "Пошли все "+city.citizensNumber+" жителt "+city.title+" нахъ"
}
export function getBuildingsWithStaffCountGreaterThen(gBuildings, staffCount){
    return gBuildings.filter(gBuilding=>gBuilding.staffCount>staffCount)
}
