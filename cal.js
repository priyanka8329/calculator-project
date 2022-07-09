let cal = document.getElementById('cal');
buttons = document.querySelectorAll('button');

let calValue ='';

for(item of buttons){
    item.addEventListener('click',(e) =>{
        btnTxt = e.target.innerText;
        if(btnTxt == 'X'){
            btnTxt = '*';
            calValue += btnTxt;
            cal.value = calValue;


        }

        else if(btnTxt == 'C'){
            calValue = '';
            cal.value = calValue;


        }

        else if(btnTxt == '='){
            cal.value = eval(calValue);
        }       

        else{
            calValue += btnTxt;
            cal.value = calValue;

        }
    })
}