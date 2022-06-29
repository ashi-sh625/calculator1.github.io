var buttons= document.getElementsByClassName("button");
var display= document.getElementsByClassName("display")[0];
var operand1=0;
var operand2=0;
var operator=0;
var str;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=='+'){
            operator='+';
            operand1=parseFloat(display.textContent);
            display.innerHTML="+"
        }
        else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerHTML="-"
        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerHTML="*"
        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerHTML="/"
        }
        else if(value=="="){
            str=display.textContent;
            str = str.substring(1);
            operand2=parseFloat(str);
            if(operator=="+")
                display.innerHTML=operand1+operand2;
            else if(operator=="-") 
                display.innerHTML=operand1-operand2;
            else if(operator=="*") 
                display.innerHTML=operand1*operand2;
            else if(operator=="/")    
                display.innerHTML=operand1/operand2;
        }
        else if(value=="AC"){
            display.innerHTML=""
        }
        else{
            display.innerHTML+=value;
        }
    })
}