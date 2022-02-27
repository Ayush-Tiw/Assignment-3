// Question-1) For the given JSON iterate over all for loops (for, for in, for of, forEach)
// Answer-
var obj=[
  {
    personName:"Aman",
    age:2,
    company:"Guvi"
  },
  {
    personName:"Naman",
    age:3,
    company:"Guvi Geek"
  },
  {
    personName:"Chitra",
    age:4,
    company:"Guvi Geek Network"
  }
]

// //For loop
for(i=0;i<obj.length;i++){
  let details=obj[i]
  console.log(`
  Person Name: ${details.personName}
  Age: ${details.age}
  Company: ${details.company}`)
};

//For each loop

obj.forEach((details)=>{
  console.log(`
  Person Name: ${details.personName}
  Age: ${details.age}
  Company: ${details.company}`)
});

//For in loop

for(index in obj){
details=obj[index];
console.log(`
Person Name: ${details.personName}
Age: ${details.age}
Company: ${details.company}`)
};


//For of loop

for(var details of obj){
  console.log(`
  Person Name: ${details.personName}
  Age: ${details.age}
  Company: ${details.company}`)
}