function insert(num) {
	document.getElementById('result').value += num;
}

function clearScreen() {
	document.getElementById('result').value = "";
}

function backspace() {
	var result = document.getElementById('result').value.slice(0, -1);
	document.getElementById('result').value = result;
}

function calculate() {
	var result = document.getElementById('result').value;
	document.getElementById('result').value = eval(result);
}

