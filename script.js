// console.log("hey!");
// setTimeout(function(){
//     console.log("hey2");
// },2000);


// Promises
// var ans = new Promise((res, rej) => {
//      if(false){
//         return res();
//      }
//      else {
//         return rej();
//      }
// });

// ans
//     .then(function(){
//         console.log("resolve hogaya tha!");
//     })
//     .catch(function(){
//         console.log("resolve nhi hua tha!");
//     })

// 2nd Example
// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10);
//     console.log(n);
//     if(n>5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// });
// ans.then(function(){
//     console.log('Above then 5');
// })
// .catch(function(){
//     console.log('below then 5');
// })


// Promise Chain
// 
// var ans = new Promise((res, rej) => {
//     return res('1st task complted');      
// });
// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise((res, rej)=>{
//         return res('2nd task complted');
//     });
// })
// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise((res, rej)=>{
//         return res('3rd task complted');
//     });
// })
// var p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise((res, rej)=>{
//         return res('4th task complted');
//     });
// })

// p4.then(function(data){
//     console.log(data);
// })


// without async await
// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// abcd();


// with async await
async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let data = await raw.json();
    console.log(data)
}

abcd();

