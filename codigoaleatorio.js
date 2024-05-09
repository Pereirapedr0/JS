// const array = [5, 6, 1, 2, 51, 12, 50, 15];


//  let x = array[7];
//  let y = array[0];

//  array[0] = x
//  array[7] = y



// console.log(array);

// const a = (y) => {
//   console.log(y);
// }
// a('w')


// function print(c, a, b) {
//   return {
//     c, a, b
//   }
// }

// let x = 'b';
// let y = 'c';
// let z = 'a';

// const { a, b, c } = print(x, y, z);

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

// const array = [1, 2, 3, 4];
// for (i = 0; i < array.length; i++) {
//   if (array[i] == i + 1) {
//     console.log(i);
//   }
// }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const resultado = [3, 6, 9, 12];

function div(){
    for (i = 0; i < array.length; i++) {
    if(array[i] % 3 == 0) {
        console.log(array[i]);
    }
}
}
div()