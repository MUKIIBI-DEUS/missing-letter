//-------- PICKING DOM ELEMENTS
let gameWord=document.querySelectorAll('.game');
let next=document.getElementById('nextB');
gameWord[1].value="PRESS NEXT";
//-------Declaring Global Variables
let arrayLetters;
let randomWord;
let inputN=[0,1,2,];
let inputRan=inputN[Math.floor(Math.random()*inputN.length)];
console.log("----input rand--------"+inputRan);
let wordArray;
let userInput;
let score=0;
let count=0;
//LAYED FUNCTION----------------
function generator(){
    arrayLetters=["cup","sun","art","man","hat","hut","sun","pot","can","dan","cat","pen"];
    randomWord=arrayLetters[Math.floor(Math.random()*arrayLetters.length)];
    wordArray=randomWord.split("");
    console.log(wordArray);

}


//looping through and assigning values to inner html and value;
let nextQ=function(){
    count=0;
  gameWord[1].value="";
  gameWord[1].focus();
    // gameWord[1].value="";
    generator();
   

   
    
    for(let i=0;i<=wordArray.length-1;i++){
       
        for(let j=0;j<=gameWord.length-0;j++){
            if(i==0&&j==0){
    gameWord[j].innerHTML=wordArray[i];
            }
            //******************here is were rectifyinh is required
            else if(i==1&&j==1){
                
                gameWord[j].addEventListener('keyup',()=>{
                 
                 
                    if( gameWord[j].value==wordArray[i]){
                        count++
                        if(count<=1){
                            score++
                            console.log("score is :"+score);
                            console.log(count);
                            
                     console.log("correct");
                        }
     
                    }
                    else{
                     console.log("wrong");
                    }
             
                })
                    //testing values and answer
                    console.log(userInput);
                
            }
            else if(i==2&&j==2){
                gameWord[j].innerHTML=wordArray[i];
    
            }
            else if(i==2&&j==2){
                gameWord[j].innerHTML=wordArray[i];
            }
            else if(i==2&&j==2){
                gameWord[j].innerHTML=wordArray[i];
            }
            else if(i==3&&j==3){
                gameWord[j].innerHTML=wordArray[i];
            }
            else if(i==4&&j==4){
                gameWord[j].innerHTML=wordArray[i];
            }
            else if(i==5&&j==5){
                gameWord[j].innerHTML=wordArray[i];
            }
            // console.log(i,j);
        
        
            
        }
         
            
        
    
    }   
}
next.addEventListener('click',()=>{
   nextQ();


    

 
})



