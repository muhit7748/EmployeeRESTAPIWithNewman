const newman = require('newman');
require('dotenv').config(); //require install dotenv package
 
newman.run({
    // past collection url 
    collection:`https://api.postman.com/collections/${process.env.COLLECTION_ID}?access_key=${process.env.SECRET_KEY}`,
    //collection:`https://api.postman.com/collections/1844288-0c2f5c62-e7d8-4d31-8baa-6158bf88f4a0?access_key=${process.env.secretKey}`,
    environment: './TestEnv.postman_environment.json',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});