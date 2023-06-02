const fs = require('fs')
const path = require('path')
const secret = require('./secret')
let count = 0
let total = 0
fs.readdir('s', (err, files) => {
  if (err) return
  total = files.length
  for (let file of files) {
    fs.readFile('./s/' + file, (err, data) => {
      if (err) return
      fs.writeFile(path.join('./b/', file), secret.Lock(data.toString()), err => {
        count++
        if (total === count) require('./execSync')('publish.bat')
      })
    })
  }
})
