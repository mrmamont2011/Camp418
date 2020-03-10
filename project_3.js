
const readlineSync = require('readline-sync');
const fs = require('fs')
let name_files=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
let n=0;
let data;
let str;
let otvet=0;
let variant;
do{
    num = Math.floor(Math.random()*10);
    if (name_files[num]==-1){
        n++;
        name_files[num]=num;
    }
} while(n<5);



for(let i=0; i<10; i++){
  
    if(name_files[i]==i){
        str='';
        
        data = fs.readFileSync(`${name_files[i]}.txt`,'utf8'); 
        str = data.toLowerCase().split('\r\n');
        str[0]=str[0].slice(1)

        console.log("Вопрос:",str[0]);
        for( var j=1; j<str.length-1;j++){
            console.log("Вариант - ",j," - ",str[j+1]);
        }
       
        variant=Number(readlineSync.question('KEY > '));   
         if(variant == Number(str[1])) otvet++;

       
    }
   

}

console.log("Количество правильных ответо ",otvet," из 5");

 
