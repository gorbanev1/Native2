import {beforeEach, expect, test} from 'vitest'
import {
    addNewBooksToUser,
    cutHair,
    moveUser, removeBookInUser, replaceBookInUser, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop, WithCompaniesType
} from "./09_01.ts";





test('test',()=>{
    const user:UserWithLaptop&WithCompaniesType={
        name: 'Dimych',
        hair: 32,
        age: 32,
        address: {
            title: "Minsk",
            house: 12
        },
        laptop:{
            title: "Lenovo"
        },
companies:[
    {
        id: 1,
        title: "hui"
    },
        {
        id: 2,
        title: "hфывui"
    },

        {
        id: 3,
        title: "huiфыв"
    },

]
    }
   //  const macUser= upgradeUserLaptop(user, 'MacBook')
   //  const cutuser = cutHair(user, 2)
   // // users['1'].name='Ekaterina'
   //  const movedUser=moveUser(user,99)
   //  const readUser=addNewBooksToUser(user, ['sdds','sssss'])
   //  expect(macUser).not.toBe(user)
   //  expect(macUser.address).toBe(user.address)
   //  expect(macUser.laptop).not.toBe(user.laptop)
   //  expect(user.hair).toBe(32)
   //  expect(macUser.laptop.title).toBe('MacBook')
   //  expect(movedUser.address.house).toBe(99)
   //  expect(readUser.books).not.toBe(user.books)
   //  expect(readUser.books.length).toBe(5)
   //  expect(readUser.books[3]).toBe('sdds')

    // let newBookUser=replaceBookInUser(user, 'safsd', 'sddssdssssssssssss')
    //
    // expect(newBookUser.books[1]).toBe('sddssdssssssssssss')
    // newBookUser=removeBookInUser(newBookUser,'sddssdssssssssssss')
    // expect(newBookUser.books.length).toBe(2)

    const userCopy=updateCompanyTitle(user, 1, 'PPPP') as UserWithLaptop&WithCompaniesType
    expect(userCopy).not.toBe(user)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('PPPP')


})

