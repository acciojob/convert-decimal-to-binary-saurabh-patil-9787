function decimalToBinary(num) {
  // your code here
	if(num ==0){
		return 0+'';
	}else{
	
	let result = (num+""+num)
	return result 
	}
	
}
const num = parseInt(prompt("Enter a number."));

alert(decimalToBinary(num));
