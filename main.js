const fs = require('fs');
const { print, getDefaultPrinter } = require('pdf-to-printer');
require('dotenv').config();
const sumatraPath = process.env.EXTERNAL_SUMATRA;
const folderPath = process.env.PDF_FOLDER;

setInterval(() => {
    sendFilesToPrint();
}, 10000);

async function sendFilesToPrint(){
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return;
        }
        getDefaultPrinter().then(console.log).finally(()=>{
            files.forEach((file) => {
                const filePath = `${folderPath}/${file}`;
                console.log(filePath);
                print(filePath, { sumatraPdfPath: sumatraPath }).finally(()=>{
                    try {
                        fs.unlink(filePath, (err) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            console.log(`File: ${filePath} deleted successfully`);
                        });
                    } catch (error) {}
                });
            });
        });
    });    
}
