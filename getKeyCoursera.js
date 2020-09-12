let linecode = document.getElementsByClassName('ace_gutter');
let point = document.getElementsByClassName('rc-QuestionPoints');
for (const iterator of linecode) {
    iterator.innerHTML = '';
}
for (const iterator of point) {
    iterator.innerHTML = '';
}
let question = document.getElementsByClassName('rc-FormPartsQuestion');
let listQuestion = '';
for (const iterator of question) {
    const questionText = iterator.querySelector('.rc-FormPartsQuestion__contentCell').innerText + '\n';
    const option = iterator.querySelectorAll('.rc-Option');
    let optionText = '';
    let letter = 65;
    for (const iterator2 of option) {
        optionText += String.fromCharCode(letter) + ' : ' + iterator2.innerText + '\n';
        letter++;
    }
    listQuestion += questionText + optionText + '<-ans-> ... ' + '\n<-nextQuestion->\n';
}
console.log(listQuestion)