// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return null;
    }
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    return array.reduce(function(sum, element) {
        return sum + (Array.isArray(element) ? arraySum(element) : element)
    }, 0)
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n > 0) {
        return isEven(n - 2);
    } else {
        return isEven(n + 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n > 0) {
        return n ? n - 1 + sumBelow(n - 1) : 0;
    } else {
        return n ? n + 1 + sumBelow(n + 1) : 0;
    }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (y - x === 1 || y - x === 0) {
      return [];
  } else {
    y = y > x ? y - 1 : y + 1;
  }
  return y === x ? [] : range(x, y).concat(y);
    
    // if (x !== 0 && y !== 0) {
    //     return range(x - 1, y - 1).concat(x, y);
    // } else if (x !== 0 && y !== 0) {
    //     return range(x + 1, y + 1).concat(x, y);
    // } else {
    //     return [];
    // }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    } 
    if (exp < 0) {
        return 1 / (exponent(base, -exp));
    }
    return exponent(base, exp - 1) * base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1) {
        return true;
    } else if (n % 2 !== 0 || n === 0) {
        return false;
    } else {
        return powerOfTwo(n / 2);
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string === "") {
        return "";
    } else {
        return reverse(string.substr(1)) + string.charAt(0);
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.replace(/\s+/g, '').toLowerCase();
    var strLength = string.length;
   if (strLength === 0 || strLength === 1) {
       return true;
   }
   
   if (string[0] === string[strLength - 1]) {
       return palindrome(string.slice(1, strLength - 1) );
   }
   return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
   if (x === 0 && y === 0) {
       return NaN;
   } else if (x >= 0 && y > 0) {
       return x >= y ? modulo(x - y, y) : x;
   } else if (x > 0 && y < 0) {
       return x >= -y ? modulo(x + y, y) : x;
   } else if (x < 0 && y > 0) {
       return -x >= y ? modulo(x + y, y) : x;
   } else if (x < 0 && y < 0) {
       return x <= y ? modulo(x - y, y) : x;
   }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    } else if ( y < 0 ) {
        return - x + multiply(x, y + 1);
    } else {
        return x + multiply(x, y - 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    if (x === 0 && y === 0) {
        return NaN;
    } else if (x === 0) {
        return 0;
    } else if (y === 1) {
        return x;
    } else if (x < y) {
        return 0;
    } else if (x + y < 0) {
        return 0;
    } else if (x - y < y) {
        return 1;
    }
    return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) {
        return null;
    }
    if (!y) {
        return x;
    }
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1 === '' && str2 === '') {
        return true;
    } else if (str1.charAt(0) !== str2.charAt(0)) {
        return false;
    }
    return compareStr(str1.substr(1), str2.substr(1));
    
    // if (str1.split()[0] === str2.split()[0]) {
    //     str1 = str1.split().slice(1).join();
    //     str2 = str2.split().slice(1).join();
    //     return compareStr(str1, str2);
    // } else {
    //     return false;
    // }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    str = str.split('');
    if (str.length === 0) {
        return [];
    }
    return [str[0]].concat(createArray(str.slice(1).join('')));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    return array.length === 0 || array.length === 1 ? array : array.slice(array.length - 1).concat(reverseArr(array.slice(- array.length, - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    return length === 0 ? [] : [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if(!array.length) return 0;
    return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, result = [], i = 0) {
    if(i === array.length){
        return result;
    } 
    return rMap(array, callback, result.concat(callback(array[i])), ++i);
};

// var rMap = function (array, callback) {
//     if (array.length === 1) {
//         return callback(array);
//     }
//     else {
//         return [callback(array[0])].concat(rMap(array.slice(1), callback));
//     }
// };

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
    var count = 0;
    for (var prop in obj) {
        if (prop === key) {
            count++;
        }
        if (typeof obj[prop] === 'object') {
            count += countKeysInObj(obj[prop], key)
        }
    }
    return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var count = 0;
    for (var prop in obj) {
        if (obj[prop] === value) {
            count++;
        }
        if (typeof obj[prop] === 'object') {
            count += countValuesInObj(obj[prop], value);
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    var replaced = {};
    for (var prop in obj) {
        if (prop === key) {
            replaced[newKey] =obj[prop];
        } else if (typeof obj[prop] === 'object') {
            replaced[prop] = replaceKeysInObj(obj[prop], key, newKey);
        } else {
            replaced[prop] = obj[prop];
        }
    }
    return replaced;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if (n === 1) 
    {
      return [0, 1];
    } else if (n <= 0) {
        return null;
    }
    else {
      var s = fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
        return null;    
    } else if (n <= 1) {
        return n;
    }
    return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if (input.length === 0) {
        return [];
      }
      return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if (array.length === 0) {
        return [];
    }
    function capFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return [capFirst(array[0])].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var sum = 0;
    for (var key in obj) {
        if (obj[key] % 2 === 0) {
            sum += obj[key];
        } else if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        }
    }
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    var flattened = [];
    arrays.forEach(function(value) {
        if (Array.isArray(value)) {
            flattened = flattened.concat(flatten(value));
        } else {
            flattened.push(value);
        }
    });
    return flattened;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
    str = str.split("");
    if (str.length === 0) {
        return obj;
    }
    
    if (typeof obj[str[0]] === "number") {
        obj[str[0]] = obj[str[0]] + 1;
    } else {
        obj[str[0]] = 1;
    }
    
    return letterTally(str.slice(1).join(""), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, count = 0, compressedArr = [], numCompare = 0) {
    if (list.length >= 1 && list [1] !== undefined) {
        numCompare = list[1];
        if (numCompare !== list[0]) {
            compressedArr.push(list[0]);
        }
    } else if (list.length === 1) {
        if (numCompare !== list[0]) {
            compressedArr.push(list[0]);
        }
    } else if (list.length === 0) {
        return compressedArr;
    }
    return compress(list.slice(1), count++, compressedArr);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, newArr = []) {
    if (array.length === 0) {
        return newArr;
    } else {
        newArr.push(array[0].concat(aug));
    }
    return augmentElements(array.slice(1), aug, newArr);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, itemsInArray = 0, noZeroes = []) {
    if (array.length < 1) {
        return noZeroes;
    } else if (array.length > 0) {
        itemsInArray = array[0];
        if (itemsInArray !== array[1]) {
            noZeroes.push(array[0]);
        }
    }
    return minimizeZeroes(array.slice(1), itemsInArray, noZeroes);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, i = 0, out = []) {
    var odds = i % 2 === 1;
    var evens = i % 2 === 0;
    if (i === array.length) {
        return out;
    } else if (evens) {
        out.push(Math.abs(array[i]));
    } else if (odds) {
        out.push(-Math.abs(array[i]));
    }
    return alternateSign(array, ++i, out);
 };

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

var numToText = function(str, target = 0) {
    const digitsToWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    if (target === 10) 
        return str;
    
    const
        replaceWith = digitsToWords[target],
        regEx = new RegExp(target, 'g'),
        processed = str.replace(regEx, replaceWith);
    
    return numToText(processed, ++target);

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    return node = document.getElementsByTagName('p').length;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, newArr = []) {
    var count = 0;
    if (array.length === 0) {
        count = newArr.indexOf(target);
        if (count === - 1) {
            return null;
        } else {
            return count;
        }
    } 
        if (array.length > 0) {
            newArr.push(array[0]);
        }
        return binarySearch(array.slice(1), target, newArr);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var merge = function(leftArr, rightArr) {
    var result = [];
    var indexL = 0;
    var indexR = 0;
    
    while(indexL < leftArr.length && indexR < rightArr.length) {
        if (leftArr[indexL] < rightArr[indexR]) {
            result.push(leftArr[indexL++]);
        } else {
            result.push(rightArr[indexR++]);
        }
    }
    return result.concat(leftArr.slice(indexL)).concat(rightArr.slice(indexR));
}

var mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }
    var arrMiddle = Math.floor(array.length / 2);
    var leftArr = array.slice(0, arrMiddle);
    var rightArr = array.slice(arrMiddle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));


};
