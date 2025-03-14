import {mult, splitIntoWords, sum} from "./01";
import { expect, test } from 'vitest'
test("sum should be correct", ()=>{

    const a= 1
    const b= 1
    const c= 2

    const  result1 = sum(a, b)
    const  result2 = sum(a, c)


    expect(result1).toBe(2)
    expect(result2).toBe(3)

    }
)
test("multiply should be correct", ()=>{

        const a= 1
        const b= 1
        const c= 2

        const  result1 = mult(a, b)
        const  result2 = mult(a, c)


        expect(result1).toBe(1)
        expect(result2).toBe(2)

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