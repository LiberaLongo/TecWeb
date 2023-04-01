var fibonacci = function(n) {
	output=[];
	output.push(0);
	if(n === 1) {		
		return output;
	}
	output.push(1);
	if(n === 2) {
		return output;
	}
	for(var i = 0; i < n-2; i++) {
		output.push(output[i] + output[i+1]);
	}
	return output;
}

function fibonacci_lesson(n) {
	output=[];
	if(n === 1) {		
		output = [0];
	}
	else if(n === 2) {
		output = [0, 1];
	}
	else {
		output = [0, 1];
		for(var i = 2; i < n; i++) {
			let f = output[output.length - 2] + output[output.length - 1];
			output.push(f);
		}
	}
	return output;
}
console.log(fibonacci(10));
console.log(fibonacci_lesson(10));

