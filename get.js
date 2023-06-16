const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')

//const target = 'd:\\test\\'
const target = 'd:\\portal\\'
const files1 = [
  {'name': 'aui.umd.min.js', 'path': target + 'public\\js\\'}
]
for (let file of files1) {
  request('https://8230459.github.io/b/' + file.name, {json: true}, async (err, res, body) => {
    if (err) return
    fs.writeFile(path.join(file.path, file.name), secret.UnLock(body), async err => {
      if (err) return
    })
  })
}
const files2 = [
  {'name': 'applianceRenderingTemplate.vue', 'path': target + 'src\\pages\\'}
]
for (let file of files2) {
  request('https://8230459.github.io/b/' + file.name, {json: true}, async (err, res, body) => {
    if (err) return
    fs.writeFile(path.join(file.path, '_' + file.name), secret.UnLock(body), async err => {
      if (err) return
    })
  })
}
setTimeout(() => {
  request('https://8230459.github.io/publish.bat', async (err, res, body) => {
    if (err) return
    fs.writeFile('./publish.bat', body, async err => {
      if (err) return
      await execSync('publish.bat')
      //await fs.rmSync('get.js', {recursive: true})
    })
  })
}, 20000)
/*
setTimeout(() => {
  execSync('node jenkins.js')
  process.exit()
}, 35000)*/
