var str = "naitik";
var rev_str ="";
//console.log(str.length);
const actual_length = str.length;
for (i = actual_length-1; i >= 0; i--)
{
   rev_str += str[i];
}
console.log( "Reverse of a string is : "+rev_str);