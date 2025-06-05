// Right-Angled Triangle

// function rightAngledTriangle(n) {
//   for (let i = 0; i <= n; i++) {
//     let star = "";
//     console.log(star, 'star before loop');

//     for (let j = 0; j <= i; j++) {
//       star += "*";
//       console.log(star, 'star after adding star');
//     }
//       console.log(star);
//   }
// }
// rightAngledTriangle(5);




// console.log('-------------------');
// Inverted Triangle

// function invertedTriangle(n) {
//   for (let i = n; i >= 0; i--) {
//     let star = "";
//     console.log(star, 'star before loop');

//     for (let j = 0; j < i; j++) {
//       star += "*";
//       console.log(star, 'star after adding star');
//     }
//     console.log(star);
//   }
// }
// invertedTriangle(5);

// console.log('-------------------'); 
// Full Pyramid

// function fullPyramid(n) {
//   for (let i = 0; i <= n; i++) {
//     let star = "";

//     for (let j = 0; j < n - i; j++) {
//       star += " ";      
      
//     }
//     for (let j = 0; j < i * 2 + 1; j++) {
//       star += "*";
      
//     }
//     console.log(star, 'star before loop');

//   }
// }
// fullPyramid(5);

// console.log('-------------------');
// Inverted Full Pyramid


function invertedFullPyramid(n) {
  for (let i = n; i >= 0; i--) {
    let star = "";
    // console.log(star, 'star before loop');

    for (let j = 0; j < n - i; j++) {
      star += " ";
      // console.log(star, 'star after adding space');
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      star += "*";
      // console.log(star, 'star after adding star');
    }
    console.log(star);
  }
}
invertedFullPyramid(5);
