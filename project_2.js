const readlineSync = require('readline-sync');

const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}

let mag = {
    maxHealth: 10,
    name: "Евстафий",   
    moves: [
    {
        "name": "Удар боевым кадилом",
        "physicalDmg": 2,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 50,
        "cooldown": 0
    },
    {
        "name": "Вертушка левой пяткой",
        "physicalDmg": 4,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 4
    },
    {
        "name": "Каноничный фаербол",
        "physicalDmg": 0,
        "magicDmg": 5,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 3
    },
    {
        "name": "Магический блок",
        "physicalDmg": 0,
        "magicDmg": 0,
        "physicArmorPercents": 100,
        "magicArmorPercents": 100,
        "cooldown": 4
    },
]
}
console.log('Введите здоровье Евстафия');
let mag_Health=Number(readlineSync.question(' - '));
let monster_temp = [0,0,0,0,0]; // массив переменных Здоровье,  далее сколько ходов осталось до возможного действия 
let mag_temp = [0,0,0,0,0];   // массив переменных Здоровье,  далее сколько ходов осталось до возможного действия 
monster_temp[0] = monster.maxHealth;
mag_temp[0]=mag_Health;
let num;
let mag_hit;


do {
        console.log('Здоровье Евстафия - ',mag_temp[0], ' Здоровье Лютого - ',monster_temp[0]);
        
        do {
         num = Math.ceil(Math.random()*3);
        
        } while(monster_temp[num]!=0);

        console.log('Монстр Лютый будет использовать - ',monster.moves[num-1].name);
        console.log('Физическое повреждение  - ',monster.moves[num-1].physicalDmg);
        console.log('Магическое повреждение  - ',monster.moves[num-1].magicDmg);
        console.log('Броня физическая в %    - ',monster.moves[num-1].physicArmorPercents);
        console.log('Броня магическая в %    - ',monster.moves[num-1].magicArmorPercents);
        

        for(var i=1;i<5;i++){
            if(mag_temp[i]==0) {
                console.log('Удар готов        KEY - ',i,mag.moves[i-1].name,'физ.дамаг',mag.moves[i-1].physicalDmg,'маг.дамаг',mag.moves[i-1].magicDmg,'физ.броня',mag.moves[i-1].physicArmorPercents,'маг.броня',mag.moves[i-1].magicArmorPercents); 
            }else{
                console.log('Осталось ждать ходов  - ',mag_temp[i],mag.moves[i-1].name,'физ.дамаг',mag.moves[i-1].physicalDmg,'маг.дамаг',mag.moves[i-1].magicDmg,'физ.броня',mag.moves[i-1].physicArmorPercents,'маг.броня',mag.moves[i-1].magicArmorPercents);  
            }
        }
        
        do {
        console.log('Выберите удар Евстафия');
        mag_hit = Number(readlineSync.question('- '));
        }  while (mag_temp[mag_hit]!=0);
        // расчет задержки ходов для использования определенной магии
        for(var i=1;i<5;i++){
            if (mag_temp[i]>0) mag_temp[i]--;
            if (monster_temp[i]>0) monster_temp[i]--;
        }

        monster_temp[num]=monster.moves[num-1].cooldown;
        mag_temp[mag_hit]=mag.moves[mag_hit-1].cooldown;
        // расчет повреждений 
        mag_temp[0]=Math.ceil(mag_temp[0] - monster.moves[num-1].physicalDmg*(100-mag.moves[mag_hit-1].physicArmorPercents)/100 - monster.moves[num-1].magicDmg*(100-mag.moves[mag_hit-1].magicArmorPercents)/100);
        monster_temp[0]=Math.ceil(monster_temp[0] - mag.moves[mag_hit-1].physicalDmg*(100-monster.moves[num-1].physicArmorPercents)/100 - mag.moves[mag_hit-1].magicDmg*(100-monster.moves[num-1].magicArmorPercents)/100);

      

} while (monster_temp[0]>0 && mag_temp[0]>0);

if (monster_temp[0]<=0 && mag_temp[0]<=0) {
    console.log('Монстр Лютый и Маг Евстафий убили друг друга в равном бою (( ');
} if (monster_temp[0]<=0 ) {
    console.log('Маг Евстафий жестоко наказал Монстра Лютого убив его ;))) ');
} else {
    console.log('Монстр Лютый к счастью победил Мага Евстафия p) ');
}





