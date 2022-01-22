// Action list: 'sum', 'sub', 'multi', 'div', 'euclidean div' or '%', 'pow'.

function letsCount(action, a, b) {
	let correctNumbers = (isNumber(a) && isNumber(b))
	let correctAction = isAction(action)

	if (correctNumbers && correctAction) {
		return calc(action, a, b)
	} else if (!correctAction) {
		return `Unknown operation!`
	} else if (!correctNumbers) {
		return `Error!`
	} else {
		return "Oops! :)"
	}
}

function isNumber(number) {
	return number === +number
}
function isAction(action) {
	return (action === 'sum' || action === 'sub' || action === 'multi' || action === 'div' || action === 'euclidean div' || action === '%' || action === 'pow')
}
function calc(action, a, b) {
	switch (action) {
		case 'sum':
			return a + b
		case 'sub':
			return a - b
		case 'multi':
			return a * b
		case 'div':
			return a / b
		case 'euclidean div':
		case '%':
			return a % b
		case 'pow':
			return a ** b
	}
}

console.log(letsCount('euclidean div', 3, 2))



