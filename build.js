const fs = require('fs')
const secret = require('./secret')
fs.readdir('s', (err, files) => {
  if (err) return
  for (let file of files) {
    fs.readFile('./s/' + file, (err, data) => {
      if (err) return
      const sream = fs.createWriteStream('./b/' + file)
      sream.write(secret.Lock(data.toString()))
    })
  }
})
require('./execSync')('aaa.bat')
