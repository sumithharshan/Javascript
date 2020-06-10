/*
Sri Lanka vehicle number validation using javascript regular expressions
Sumith Harshan
*/

function is_vehicle_num_valid(vehicle_number) {
     var regex = /^([A-Z]{2,3}|((?!0*-)[0-9]{1,3}))-[0-9]{4}(?!0{4})$/;
	 let res = regex.test(vehicle_number);
	 return res;
}

is_vehicle_num_valid('CBK-1234');

/*

Valid for:
1-1234
12-4567
123-4567

BA-1234
CBA-1234


*/
