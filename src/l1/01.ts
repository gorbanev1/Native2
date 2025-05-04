export function sum(a:number, b:number){
    return a+ b
}
export function mult(a:number, b:number){
    return a*b
}


 export function splitIntoWords( sentence: string){
    const words=sentence.toLowerCase().split(" ")
    return words
        .filter(w=>w!=="")
        .map(w=>w.replace("!",""))
}
console.log(splitIntoWords("hello pidor! ssdfsd"))
console.log("pidor".replace("d",''))

export function quote(fighter) {
    switch  (fighter.toLowerCase()) {
        case 'george saint pierre': return "I am not impressed by your performance."
        case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }
};