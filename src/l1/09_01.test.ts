import {beforeEach, expect, test} from 'vitest'
import {cutHair} from "./09_01.ts";

type UserType={
    name: string
    age: number
    address: {title: string}
    hair:number

}



test('test',()=>{
    const user:UserType={
        name: 'Dimych',
        hair: 32,
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    const movedUser= moveUser(user, 'Kiev')
    const cutuser = cutHair(user, 2)
   // users['1'].name='Ekaterina'
    expect(cutuser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutuser.address).toBe(user.address)

})