function fibonacci(num) {
	let a=0;
	let b=1;

	let it=0;
	while(it<num-2){
		let ans=a+ b;
		a=b;
		b=ans;
		it++;
	}
	return b;
}

module.exports = fibonacci;
