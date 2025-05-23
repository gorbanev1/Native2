var user={
    name: 'Dimych',
    age: 32
}

function increaseAge(user){
    user.age++
}
export function cutHair(user:UserType, power: number){
    const copy={...user}
    copy.hair/=power
    return  copy
}