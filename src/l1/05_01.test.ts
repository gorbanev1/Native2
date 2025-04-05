import {createGreetMessages, ManType} from "./05_01";

import {test, expect, beforeEach} from "vitest";
let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];

beforeEach(() => {

        people = [
            {name: 'Andrew Ivanov', age: 33},
            {name: 'Alexander Petrov', age: 24},
            {name: 'Dmitry Sidorov', age: 18},
        ];
    }
)

test("should get array of greeting messages", ()=>{
    let messages=createGreetMessages(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew, Wellcome to IT-Incubator ')
    expect(messages[1]).toBe('Hello Alexander, Wellcome to IT-Incubator ')
    expect(messages[2]).toBe('Hello Dmitry, Wellcome to IT-Incubator ')
})

