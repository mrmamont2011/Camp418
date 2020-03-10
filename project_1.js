const readlineSync = require('readline-sync');
const num_comp = Math.ceil(Math.random()*999899)+100; // генератор случайных чисел
//const num_comp = 56478; //тестовые числа
console.log("Загаднанное число для проверки - ", num_comp);
let i=0;
let num_user_arr=[];
let num_comp_arr=String(num_comp).toLowerCase().split('');
let sum_mesto=[0,0,0,0,0,0];
let sum_sovpali=[0,0,0,0,0,0,0,0,0,0];
let mesto='';
let sovpali='';
let a=0;
let b=0;




do {
i++;
console.log("Попытка - ",i);
num_user_arr = String(readlineSync.question('Enter number ')).toLowerCase().split('');

sum_mesto=[0,0,0,0,0,0];
sum_sovpali=[0,0,0,0,0,0,0,0,0,0];
let mesto='';
let sovpali='';
a=0;
b=0;

if (num_comp_arr.length==num_user_arr.length){
    
    
                for(var j=0; j<num_user_arr.length; j++) {
                    if(num_comp_arr[j]==num_user_arr[j]){
                        sum_mesto[j]=1;
                        num_comp_arr[j]="*";
                        num_user_arr[j]=".";
                    
                    }else{
                        sum_mesto[j]=0;
                    
                    }
                        
                }
    
                for (var z=0; z<num_user_arr.length; z++){
                    for(var j=0; j<num_user_arr.length; j++){
                        if(num_user_arr[j]==num_comp_arr[z]){
                            sum_sovpali[ Number(num_comp_arr[z]) ]++;
                            num_comp_arr[z]="*";
                            num_user_arr[j]=".";
                            break;
                        
                        }



                    
                    }
                }
 //                               console.log("комп число",num_comp_arr);
 //                               console.log("обработанное число",num_user_arr);
 //                               console.log("на своих местах",sum_mesto);
 //                              console.log("cовпадений",sum_sovpali);
                                num_comp_arr=String(num_comp).toLowerCase().split('');   
                        for(j=0;j<10; j++){
                            if (sum_sovpali[j]!=0){
                                sovpali+=String(j)+" и ";
                                a+=sum_sovpali[j];
                            }

                        }

                        for(j=0;j<num_user_arr.length; j++){
                            if (sum_mesto[j]!=0){
                                mesto+=num_comp_arr[j]+" и ";
                                b++;
                            }
                        }
                        if(sovpali[sovpali.length-2]=='и') sovpali=sovpali.slice(0,sovpali.length-3);
                        if(mesto[mesto.length-2]=='и') mesto=mesto.slice(0,mesto.length-3);

    


    console.log("совпавших цифр не на своих местах - ",a,"(",sovpali,"), цифр на своих местах - ",b,"(",mesto,")" );
    



    } else {
        console.log("Неугадали количество цифр )))))"); 
    }
   
 

} while (b != num_comp_arr.length);

console.log("Победа вы угадали с ",i," попытки число - ", num_comp);