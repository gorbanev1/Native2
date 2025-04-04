import {beforeEach, expect, test} from 'vitest'
test("should take olm men older 90", ()=>{
    const ages = [18,1,23,44,55,12,99];
    const predicate = (age:number)=>{
       return age>90
    }
    const oldAges = ages.filter(age=>age>90)
    console.log(oldAges)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(99)
})
test("should take cheap courses", ()=>{
    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 160},
        {title: "REACT", price: 200},
    ]

    const cheapPredicate = (course:{title:string, price:number})=>{
        return course.price<=170;
    }
    const cheapCourses = courses.filter(cheapPredicate)

  //  const cheapCourses = cheapPredicate.filter(predicate)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe("CSS")
    expect(cheapCourses[1].title).toBe("JS")
})
test("only completed tasks",()=>{
    const tasks=[
        {id:1, title: "Bread" , isDone: false},
        {id:1, title: "Brsddead" , isDone: false},
        {id:1, title: "Bresddsad" , isDone: true},
        {id:1, title: "Brweead" , isDone: false},

    ]
    const completedTasks = tasks.filter(task=>task.isDone)
    expect(completedTasks.length).toBe(1)
    expect(completedTasks[0].title).toBe("Bresddsad")
})