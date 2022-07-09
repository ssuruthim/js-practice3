var v= 153;
let temp = v;
var lastdigit;
var reversenumber=0;

while(temp>0)
{
    lastdigit=temp%10;
    temp=temp-lastdigit;
    temp=temp/10;
    reversenumber=reversenumber*10+lastdigit;
    
}
console.log("reverse number:",reversenumber);