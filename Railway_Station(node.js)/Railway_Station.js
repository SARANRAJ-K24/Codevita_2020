
let trains = 3;
const arrival = [5, 10, 13];
const despatched= [15, 12, 13];

function sort_array(array) {
	var done = false;
	while (!done) {
		done = true;
		for (var index = 1; index < array.length; index += 1) {
			if (array[index-1] > array[index]){
				var temp = array[index-1];
				array[index-1] = array[index];
				array[index] = temp;
			}
		}	
	}
	return array;	
}
sort_array(arrival);
sort_array(despatched);
console.log(arrival);
console.log(despatched);



var platform = 0
for (let index = 1; index < arrival.length; index++) {
	for (let index_1 = 0; index_1 < despatched.length; index_1++) {
		
		
	
	if (arrival[index]  <=  despatched[index]) {
		platform++;
		index++;
	}
	if (arrival[index] > despatched[index]){
		platform--;
		index_1++;

	}
}
}
console.log(platform)
