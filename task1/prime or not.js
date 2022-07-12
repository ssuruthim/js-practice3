
var i=prompt("enter a number:")

if(i==2||i==3||i==5||i==7){
    console.log("is a prime:",+i)
}

   else if((i%2!==0)&&(i%3!==0)&&(i%5!==0)&&(i%7!==0))
   {
    console.log("is a prime number:",+i)
   }
   else  
   {
    console.log( "is  not a prime number:",+i)
   }

