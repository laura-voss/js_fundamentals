const generateMessages = (names) => {
  return names.map((name) => {
    return `Hi ${name}! 50% off our best candies for you today!` ;
  });
}

// --- alternative solution ---
// const generateMessages = (nameList) => {
//   return nameList.map((name) => {
//     return `Hi ` + name + `! 50% off our best candies for you today!`;
//   });
// }
// --- end ---


// Once your function is written, you should be able to type 
// the following code and have the exact same output:

// > const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// > generateMessages(names);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 50% off our best candies for you today!',
//   'Hi Josh! 50% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 50% off our best candies for you today!'
// ]
