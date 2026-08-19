// first filter, then map, then reduce

// Take in an array
function sumOfTripledEvens(array) {
    // Filter for even numbers
    const evenNums = array.filter((num) => num % 2 == 0);
    console.log("Only even nums: " + evenNums);

    // Use map to multiply all filtered numbers by three
    const multipliedMap = evenNums.map((num) => num * 3);
    console.log("Multipled by three: " + multipliedMap);

    // Use reduce to sum up the numbers
    const productOfAllNums = multipliedMap.reduce((total, currentItem) => {
        return total += currentItem;
    }, 0);
    console.log("Everything summed up: " + productOfAllNums);

    return productOfAllNums;

}

let arr = [1, 2, 3, 4, 5];

let summed = sumOfTripledEvens(arr);

console.log(summed);

/*

Correct solution:

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

*/





