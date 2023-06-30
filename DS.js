
// Problem1
// list out the sets
// declare the sets.
// convert the sets into array using the array.from method
// confirm the array and remove filter the distinct number using .splice method
// concatinate the array using array.concat method
// create a function that helps you add 4 numbers 
// console.log the 4 integers to see the result.


    
        let set1 = new Set([3,2,4,7,6,9]);
        let set2 = new Set([9,8,7,1,4,6]);
    
    let Arr1 = Array.from (set1);
    let Arr2 = Array.from (set2);
    
    console.log (Arr2);

      Arr1.splice (0,6,3,2);
      Arr2.splice (0,6,8,1);
    
            
    console.log (Arr1);

    console.log (Arr2);

     totalArr = Arr1.concat(Arr2)
    console.log (totalArr);

    totalArr

    function Sumoo(first,second,third,fourth) {
        
        let sum = first + second + third + fourth

        return sum;
    }
    
    
console.log (Sumoo(3,2,8,1));

//problem 2

// Open a file and name the procedure Dot product
// declare the variables in an array called vector
// calculate the product of the variables 