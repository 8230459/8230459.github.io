const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')
const target = 'd:\\test\\'
const files = [
  {'name': 'b.js', 'path': target + 'src\\api\\'}
]
for (let file of files) {
  request('https://8230459.github.io/b/' + file.name, {}, async (err, res, body) => {
    if (err) return
    fs.writeFile(path.join(file.path, file.name), secret.UnLock(body), err => {
      console.log(path.join(file.path, file.name))
    })
  })
}
setTimeout(async () => {
  await execSync('git.bat')
  //await fs.rmSync('get.js', {recursive: true})
  //await execSync('node jenkins.js')
  process.exit()
}, 5000)
