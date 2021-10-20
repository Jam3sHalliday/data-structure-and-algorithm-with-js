// const validAnagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
  
//   const fc1 = {};
//   const fc2 = {};

//   for (let i = 0; i < str1.length; ++i) {
//     fc1[str1[i]] = (fc1[str1[i]] || 0) + 1;
//     fc2[str2[i]] = (fc2[str2[i]] || 0) + 1;
//   }
  
//   for (let key in fc1) {
//     if (!fc2[key]) return false;
//     if (fc1[key] !== fc2[key]) return false;
//   }

//   return true;
// }

// validAnagrams("qwerty", "ytrewq");


// ======
// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right --;            
//         } else {
//             left ++
//         }
//     }
// }

// sumZero([1,2,3,0,-1,-2,-3].sort((a, b) => a - b));

/**=============================================== */

// function countUniqueValues (arr) {
//  if(arr.length === 0) return 0;
//  let i = 0;
//   for (let j = 1; j < arr.length; ++j) {
//     console.log({ first: arr[i], second: arr[j], arr });
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//     console.log(arr)
//   return i;
// }

// countUniqueValues([-2, -1, -1, 0, 1, 2]);

/**=============================================== */
// function maxSubarraySum (arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;

//   for (let i = 0; i < num; ++i) {
//     maxSum += arr[i];
//   }

//   tempSum = maxSum;
//   for (let i = num; i < arr.length; ++i) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;

// };

// maxSubarraySum([1,2,5,2,8,1,5], 4) // 15

// var lengthOfLongestSubstring = function(s) {
//     if (!s) return 0;
//     if (s === " ") return 1;

//     let longest = 1;
//     let arr = [];

//     for (let i = 0; i <= s.length; ++i) {
//         if (s[i]) {
//           if (arr.includes(s[i])) {
//               longest = Math.max(arr.length, longest);
              
//               if (i !== (s.length - 1)) {
//                 arr = [s[i]];
//               }
//           } else {
//               arr.push(s[i]);
//           }
//         }
//     }
    
//     return longest;
// };

// lengthOfLongestSubstring("dvadf");

/**=========================== */
// function search (arr, val) {
//   let middle = Math.floor((arr.length -1 )/2);
//   let i = 0;
//   let range;

//   if (arr[middle] > val) {
//     range = middle;
//   } else if (arr[middle] < val) {
//     i = middle;
//     range = arr.length - 1;
//   } else {
//     return middle;
//   }

//   for (i; i < range; ++i) {
//     if (arr[i] === val) return i;
//   }

//   return -1;
// }

// function search(arr, val) {
//   let min = 0;
//   let max = arr.length - 1;
//   while (min <= max) {
//     let middle = Math.floor((min + max) /2);

//     let curr = arr[middle];

//     if (arr[middle] < val) {
//       min = middle + 1;
//     } else if (arr[middle] > val) {
//       max = middle - 1;
//     } else {
//       return middle;
//     }
//   }

//   return -1;
// }

// console.time();
// search([1,2,3,4,5,6], 3);
// console.timeEnd();

/**=========================== */
// function sameFrequency (n1, n2) {
//   if (n1 === n2) return true;
//   let s1 = n1 + "";
//   let s2 = n2 + "";

//   if (s1.length !== s2.length) return false;
//   let obj1 = {};
//   let obj2 = {};

//   for (let i = 0; i < s1.length; ++i) {
//     obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
//     obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
//   }
//   for (let key in obj1) {
//     if (!obj2[key]) return false;
//     if (obj2[key] !== obj1[key]) return false
//   }
//   return true;
// }

// sameFrequency(123345,543321);

/**=========================== */
// function areThereDuplicates(...a) {
  // return new Set(a).size !== a.length;
  // let arr = a.sort((a, b) => a - b);
  // if (typeof (a[0]) === "string") {
  //   arr = a.sort();
  // }

    
  
  // let i = 0;
  // console.log(arr)
  // for (let j = 1; j <= arr.length; ++j) {
  //   console.log({ i, j, a: arr[i], b: arr[j]});
  //   if (arr[i] === arr[j]) return true;
  //   i += 1
  // }

  // return false;
// }

// areThereDuplicates(1,2,3);

/**=========================== */
function averagePair (arr, num) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start !== end) {
        let av = (arr[start] + arr[end]) / 2;
        
        if (av === num) {
        return true;
        } else if (av > num) {
        end --
        } else {
        start ++
        }
    }
    
    return false;
    }
  
averagePair([1,3,3,5,6,7,10,12,19], 8);
/**=========================== */
function isSubsequence(s1, s2) {

}