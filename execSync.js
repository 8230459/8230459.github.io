module.exports = async cmd => {
  try {
    await require('child_process').execSync(cmd)
  } catch (e) {
    console.error(e)
  }
}