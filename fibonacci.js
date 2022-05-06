function fibonacci() {
    var limit = 100;
	var fibo = [0,1];
    document.write("<br/> <br/> fibonacci <br/> ");

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		document.write(fibo[i]+"<br/>");	
	}}
fibonacci();