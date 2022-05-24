const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}


// Once your function is written, you should be able to type 
// the following code and have the exact same output:

// const numbers = [
//   '1763687364',
//   '4763687363',
//   '7867867862',
//   'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
// ];

// > filterLongNumbers(numbers);
// [ '1763687364', '4763687363', '7867867862' ]

// > filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
// [ '4763687363', '7867867862' ]

// > filterLongNumbers([])
// [ ]
