const sass = require('sass');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'scss', 'index.scss');
const outputFullFile = path.join(__dirname, 'css', 'tooltip-extensions.css');
const outputCompressedFile = path.join(__dirname, 'css', 'tooltip-extensions.min.css');
const outputFullFileDoc = path.join(__dirname, '..', 'docs', 'css', 'tooltip-extensions.css');
const outputCompressedFileDoc = path.join(__dirname, '..', 'docs', 'css', 'tooltip-extensions.min.css');
const outputBuildFileDoc = path.join(__dirname, '..', 'eleventy', 'docs_build' ,'css', 'tooltip-extensions.css');
const outputBuildFileDocMin = path.join(__dirname, '..', 'eleventy', 'docs_build' ,'css', 'tooltip-extensions.min.css');

function writeToMultipleLocations(content, ...filePaths) {
  filePaths.forEach(filePath => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
    console.log(`File written to: ${filePath}`);
  });
}

function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2); // Convert size to KB and format to 2 decimal places
}

try {
  // Compile full (uncompressed) version
  const resultFull = sass.compile(inputFile, { style: 'expanded' });
  
  // Compile compressed version
  const resultCompressed = sass.compile(inputFile, { style: 'compressed' });
  
  // Write full version to all locations
  writeToMultipleLocations(resultFull.css, outputFullFile, outputFullFileDoc, outputBuildFileDoc);
  
  // Write compressed version to all locations
  writeToMultipleLocations(resultCompressed.css, outputCompressedFile, outputCompressedFileDoc, outputBuildFileDocMin);
  
  // Calculate and log file sizes
  const fullSizeKB = getFileSizeInKB(outputFullFile);
  const compressedSizeKB = getFileSizeInKB(outputCompressedFile);
  
  console.log(`SCSS compiled successfully!`);
  console.log(`Full version size: ${fullSizeKB} KB`);
  console.log(`Compressed version size: ${compressedSizeKB} KB`);
  
} catch (error) {
  console.error('Error compiling SCSS:', error);
}
