var numbers  = [20, 7, 5, 4]    //Given Array

Minimize_sum = 0;
for (let j = 0; j < numbers.length; j++) {      //for loop to continue the process untill end of the given array
    if(j==0 ){                                 
        numbers[j]=numbers[j]/2;            //dividing an array (particular position)
        console.log(numbers);

        numbers[j]=numbers[j]/2;           //dividing an array (particular position) 
        console.log(numbers);
        }
    if (j==1) {
        numbers[j]=Math.floor(numbers[j]/2);         //here  using the math.floor for the decimal answer 
        console.log(numbers);                        // The Math.floor() function returns the largest integer less than or equal to a given number.
    }                                                 // eg: (Math.floor(5.95))    answer: 5
    Minimize_sum += numbers[j];
   }
    console.log(Minimize_sum);
    

    


    

    
   







 
