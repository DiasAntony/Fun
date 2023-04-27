import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const array=[1,"2",3,4]

// const isArray=Array.isArray(array)

// console.log(typeof array[1] )
// console.log(  )

// array.forEach((item)=> {
//   if (typeof item ===  "string") {
//     return console.log( `${item} is String` );

//   }else{

//     return console.log( `${item} is Number` );

//   }
//   // return console.log(typeof item)
// }
// )

// const kie='diaz';

// console.log(kie.length);

// var text = 'uololooo';

// // With ES6
// [...text].forEach(c => console.log(c))

// // With the `of` operator
// for (const c of text) {
//     console.log(c)
// }

// // With ES5
// for (var x = 0, c=''; c = text.charAt(x); x++) {
//     console.log(c);
// }

// // ES5 without the for loop:
// text.split('').forEach(function(c) {
//     console.log(c);
// });

// ----------Task-----------

// function FindingSpell(name) {

const name = "diaz";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// }

// FindingSpell('diaz')

// --------count---

const love = "ihiy";

const de = [...love];

console.log(de);

// console.log((love.match(/a/g).length));

let s = "vamos";
var result = [...s].reduce((a, e) => {
  a[e] = a[e] ? a[e] + 1 : 1;
  return a;
}, {});
console.log(result);
