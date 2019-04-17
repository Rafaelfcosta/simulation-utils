const math = require('./math')
const fs = require('fs')

let uniform = math.uniform(50, 200, 100);

var writeStream = fs.createWriteStream('uniform.txt')
uniform.forEach(value => writeStream.write(`${value}\n`))

let triangular = math.triangular(10, 100, 30, 100);

writeStream = fs.createWriteStream('triangular.txt')
triangular.forEach(value => writeStream.write(`${value}\n`))

let expo = math.exponential(10, 20, 100);

writeStream = fs.createWriteStream('expo.txt')
expo.forEach(value => writeStream.write(`${value}\n`))

let normal = math.normal(6, 100);

writeStream = fs.createWriteStream('normal.txt')
normal.forEach(value => writeStream.write(`${value}\n`))