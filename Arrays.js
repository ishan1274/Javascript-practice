let marks = [88, 88 , 99];
console.log(marks);
console.log(marks.length);
// in js , a single array can have string , no. and characters , but it is bad practice .
// console.log(marks.length); to get size of the array .
//properties and methods differnece ?
// in js arrays are a type of Object only , but we seperately treat arrays , it has key value pairs but we use the index for refrences .
// in js , arrays are mutable - values can be updated . 
// but string in js are immutable - values cannot be changed .

//looping over an arrays
//iterables are those items upon which loop can be applied - (strings, objects, arrays) are iterables .
// for(let ind=0; ind<marks.length; ind++)
// {
//     console.log(marks[ind]); // for-loop
// }

//for-of loops
for(let mark of marks)
{
    console.log(mark);
}