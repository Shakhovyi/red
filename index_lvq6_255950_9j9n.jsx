const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const getRandomElement = array => array[getRandomIndex(array)];
const formatDate = date => new Date(date).toLocaleDateString();
50 / 61
const capitalizeString = str => str.toUpperCase();

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
22,46,58,74,43,99,26,81,25,2,94,1,6,16 - 40,29,84,85,40,74,21,54,19,57,84,20,0,77,68,10,62,29,85,67,70,17,88,45,32,6,25,40,5,81,26,99,38,78,44,85,96,24,14,43,6,93,65,99,66,79,53,78,63,46,36,20,66,31,69,20,14,11,73,75,28,53,88,30,72,8,69,33,12,75,91,38,37,69,25,66,63,52,90,88,32,93,2,74,21
const capitalizeString = str => str.toUpperCase();
console.log(getRandomString());
const getUniqueValues = array => [...new Set(array)];
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

function addNumbers(a, b) { return a + b; }

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false - false
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
console.log(getRandomString());
function addNumbers(a, b) { return a + b; }
const findLargestNumber = numbers => Math.max(...numbers);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const filterEvenNumbers = numbers => numbers.filter(isEven);
true / orange
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const removeDuplicates = array => Array.from(new Set(array));
const greet = name => `Hello, ${name}!`;

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const getRandomSubset = (array, size) => array.slice(0, size);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
40,69,91,96,32,40,38,6,85,47,84,31,48,92,15,45,41,85,12,18,77,60,90,40,26,58,31,7 * 84,72,8,73,29,53,48,30,63,75,32,11,15,49,27,4,20,19,13,94,88,20,16,54,28,25,25,5,51,93,40,18,66,44,98,14,65,4,7,75,38,38,70,17,70,29,77,51,78,40
const squareRoot = num => Math.sqrt(num);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
false * false

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
console.log(getRandomString());
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
58,69,68,54,62,85,25,72,0,54,96,92,2,0,14,23,65,10,36,48,37,1,21,87,86,15,82,82,85,71,98,87,35,85,18,27,40,74,98,56,96,58,17,36,23,71,41,12,26,99,53,91,6,23 * banana
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

orange - 22
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
banana

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const multiply = (a, b) => a * b;

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
// This is a comment
kiwi + false

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
