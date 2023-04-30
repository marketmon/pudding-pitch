const csvFilePath = './bankData.csv';
const csv = require('csvtojson');
const fs = require('fs');

const columns = ["YEAR", "BANKS", "NETINC"];
const data = [];

csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        const record = {};
        for (const column of columns) {
            record[column] = jsonObj[column];
        }
        data.push(record);
    })
    .on('done', (error) => {
        if (error) {
            console.log(error);
        } else {
            fs.writeFile('data.json', JSON.stringify(data, null, 2), (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Conversion completed successfully!');
                }
            });
        }
    });
