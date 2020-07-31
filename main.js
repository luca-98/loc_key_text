var fs = require('fs');
var list;
var output = [];
fs.readFile('input.txt', 'utf8', function (err, contents) {
    list = contents.split('\n');
    let wrongFormat = '';
    let text = '';

    for (let iterator of list) {
        if (iterator.split('|').length != 2 ) {
            wrongFormat += iterator;
        } else {
            if (output.length == 0) {
                output.push(iterator)
            } else {
                let percent = 0;
                for (let i = 0; i < output.length; i++) {
                    const temp = iterator.toLocaleLowerCase().split(' ');
                    const temp2 = output[i].toLocaleLowerCase().split(' ');
                    let length = temp.length > temp2.length ? temp.length : temp2.length;
                    let count = 0;
                    for (const iterator2 of temp) {
                        if (temp2.includes(iterator2)) {
                            count++;
                        }
                    }
                    const tempPercent = (count / length) * 100;
                    if (tempPercent > percent) percent = tempPercent;

                }
                if (percent < 80) {
                    output.push(iterator);
                }
            }
        }
    }
    output.sort();
    output.forEach(element => {
        text += element;
    });

    fs.writeFile('output.txt', text, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log('done');
    });
    fs.writeFile('Wrong.txt', wrongFormat, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log('done');
    });
});



