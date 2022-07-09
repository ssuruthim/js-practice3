var v= 153;
let aemp = v;
var lastdigit;
var sumofnumbers=0;

while(aemp>0)
{
    lastdigit=aemp%10;
    aemp=aemp-lastdigit;
    aemp=aemp/10;
    sumofnumbers=sumofnumbers+lastdigit;
    
}
console.log("sumofnumbers:", sumofnumbers);