
'use strict'

let Score =0;

function Q1(){
var name = prompt("input your name pleas")

alert(" Welcom "+name )


}


function Q2(){
var questionA = prompt("Is my age 22? Y/N")
.toUpperCase(questionA)

if(questionA=='Y'){
    alert("no you are worng")
}
else if(questionA=='N'){
    alert("Yes you are right")
    Score++;
}
}

function Q3(){
var questionB = prompt("Is my passion \"I am so tired but i really want to be so good at this\" Y/N")
.toUpperCase(questionB)
if(questionB=='Y'){
    alert("Yes you are right")
    Score++;
}
else if(questionB=='N'){
    alert("no you are worng")
}
}


function Q4(){
var questionC = prompt("do i live in Jordan Y/N")
.toUpperCase(questionC)

if(questionC == 'Y'){
    alert("Yes you are right")
    Score++;
}
else if(questionC =='N'){
    alert("no you are worng")
}
}

function Q5(){
var questionD = prompt("is fun fact \"I can be very good at something for real but i feel that im not in the mood for big things\" Y/N")
.toUpperCase(questionD)

if(questionD=='Y'){
    alert("Yes you are right")
    Score++;
}
else if(questionD=='N'){
    alert("no you are worng")
}
}

function Q6(){
var questionE = prompt("my secret is \"I dont smoke\" Y/N")
.toUpperCase(questionE)

if(questionE =='Y'){
    alert("no you are worng")
}
else if(questionE =='N'){
    alert("Yes you are right")
    Score++;
}
}


function Q7(){
for(var i=0; i < 4; i++ ){

    var questionF = prompt("pleas enter a number between 1 and 23")
    if(questionF== 21){
        alert("Correct")
        Score++;
        break;
    }
    else if(questionF > 21 && questionF <=23 ){
        alert("too high")
    }
        else if(questionF < 21 && questionF>= 1){
            alert("too low")
        }
        else{
            alert("follow the rules")
        }
}
}

function Q8(){
    let arr=["BMW", "Tesla", "Cyber Dragons", "apple", "juce", "mug","Asus", "Orang internet"]
    alert(arr)
    alert("some of these are cars tell only one of them to win a point")
    var questionG = prompt("type here please")


    var ss=0
    for(i=0 ; i< 6; i++){
        for(j=0 ; j < arr.length-1; j++){

            if(questionG == arr[0] || questionG== arr[1]){
                alert("you are right")
                Score++;
                ss =1;
                break;
            }
            else{
                alert("you are wrong")
                break
            }
        }
        if(ss){
        break
    }
    questionG=prompt("try again")
    }
}

Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();
Q8();

 alert("your score is "+ Score)




