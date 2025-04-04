const ages = [18,1,23,44,55,12];

const predicate = (age: number) =>{
    return age>90
}


const oldAges = [100]

const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 160},
    {title: "REACT", price: 200},
]


const cheapPredicate = (course:{title:string, price:number})=>{
    return course.price<=100;
}

