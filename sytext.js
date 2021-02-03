// 1.	צרו פונקציה שמקבלת מספרים מהמשתמש, עד שהמשתמש מכניס 0, הדפיסו למסך את המספר הגדול ביותר ואת המספר הקטן ביותר.


function Maximum_and_minimum_number_user(num){

var num = 0;
var max = 0;
var min = 0;
for (var i = 0 ; i < Infinity ; i++){
    num = +prompt('enter a number')
    if ( num > max){
        max = num 
    }
 
    if (num <= 0){
        min = num
        break
    }
}
document.write(` the max number is :${max} ` );
document.writeln(' <br/>')
document.write(`the min number is :${min}`);
}
Maximum_and_minimum_number_user(+prompt('enter a number'));


// 2.	צרו פונקציה שמקבלת 10 מספרים מהמשתמש, המספרים נכנסים למערך שמודפס למסך, הפונקציה מחזירה בסוף מערך של מספרים זוגיים בלבד.

function NumberFormUser(num){
        var UserArray = [];
         var double = [];
    
        for ( i= 0 ; i<10; i++){
            num = +prompt('enter a number bethune 0-9');
            UserArray.push(num);
    
            if ( num % 2 == 0){
                double.push(num);
            }     
        }
    
        console.log(UserArray); 
        console.log(double);
}

NumberFormUser();




// 3.	צרו פונקציה שמקבלת מספר מהמשתמש, הפונקציה יוצרת למערך של 100 מספרים רנדומליים ובודקת האם המספר קיים במערך, במידה וכן יש להדפיס למסך הודעת הצלחה והודעת כישלון במידה ולא. יש להדפיס הודעה מתאימה אם המספר דל המשתמש חורג ממגודל המותר.


function RandomNumbeUrser(x){
     var random_number_array = [];
     x =+prompt('enter a number bethune 0-100')
    for ( i= 0 ; i<100; i++){
        random_number_array.push(Math.floor(Math.random()*100));
        if ( x == random_number_array[i] && x <= 100){
            document.write('<br/>')
            document.write(`Well done the number ${x} appears in the array `);
        }
        else if(x != random_number_array[i] && x <= 100){
            document.write('<br/>')
            document.write(`The number ${x},  does not appear in the array `);
            
        } 
        else if(x > 100){
            document.write('The number you selected is greater than 100');
            break
        } 
        else{
            document.write(`It is not a number`)
            break

        }  
    }

    console.log(random_number_array); 
    
}
RandomNumbeUrser()



// 4.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, הפונקציה מקבלת מבחוץ מערך של אותיות באותיות באנגלית, ובודקת באיזה אות מתחיל השם של המשתמש, במידה והשם מתחיל ב A הדפיסו "NICE"   ובמידה השם מתחיל ב Z הדפיסו "GOOD".


function NameUsed(name){

    name = prompt('enter your name');
    var NameArray = ['abcdefghijklmnoqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];

        for (i = 0; i < NameArray.length ; i++ ){
            NameArray 
            document.write(`yor name is :${name}`);
            document.write('<br/>');
        
            for ( j = 0; j< name[i].length ; j++){
                 if ( name[i][j] === NameArray[i][j] || name[0] === 'A'){
                 document.write('NICE');
        
                }    
        
               if( name[i][j] === 'z' || name[i][j] === 'Z' ){
                  document.write('GOOD');
        
                }  
        
                else if (name === Number.name){
                    document.write('It is not a name');
                }
          }
        
        }
}

NameUsed()



// 5.	שאלת ראיון: כתבו פונקציה שבתוכה נמצאת  לולאה שמבצעת עד 100 איטרציות, תוך כדי שהיא מדפיסה "fizz" במכפלה של 3, "buzz" במכפלות של 5, ו-"fizzbuzz" במכפלות של 3 ו-5.




function FizzBazz(a){

    for(i = 1 ; i <=100;i++){


        if( i % 3 === 0 && i % 5 === 0){
           
            console.log(`fizzbazz ${i}`);
        }

        else if( i % 3 === 0 ){
            
            console.log(`fizz ${i}`);
        }

        else if( i % 5 === 0){
            
            console.log(`buzz ${i}`);
        }
        else {
            console.log(` ${i}`);
        }
    }
   
}

FizzBazz()

