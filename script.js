 function ageInDays(){ 
    var birthYear = prompt("Enter your Birth Year......");
    var ageInDayss = (2021 - birthYear) * 365;
    console.log(ageInDayss);
    var h1 = document.createElement('h1');
    var TextAnswer = document.createTextNode('You are '+ageInDayss+' days old!');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(TextAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
 }

 function reset(){
    document.getElementById('ageInDays').remove();
 }