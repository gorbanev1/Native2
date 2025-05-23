import {beforeEach, expect, test} from 'vitest'

type UserType={
    name: string
    age: number
    address: {title: string}
    hair:number

}

function cutHair(user:UserType, power: number){
   const copy={...user}
    copy.hair/=power
    return  copy
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
    const cutuser = cutHair(user, 2)
   // users['1'].name='Ekaterina'
    expect(cutuser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutuser.address).toBe(user.address)

})