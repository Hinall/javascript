var a=[];
var n=0
function fizzbuzz()
    {    n=n+1;
       console.log(n)
       if(n%3===0 && n%5===0)
       {
          a.push("fizzbuzz"); 
       }
     else if(n%5===0)
     {
        a.push("buzz");
     }
     else if(n%3===0)
     {
         a.push("fizz");
     }
     else
     {
          a.push(n)    
     }
         
        console.log(a);
    }
