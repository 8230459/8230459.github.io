const fs = require('fs')
const path = require('path')
const request = require('request')
const execSync = require('./execSync.js')
const files = [
  {'name': 'c.vue', 'path': 'e:\\test\\'}
]
files.forEach(file => {
  request('https://8230459.github.io/' + file.name).pipe(fs.createWriteStream(path.join(file.path, file.name)))
})

//fs.rmSync('e:\\test\\b.vue', {recursive: true})
async function main() {
  await execSync('cd e:\\test')
  await execSync('git add .')
  await execSync('git checkout andy')
  await execSync('git commit -m andy')
  await execSync('git push')
  await execSync('git checkout sit')
  await execSync('git merge andy')
  await execSync('git push')
}

main()
process.exit()