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
    laptop: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

function increaseAge(user) {
    user.age++
}

export function cutHair(user: UserType, power: number) {
    const copy = {...user}
    copy.hair /= power
    return copy
}

export function moveUser(user: UserWithLaptop, city) {
    const movedUser = {...user}
    return movedUser.address = {...movedUser.address,
        title: city
    }
}