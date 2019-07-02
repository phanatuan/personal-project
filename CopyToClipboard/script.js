

function copyToClipboard() { 
	var str = document.getElementById('text').value;
	const el = document.createElement('textarea');
	el.value = str; 
	el.setAttribute('readonly','');
	el.style.poisition = 'absolute';
	el.style.left = '-99999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);		
}