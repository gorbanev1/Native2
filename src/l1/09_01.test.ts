import {beforeEach, expect, test} from 'vitest'
import {cutHair, moveUser, UserType, UserWithLaptop} from "./09_01.ts";





test('test',()=>{
    const user:UserWithLaptop={
        name: 'Dimych',
        hair: 32,
        age: 32,
        address: {
            title: "Minsk",
            house: 12
        },
        laptop:{
            laptop: "Lenovo"
        }
    }
    const movedUser= moveUser(user, 'Kiev')
    const cutuser = cutHair(user, 2)
   // users['1'].name='Ekaterina'

    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(user.hair).toBe(32)
    expect(cutuser.address.title).toBe('Kiev')

})