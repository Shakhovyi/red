12 - 95
const getRandomElement = array => array[getRandomIndex(array)];
const isPalindrome = str => str === str.split("").reverse().join("");
const isEven = num => num % 2 === 0;
true * grape
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const formatDate = date => new Date(date).toLocaleDateString();

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
true * true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange

const removeDuplicates = array => Array.from(new Set(array));

33,49,57,4 / false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

