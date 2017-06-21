//Skrypt: Instukcje warunkowe w praktyce
var a = prompt('Wartość a :'),
	b = prompt('Wartość b :'),
	value = ((a*a)+(2*a*b)-(b*b));
		console.log('Wynik działania: (a*a)+(2*a*b)-(b*b)');

	if (value < 0) {
		console.log('Wartość zmiennej value jest mniejsza od 0 i wynosi:',value);
	}

	else if (value > 0) {
		console.log('Wartość zmiennej value jest większa od 0 i wynosi: ',value);
	}

	else if (value == 0) {
		console.log('Wartość zmiennej value wynosi 0');
	}