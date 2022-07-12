var ams =parseInt(prompt("enter amstrong no "));
numberofdigits = ams.toString().length;
d=0;

let t = ams;
while (t>0)
{
    r= t%10;
    t = parseInt(t/10);
    d += r**numberofdigits;
}
if(d===ams)
console.log("given number is amstrong number");
else
console.log("given number is not an amstrong number");