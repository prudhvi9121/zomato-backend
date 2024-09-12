const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const parseCSV = (filePath, callback) => {
  const data = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      callback(data);
    });
};

module.exports = parseCSV;
