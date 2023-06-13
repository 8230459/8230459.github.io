const fs = require('fs')
const path = require('path')
const request = require('request')
const process = require('process')
const secret = require('./secret')
const execSync = require('./execSync')

//const target = 'd:\\test\\'
const target = 'd:\\portal\\'
request('https://8230459.github.io/aui.umd.min.js', async (err, res, body) => {
  if (err) return
  fs.writeFile(target + 'public\\js\\aui.umd.min.js', body, async err => {
    if (err) return
  })
})
const files = [
  //{'name': '_applianceRenderingTemplate.vue', 'path': target + 'src\\pages\\'}
]
for (let file of files) {
  request('https://8230459.github.io/b/' + file.name, async (err, res, body) => {
    if (err) return
    fs.writeFile(path.join(file.path, file.name), secret.UnLock(body), async err => {
      if (err) return
    })
  })
}
/*
setTimeout(() => {
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
}, 20000)*/
