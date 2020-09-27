1)
var color = prompt("Введите цвет","");
  switch(color === 'red') {
     document.write("<div style='background-color: red;'>красный</div>");
 }else if (color === 'black') {
     document.write("<div style='background-color: black; color: white;'>черный</div>");
 }else if (color === 'blue') {
     document.write("<div style='background-color: blue;'>синий</div>");
    document.write("<div style='background-color: green;'>зеленый</div>");
 }else if (color === 'green') {
     document.write("<div style='background-color: green;'>зеленый</div>");
 }else {
     document.write("<div style='background-color: gray;'>Я не понял</div>");
 }



2)
var age = prompt("Сколько тебе лет?","");
if( age > 100 || age <= 0) {
  alert("Введите корректное значение")
}
   
3)
var month = prompt('Enter the month','');
switch(month){
    case 'december':
    case 'october':
    case 'august':
    case 'jule':
    case 'may':
    case 'march':
    case 'january':
        console.log(31);
        break;
    case 'november':
    case 'september':
    case 'june':
    case 'april':
        console.log(30);
        break;
    case 'february':
        console.log(28 || 29 );
        break;
    default:
        console.log('Incorrect value');
}


4)
var age = prompt(" Введите свой возраст ", "56");
if(age < 18){
    alert("Тебе пора в школу");
} 
else if(age > 18 && age < 30){
    alert("Пой,люби,ревнуй пока молодой");
} 
else if(age >30 && age < 50 ){
    alert("Зрелый ты стал");
} 
else if (age > 50 && age < 80){
    alert("Доставай валинки ");
} 
else if(age > 80 && age < 100) {
    alert("Отдаем тебе должное");
} 
else   {
   alert(" Вы с Грузии или Италии?");
}


5)
var age = prompt(" Введите свой возраст ", "56");
if(age < 18){
    alert("На улице солнечно");
} 
else if(age > 18 && age < 30){
    alert("На улице как-то серо");
} 
else if(age >30 && age < 50 ){
    alert("Какой прекрасный рассвет");
} 
else if (age > 50 && age < 80){
    alert("На улице мороз ");
} 
else if(age > 80 && age < 100) {
    alert("На дворе дождь");
} 
else   {
   alert(" Такой прекоасный рассвет");
}



6)
var html = {
    tagName: 'body',
    subTags: [{
            tagName: 'div',
            subTags: [{
                    tagName: 'span',
                    text: 'Enter a data please:'
                },{
                    tagName: 'br'
                },{
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name'
                    }
                },{
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },{
            tagName: 'div',
            subTags: [{
                tagName: 'button',
                attrs: {
                    id: 'ok',
                    text: 'OK'
                }},{
                tagName: 'button',
                attrs: {
                    id: 'cancel',
                    text: 'Cancel'
                }
            }]
        }
    ]
}


7)
var notebook = {

    brand : prompt(' Input notebook brand' , ''),
    type : prompt(' What type is it? ' , ''),
    model : prompt(' What model is it? ' , '')
    ram: prompt("How much RAM it has?", ""),
    size: prompt("Whats the size of it?", ""),
    weight: prompt("Whats the weight of it?", ""),
    resolution: {
        width: prompt("Input horizontal resolution", ""),
        height: prompt("Input vertical resolution", ""),
   
    }, 
};


var phone = {
    brand: prompt("Input phone brand", ""),
    model: prompt("Whats model is it?", ""),
    ram: prompt("How much RAM it has?", ""),
    color: prompt("What color is the case?", ""),
};

var person = {
    name: prompt("Input your name", ""),
    surname: prompt("Input your surname", ""),
    married: confirm("Are you married?"),
}


8)

do{
    var a = confirm("enter your choice");
}while( a === false);

9)


10)
var random
var result = 0
while(true){
    random = Math.random()
    result++
    if (random > 0.9){
        break;
    }
}
alert(result)

11)

var str = '';
for(var i = 0; i <= 10 ; i++){
    if(i%2 === 0) {
        str += '# ';
    }
}
console.log(str);
