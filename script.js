// 2. Minimum and Maximum Numbers:


function findMinMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let min = numbers[0];
    let max = numbers[0];


    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; 
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }


    return { min, max };
}

console.log(findMinMax([1, 2, 3, 4, 5]));
console.log(findMinMax([-10, 0, 15, 7, -3]));
console.log(findMinMax([]));



//3. Missing Number Identification:



function findMissingNumber(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + 1 !== numbers[i + 1]) {
            return numbers[i] + 1;
        }
    }
    return null;
}

console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20]));
console.log(findMissingNumber([1, 2, 3, 5, 6, 7]));
console.log(findMissingNumber([2, 3, 4, 5, 6]));
