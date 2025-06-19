import {beforeEach, expect, test} from "vitest";

let  users:User
type User={
    [id:string]:{id:number, name:string}
}
// const user ={id: 221, name: "221" }
// users[user.id]=user
// delete users[user.id]

beforeEach(()=>{
    users={
        '101': {id: 101, name: "ssdsd"},
        '1201': {id: 1201, name: "ssdsd"},
        '21': {id: 22, name: "ssdsd"},
        '32': {id: 32, name: "ssdsd"},
    }
})
test("shoul update corresponding user",()=>{
    users["101"].name='Dimych'
    expect(users["101"]).toEqual({id: 101, name: 'Dimych'})

})
test("shoul delete corresponding user",()=>{
    delete users["101"]
    expect(users["101"]).toBeUndefined()

})