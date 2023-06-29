console.log("Lakes");
/*
i. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

ii. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5

iii. Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

iv. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
*/

// i) Javascript function that checks whether a passed string is Palindrome or not

function palindrome (str) {
    // defining the regular expression: regex
    let reg = /[^A-Za-z0-9]/g
    // Redefining the string method.
    let allStr = str.toLowerCase().replace(reg, "");

    let revStr = allStr.split("").reverse().join("");
      // Using the if else statement
    if (revStr === allStr) {
       return true;
    } else{
       return false;
    }
}
palindrome ("raceCAR");

// ii) JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels (str) {
    // Declaring the variable vowel
  let vowels = "aeiou"; // can also be array
  let result = 0;
//   using the for loop iterate over the str
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i].toLowerCase());
    let element = str[i].toLowerCase()
    if (vowels.includes(element)){
      result++;
    }
  } 
  return result;
};
countVowels("WeAlth");

// iii) JavaScript function that accepts an argument and returns the type.

// Using the argument input to check data types
function checkDataTypes(input) {
    return typeof input;
}
checkDataTypes("hello");

// iv) Write a JavaScript function to get the number of occurrences of each letter in a specified string.

function checkOcc(str) {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        // console.log(str.charAt(i).toLowerCase());
        let char = str.charAt(i).toLowerCase();

        //Using the If else statement and redefining the alphabet with regex
        if(/[a-z]/.test(char)) {
            if(result[char]) {
                result[char]++;
            }else{
                result[char] = 1
            }
        }
    }
    return result
};
checkOcc("LoRRy");