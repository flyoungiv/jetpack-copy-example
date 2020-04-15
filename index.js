const jetpack = require('fs-jetpack')

const copyWithNewName = (source, target) => {
  const alternateTarget = `${target}_backup_${Date.now()}`
  jetpack.copy(source, alternateTarget)
}

jetpack.copy('./source/file1.txt', './target/file1.txt', {
  overwrite: (source, target) => {
    if (source.name === target.name) {
      copyWithNewName(source.absolutePath, target.absolutePath)
      return false
    }
    return true
  }
})