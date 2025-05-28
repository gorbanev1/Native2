export type UserType = {
    name: string
    age: number
    address: {
        title: string
        house: number
    }
    hair: number

}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType=UserType&{
    books: Array<string>
}
export type WithCompaniesType={
    companies: Array<{id: number, title: string}>
}

function increaseAge(user) {
    user.age++
}

export function cutHair(user: UserType, power: number) {
    const copy = {...user}
    copy.hair /= power
    return copy
}

export function upgradeUserLaptop(user: UserWithLaptop, laptop) {
    const upgrUser = {
        ...user,
        laptop:{
            ...user.laptop, title:laptop
        }
    }
return upgrUser

}
export function moveUser(user: UserWithLaptop&UserWithBooksType, house:number) {
    const upgrUser = {
        ...user,
        address:{
            ...user.address, house
        }
    }
return upgrUser

}
export function addNewBooksToUser(user: UserWithLaptop&UserWithBooksType, books) {
    return {
        ...user,
        books:[
            ...user.books, ...books
        ]
    }
}
export function replaceBookInUser(user: UserWithLaptop&UserWithBooksType,oldBook, book) {
    return {
        ...user,
        books: user.books.map(b=>b===oldBook?book:b)

    }
}
export function removeBookInUser(user: UserWithLaptop&UserWithBooksType,book:string) {
    return {
        ...user,
        books: user.books.filter(b=>b!==book)

    }
}