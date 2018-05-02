var fs = require('fs');

fs.readFile('index.html',function (err,data) {
    if (err){
        console.error(err.message);
        return;
    }

    console.log(data.toString());
});