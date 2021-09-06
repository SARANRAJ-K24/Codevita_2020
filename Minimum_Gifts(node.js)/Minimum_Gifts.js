const emp = 5;
const rank = "1 2 1 5 2";


let rank_array = rank.split(" ");
let total_gifts = 0;

console.log(rank_array);

for (let index = 0; index < emp; index++) {

    if (index != emp - 1){

    

    if (parseInt(rank_array[index]) >= parseInt (rank_array[index + 1]))
    {
        total_gifts += parseInt(rank_array[index + 1]) +1;
        console.log( + total_gifts);

        if (index != emp - 3){
            total_gifts += parseInt(rank_array[index + 1]) - 2;
        }

    }

    else{
        total_gifts += parseInt (rank_array[index]);
        console.log( + total_gifts);


    }
}
else
    total_gifts += 1
    
}
console.log(total_gifts);
