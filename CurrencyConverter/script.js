var radios = document.getElementsByName('currency');

function getCurrency() {
	for (let i=0; i<radios.length; i++) { 
		if (radios[i].checked) {
			return(radios[i].value);
		}
	}
}

function convert() {
	var rate = 0;
	switch (getCurrency()) { 
		case 'USD':
			rate = 23390;
			break;
		case 'EUR':
			rate = 27000;
			break;
		case'BHT':
			rate = 0.8;
		default:
			alert('We do not support this currency');
	}

	var amountInput = parseInt(document.getElementById('amount').value);
	var amountOutput = amountInput * rate; 
	var message = `Your ${amountInput}${getCurrency()} is worth ${amountOutput} in VND `;
	//Output: 
	document.getElementById('output').innerHTML = message;
	
}