const fs = require('fs')
const request = require('request')
const files = [
  {'name': 'c.vue', 'path': 'e:\\test0\\'}
]
files.forEach(file => {
  request('https://8230459.github.io/' + file.name).pipe(fs.createWriteStream(path.join(file.path, file.name)))
})
fs.rmSync('e:\\test0\\b.vue', {recursive: true})
process.exit()