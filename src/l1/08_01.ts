export const users:User={
    '101': {id: 101, name: "ssdsd"},
    '1201': {id: 1201, name: "ssdsd"},
    '21': {id: 22, name: "ssdsd"},
    '32': {id: 32, name: "ssdsd"},
}
type User={
    [id:string]:{id:number, name:string}
}
const user ={id: 221, name: "221" }
users[user.id]=user
delete users[user.id]