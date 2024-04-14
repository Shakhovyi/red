const capitalizeString = str => str.toUpperCase();

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
