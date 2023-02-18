const calc = () => {
	const a = Number(prompt('I need a number!'))
	const operation = prompt(
		'Now lets choose what kind of calculation you want to do? (+ - add, - - subtract, * - multiply, / - divide, % - modulo (rest after divide))'
	)
	const b = Number(prompt('Now i need second number'))
	// Mathematic operations
	if (operation === '+') {
		return alert(a + b)
	} else if (operation === '-') {
		return alert(a - b)
	} else if (operation === '/' && a !== 0 && b !== 0) {
		return alert(a / b)
	} else if (operation === '*') {
		return alert(a * b)
	} else if (operation === '%') {
		return alert(a % b)
	} else {
		return alert('Are you shure you typed everything properly?')
	}
}
calc()
