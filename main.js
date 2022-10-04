// // #1
// let person = new Object();
// let person2 = {};

// // #2
// let person = {
//     name:"Shahrom",
//     age:17,
// }
// console.log(person)
// // {name: 'Shahrom', age: 17}

// // #3
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.adres);
// console.log(person.adres.city);


// // #4
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.adres);
// console.log(person.adres.city);


// // #5
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// console.log(Object.entries(person));



// // #6
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// console.log(Object.keys(person));


// // #7
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// console.log(Object.values(person));


// // #8
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// let {name ,age, adres} = person;
// let {city} = adres;
// console.log(name);
// console.log(age);
// console.log(adres);
// console.log(city);



// // #9
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     }
// }
// let person2 = {
//     ...person,
//     name: "Muhammad",
// }
// console.log(person2);

// // #10
// let person = {
//     name:"Shahrom",
//     age:17,
//     adres:{
//         city: "Dushanbe",
//         district: "Sino",
//         strit: "Asadulo Gulomov 28",
//         kv: 20,
//     },
//     commit: function (){
//         return `My name ${this.name}. I am ${this.age}. 
//         I live in ${this.adres.city}`;
//     }
// }
// console.log(person.commit());


// #11
let person = {
    name:"Shahrom",
    age:17,
    adres:{
        city: "Dushanbe",
        district: "Sino",
        strit: "Asadulo Gulomov 28",
        kv: 20,
    },
    commit: function (){
        return `My name ${this.name}. I am ${this.age}`;
    }
}
console.log(person.commit())
let person2 = {
    name: "Ali",
    age: 18
}
let commit2 = person.commit.apply(null,person);
console.log(commit2());