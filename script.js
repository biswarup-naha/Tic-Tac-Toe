function play(){
    var b1=document.getElementById('b1').value;
    var b2=document.getElementById('b2').value;
    var b3=document.getElementById('b3').value;
    var b4=document.getElementById('b4').value;
    var b5=document.getElementById('b5').value;
    var b6=document.getElementById('b6').value;
    var b7=document.getElementById('b7').value;
    var b8=document.getElementById('b8').value;
    var b9=document.getElementById('b9').value;

    var btn_b1=document.getElementById('b1');
    var btn_b2=document.getElementById('b2');
    var btn_b3=document.getElementById('b3');
    var btn_b4=document.getElementById('b4');
    var btn_b5=document.getElementById('b5');
    var btn_b6=document.getElementById('b6');
    var btn_b7=document.getElementById('b7');
    var btn_b8=document.getElementById('b8');
    var btn_b9=document.getElementById('b9');

    if((b1=='x' || b1=='X')&&(b2=='x' || b2=='X')&&(b3=='x' || b3=='X')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b4.disabled=true;
        btn_b5.disabled=true;
        btn_b6.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b9.disabled=true;

        btn_b1.style.color='pink'
        btn_b2.style.color='pink'
        btn_b3.style.color='pink'
    }

    else if((b1=='x' || b1=='X')&&(b4=='x' || b4=='X')&&(b7=='x' || b7=='X')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b2.disabled=true;
        btn_b5.disabled=true;
        btn_b6.disabled=true;
        btn_b3.disabled=true;
        btn_b8.disabled=true;
        btn_b9.disabled=true;

        btn_b1.style.color='pink'
        btn_b4.style.color='pink'
        btn_b7.style.color='pink'
    }

    else if((b1=='x' || b1=='X')&&(b5=='x' || b5=='X')&&(b9=='x' || b9=='X')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b4.disabled=true;
        btn_b2.disabled=true;
        btn_b6.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b3.disabled=true;

        btn_b1.style.color='pink'
        btn_b5.style.color='pink'
        btn_b9.style.color='pink'
    }

    else if((b4=='x' || b4=='X')&&(b5=='x' || b5=='X')&&(b6=='x' || b6=='X')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b1.disabled=true;
        btn_b2.disabled=true;
        btn_b3.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b9.disabled=true;

        btn_b4.style.color='pink'
        btn_b5.style.color='pink'
        btn_b6.style.color='pink'
    }

    else if((b7=='x' || b7=='X')&&(b8=='x' || b8=='X')&&(b9=='0' || b9=='0')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b4.disabled=true;
        btn_b5.disabled=true;
        btn_b1.disabled=true;
        btn_b2.disabled=true;
        btn_b3.disabled=true;
        btn_b6.disabled=true;

        btn_b9.style.color='pink'
        btn_b7.style.color='pink'
        btn_b8.style.color='pink'
    }

    else if((b5=='x' || b5=='X')&&(b2=='x' || b2=='X')&&(b8=='x' || b8=='X')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b1.disabled=true;
        btn_b4.disabled=true;
        btn_b6.disabled=true;
        btn_b7.disabled=true;
        btn_b3.disabled=true;
        btn_b9.disabled=true;

        btn_b5.style.color='pink'
        btn_b2.style.color='pink'
        btn_b8.style.color='pink'
    }

    else if((b6=='x' || b6=='X')&&(b9=='x' || b9=='X')&&(b3=='x' || b3=='X')){
        document.getElementById('result').innerHTML="Player X won";
        btn_b4.disabled=true;
        btn_b1.disabled=true;
        btn_b5.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b2.disabled=true;

        btn_b6.style.color='pink'
        btn_b9.style.color='pink'
        btn_b3.style.color='pink'
    }
    else if((b1=='0' || b1=='0')&&(b2=='0' || b2=='0')&&(b3=='0' || b3=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b4.disabled=true;
        btn_b5.disabled=true;
        btn_b6.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b9.disabled=true;

        btn_b1.style.color='pink'
        btn_b2.style.color='pink'
        btn_b3.style.color='pink'
    }

    else if((b1=='0' || b1=='0')&&(b4=='0' || b4=='0')&&(b7=='0' || b7=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b2.disabled=true;
        btn_b5.disabled=true;
        btn_b6.disabled=true;
        btn_b3.disabled=true;
        btn_b8.disabled=true;
        btn_b9.disabled=true;

        btn_b1.style.color='pink'
        btn_b4.style.color='pink'
        btn_b7.style.color='pink'
    }

    else if((b1=='0' || b1=='0')&&(b5=='0' || b5=='0')&&(b9=='0' || b9=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b4.disabled=true;
        btn_b2.disabled=true;
        btn_b6.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b3.disabled=true;

        btn_b1.style.color='pink'
        btn_b5.style.color='pink'
        btn_b9.style.color='pink'
    }

    else if((b4=='0' || b4=='0')&&(b5=='0' || b5=='0')&&(b6=='0' || b6=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b1.disabled=true;
        btn_b2.disabled=true;
        btn_b3.disabled=true;
        btn_b7.disabled=true;
        btn_b8.disabled=true;
        btn_b9.disabled=true;

        btn_b4.style.color='pink'
        btn_b5.style.color='pink'
        btn_b6.style.color='pink'
    }

    else if((b9=='0' || b9=='0')&&(b7=='0' || b7=='0')&&(b8=='0' || b8=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b4.disabled=true;
        btn_b5.disabled=true;
        btn_b1.disabled=true;
        btn_b2.disabled=true;
        btn_b3.disabled=true;
        btn_b6.disabled=true;

        btn_b9.style.color='pink'
        btn_b7.style.color='pink'
        btn_b8.style.color='pink'
    }

    else if((b2=='0' || b2=='0')&&(b5=='0' || b5=='0')&&(b8=='0' || b8=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b1.disabled=true;
        btn_b4.disabled=true;
        btn_b6.disabled=true;
        btn_b7.disabled=true;
        btn_b3.disabled=true;
        btn_b9.disabled=true;

        btn_b5.style.color='pink'
        btn_b2.style.color='pink'
        btn_b8.style.color='pink'
    }

    else if((b3=='0' || b3=='0')&&(b5=='0' || b5=='0')&&(b7=='0' || b7=='0')){
        document.getElementById('result').innerHTML="Player 0 won";
        btn_b4.disabled=true;
        btn_b1.disabled=true;
        btn_b6.disabled=true;
        btn_b9.disabled=true;
        btn_b8.disabled=true;
        btn_b2.disabled=true;

        btn_b5.style.color='pink'
        btn_b7.style.color='pink'
        btn_b3.style.color='pink'
    }
    
    //draw condition:-
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
            b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
            b8 == '0') && (b9 == 'X' || b9 == '0')) { 
        document.getElementById('result') 
            .innerHTML = "Match Tie";
        }
        else{
                if((flag==1)){
                    document.getElementById('result').innerHTML="Player X turn";
                }
                else{
                    document.getElementById("result").innerHTML="Player O Turn";
                }
            }
}

//checking turn of player and putting X or 0 accordingly 

flag=1;

function func1(){
    if(flag==1){
        document.getElementById('b1').value="X";
        document.getElementById('b1').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b1').value="0";
        document.getElementById('b1').disabled=true;
        flag=1;
    }
}

function func2(){
    if(flag==1){
        document.getElementById('b2').value="X";
        document.getElementById('b2').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b2').value="0";
        document.getElementById('b2').disabled=true;
        flag=1;
    }
}

function func3(){
    if(flag==1){
        document.getElementById('b3').value="X";
        document.getElementById('b13').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b3').value="0";
        document.getElementById('b3').disabled=true;
        flag=1;
    }
}

function func4(){
    if(flag==1){
        document.getElementById('b4').value="X";
        document.getElementById('b4').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b4').value="0";
        document.getElementById('b4').disabled=true;
        flag=1;
    }
}

function func5(){
    if(flag==1){
        document.getElementById('b5').value="X";
        document.getElementById('b5').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b5').value="0";
        document.getElementById('b5').disabled=true;
        flag=1;
    }
}

function func6(){
    if(flag==1){
        document.getElementById('b6').value="X";
        document.getElementById('b6').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b6').value="0";
        document.getElementById('b6').disabled=true;
        flag=1;
    }
}

function func7(){
    if(flag==1){
        document.getElementById('b7').value="X";
        document.getElementById('b7').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b7').value="0";
        document.getElementById('b7').disabled=true;
        flag=1;
    }
}

function func8(){
    if(flag==1){
        document.getElementById('b8').value="X";
        document.getElementById('b8').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b8').value="0";
        document.getElementById('b8').disabled=true;
        flag=1;
    }
}

function func9(){
    if(flag==1){
        document.getElementById('b9').value="X";
        document.getElementById('b9').disabled=true;
        flag=0;
    }
    else{
        document.getElementById('b9').value="0";
        document.getElementById('b9').disabled=true;
        flag=1;
    }
}

function reset(){
    b1=b2=b3=b4=b5=b6=b7=b8=b9='';
    location.reload();
}

