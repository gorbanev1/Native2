import {beforeEach, expect, test} from 'vitest'
test("should take olm men older 90", ()=>{
    const ages = [18,1,23,44,55,12,99];
    const predicate = (age:number)=>{
        age<90
    }
    const oldAges = ages.filter(a=>a>90)
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