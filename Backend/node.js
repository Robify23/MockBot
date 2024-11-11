const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex'); // Generates a random 64-byte key in hexadecimal
console.log(secretKey); // Save this key
