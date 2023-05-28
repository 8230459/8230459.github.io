const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const execSync = require('./execSync.js')
const target = 'd:\\portal\\'
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
const timer = setTimeout(async () => {
  if (count === files.length) {
    await fs.rmSync('get.js', {recursive: true})
    process.exit()
    /*request('https://8230459.github.io/git.bat').pipe(fs.createWriteStream(path.join('.', 'git.bat'))).on('close', async err => {
      if (err) return
      await execSync('git.bat')
      await fs.rmSync('git.bat', {recursive: true})
      await fs.rmSync('get.js', {recursive: true})
      //await execSync('node jenkins.js')
      process.exit()
    })*/
    clearTimeout(timer)
  }
}, 5000)