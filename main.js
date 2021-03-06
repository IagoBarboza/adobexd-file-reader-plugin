const { Text, Color } = require('scenegraph')
const fs = require('uxp').storage.localFileSystem

const insertTextFromFile = async (selection) => {
  const aFile = await fs.getFileForOpening({ types: ["txt"] })
  
  if (!aFile) return

  const contents = await aFile.read()

  const text = new Text()
  
  text.text = contents

  text.styleRanges = [
    {
      length: contents.length,
      fill: new Color('#0000ff'),
      fontSize: 12
    }
  ]
  
  selection.insertionParent.addChild(text)

  text.moveInParentCoordinates(10, 30)
}

module.exports = {
  commands: {
    insertTextFromFile
  }
}