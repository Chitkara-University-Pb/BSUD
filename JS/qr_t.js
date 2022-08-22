var encodeString;
function encrypt() {
	var Basestring = document.getElementById("qr").value;
	encodeString = window.btoa(Basestring);
	document.getElementById("to_dec").value = encodeString;
	generate();

}

var qrcode = new QRCode(document.getElementById('qrResult'), {
	width: 100,
	height: 100
});

function generate() {
	var message = document.getElementById('to_dec');

	if (!message.value) {
		alert("Input a text");
		message.focus();
		return;
	}



	qrcode.makeCode(message.value);

}
