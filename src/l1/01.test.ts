import {mult, quote, splitIntoWords, sum} from "./01";
import {beforeEach, expect, test } from 'vitest'
let a= 1
let b= 1
let c= 2


beforeEach(()=>{
    a=1
    b=2
    c=3
})

test("sum should be correct", ()=>{



    const  result1 = sum(a, b)
    const  result2 = sum(a, c)


    expect(result1).toBe(3)
    expect(result2).toBe(4)

    }
)
test("multiply should be correct", ()=>{



        const  result1 = mult(a, b)
        const  result2 = mult(a, c)


        expect(result1).toBe(2)
        expect(result2).toBe(3)

    }
)
test("splitting into words correct",()=>{
    const sent1 = "hello pidor!"
    const sent2 = "hui pizda dzhigurda."
    const  result1 = splitIntoWords(sent1)
    const  result2 = splitIntoWords(sent2)
    expect(result1.length).toBe(2)
  expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('pidor')
    // expect(result1[2]).toBe("friend")
})

test("correct fighter quote",()=>{
    const f1='conor mcgregor'
    const f2='georgE saint pierre'
    expect(quote(f2)).toBe("I am not impressed by your performance.")
    expect(quote(f1)).toBe("I'd like to take this chance to apologize.. To absolutely NOBODY!")
})