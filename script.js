function fibonacci(num) {
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
	}
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
