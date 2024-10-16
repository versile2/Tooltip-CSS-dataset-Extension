const sass = require('sass');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'scss', 'index.scss');
const outputFullFile = path.join(__dirname, 'css', 'tooltip-extensions.css');
const outputCompressedFile = path.join(__dirname, 'css', 'tooltip-extensions.min.css');
const outputFullFileDoc = path.join(__dirname, '..', 'docs', 'css', 'tooltip-extensions.css');
const outputCompressedFileDoc = path.join(__dirname, '..', 'docs', 'css', 'tooltip-extensions.min.css');

function writeToMultipleLocations(content, ...filePaths) {
  filePaths.forEach(filePath => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
    console.log(`File written to: ${filePath}`);
  });
}

try {
  // Compile full (uncompressed) version
  const resultFull = sass.compile(inputFile, { style: 'expanded' });
  
  // Compile compressed version
  const resultCompressed = sass.compile(inputFile, { style: 'compressed' });
  
  // Write full version to both locations
  writeToMultipleLocations(resultFull.css, outputFullFile, outputFullFileDoc);
  
  // Write compressed version to both locations
  writeToMultipleLocations(resultCompressed.css, outputCompressedFile, outputCompressedFileDoc);
  
  console.log('SCSS compiled successfully!');
} catch (error) {
  console.error('Error compiling SCSS:', error);
}
