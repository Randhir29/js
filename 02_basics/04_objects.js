// const tinderUser= new Object() // Singleton Object
const tinderUser={}// Non-Singleton Object

tinderUser.id="12345abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
const obj5={7:"a",8:"b"}

// const obj3={ obj1 , obj2 }
// const obj3 = Object.assign({}, obj1,obj2,obj4,obj5)//{}-> Target, obj1,obj2,obj4,obj5 -> source

const obj3 = {...obj1,...obj2,...obj4,...obj5}//Most used syntax
// console.log(obj3);

const users= [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]
 users[1].email

//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser));//This method returns an array of key from the object.

//  console.log(Object.values(tinderUser));//This method returns an array of value from the object.

// console.log(Object.entries(tinderUser));//This method returns an array of key-value pairs from the object.

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));// This checks if the object itself has a specific property.
 
 const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor : "Hitesh"
 }
// Object de - structuring
//  course.courseInstructor
  const {courseInstructor: instructor}= course 
 
  console.log(instructor);
  
//   const navbar = ({company}) => {

//   }

//   navbar(company="hitesh")

// {
//     "coursename": "js in hindi",
//     "price":"free",
//     "name": "Hitesh" 
// }