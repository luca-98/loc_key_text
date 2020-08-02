const fs = require('fs');
let output = [];
fs.readFile('input.txt', 'utf8', function (err, contents) {
    let list = contents.split('\n');
    let wrongFormat = '';
    let text = '';

    for (let iterator of list) {
        iterator = iterator.trim();
        if (iterator.split('|').length != 2) {
            wrongFormat += iterator;
        } else {
            if (output.length == 0) {
                output.push(iterator)
            } else {
                let percent = 0;
                for (let i = 0; i < output.length; i++) {
                    const temp = iterator.toLocaleLowerCase().split(' ');
                    const temp2 = output[i].toLocaleLowerCase().split(' ');
                    const length = temp.length > temp2.length ? temp.length : temp2.length;
                    let count = 0;
                    for (const iterator2 of temp) {
                        if (temp2.includes(iterator2)) {
                            count++;
                        }
                    }
                    const tempPercent = (count / length) * 100;
                    if (tempPercent > percent) percent = tempPercent;

                }
                if (percent < 70) {
                    output.push(iterator);
                }
            }
        }
    }
    output.sort();
    text = output.join('\n');

    fs.writeFile('output.txt', text, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log('done');
    });
    fs.writeFile('Wrong.txt', wrongFormat, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log('done');
    });
});



