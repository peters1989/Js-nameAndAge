let name = prompt('Введите свое имя');
let age = +prompt('Введите свой год рождения');
let yare = +prompt('Введите нынешний год');


function a (){
    let b = yare - age;
    return b;
}
alert('Ваше имя '+ name + ' Вам '+ a() + ' года');