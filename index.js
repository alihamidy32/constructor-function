// Object constructor
function Person() {
    this.first_name = 'john'
    this.last_name = 'doe'
}

// Object prototype

const person_1 = new Person()
const person_2 = new Person()

Person.prototype.gender = 'Male';
Person.prototype.age = 29

console.log('Object constructor',person_1);
console.log('Object prototype =>',person_1.gender);

console.log('Object constructor prototype',Person.prototype)


// chaning prototype
Person.prototype = {age:32 , gender:'female'}
Person.prototype.first_name = 'alireza'

const person_3 = new Person()

console.log('chaning prototype' , 
    {person_1:{age:person_1.age , gender:person_1.gender} 
    , person_3:{age:person_3.age , gender:person_3.gender}});

const person_4 = new Person()

console.log('chaning prototype' ,{person_4 :person_4 , person_1:person_1})

console.log('Object prototype',person_1.__proto__);




function userInformation(user_name, age , gender){
    this.user_name = user_name,
    this.age = age, 
    this.gender = gender
}

let user_name =undefined
let gender =undefined
let age =undefined

function takeUserInformation() {
    user_name = prompt('user_name')
    age = prompt('age')
    gender = prompt('gender')

    return user_name , gender , age
}

takeUserInformation()

const user = new userInformation(user_name , age , gender)

console.log(`welcome dear ${user.user_name}, your information are ===>name :${user.user_name},age: ${user.age}, gender: ${user.gender} ... thats right???`);