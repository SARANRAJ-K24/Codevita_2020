var numbers  = [20, 7, 5, 4]
let K = 3;
let N = 4;

Minimize_sum = 0;
for (let j = 0; j < numbers.length; j++) {
    if(j==0 ){
        numbers[j]=numbers[j]/2;
        console.log(numbers);

        numbers[j]=numbers[j]/2;
        console.log(numbers);
        }
    if (j==1) {
        numbers[j]=Math.floor(numbers[j]/2);
        console.log(numbers);  
    }
    Minimize_sum += numbers[j];
   }
    console.log(Minimize_sum);
    

    


    

    
   







 
