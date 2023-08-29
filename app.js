

// const fruit = prompt('enter your fruit').toLowerCase();
// const fruits = ['banana', 'apple', 'orange', 'mosambi', 'papita', 'nashpati'];
// for(i=0; i< fruits.length ; i++){
//     if(fruits[i]=== fruit){
//         console.log(`${fruit} is avaible`);
//         break
//     }
//     else{
//         console.log(`orange is not  avaible`);
//     }
// }

let i = 1;
let div = document.querySelector("div");
 let j= 1;
do {
    
        console.log();
        // div.innerHTML+=`<br/>`
         i++
         do{
             div.innerHTML+=`${i} * ${j} = ${i*j} <br/> `
             j++
             
         }
         while(j <=10);
   
  }
  while (i <= 10);




// let text = ""
// let i = 1;

// let j= 1

// do {
//   text +=  `${i} * ${j} = ${i*j} <br/> `;
//   i++;
// }
// while (i < 10);  

// document.getElementById("demo").innerHTML = text;



// let myName = prompt('enter your sentence');
// // console.log(myName.slice(0 , 1))
// let nameArr = myName.split(' ');
// // console.log(nameArr);
// // console.log(nameArr[1]);
// let result = [];
// for (let i = 0; i < nameArr.length; i++) {
//     console.log(nameArr[i].slice(0 , 1));
//     let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
//     let lastLetter = nameArr[i].slice(1).toLowerCase();
//     let completeLetter = firstLetter + lastLetter;
//     result.push(completeLetter);
// }

// console.log(result.join(' '));