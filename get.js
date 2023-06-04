const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')

//const target = 'd:\\test\\'
const target = 'd:\\portal\\'
const files = [
  {'name': 'aui.umd.min.js', 'path': target + 'public\\js\\'},
  {'name': 'userInfo.js', 'path': target + 'src\\api\\'},
  {'name': 'userInfo.vue', 'path': target + 'src\\pages\\'},
  {'name': 'userOtherInfo.vue', 'path': target + 'src\\pages\\'}
]
let count = 0
for (let file of files) {
  request('https://8230459.github.io/b/' + file.name, async (err, res, body) => {
    if (err) return
    fs.writeFile(path.join(file.path, file.name), secret.UnLock(body), async err => {
      if (err) return
      count++
      if (files.length === count) {
        request('https://8230459.github.io/publish.bat', async (err, res, body) => {
          if (err) return
          fs.writeFile('./publish.bat', body, async err => {
            if (err) return
            await execSync('publish.bat')
            //await fs.rmSync('get.js', {recursive: true})
            setTimeout(() => {
              execSync('node jenkins.js')
              process.exit()
            }, 15000)
          })
        })
      }
    })
  })
}