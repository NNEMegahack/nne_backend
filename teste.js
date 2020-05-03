require('dotenv').config()

console.log(process.env.DB_SERVER)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)
console.log(process.env.DB_CLIENT)
console.log(process.env.DB_VERSION)
console.log(`${__dirname}/src/database/migrations`)