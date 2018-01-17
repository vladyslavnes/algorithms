// Algorithms

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false
    return num > 1
}

const factorial = (num) => {
	let factorial = 1
		for (let i = 1; i < num + 1; i++) {
			factorial *= i
		}
	return factorial
}

// Binet's formula - [phi^n/sqrt(5)]
const fib = num => num >= 0 ? Math.round((((1+Math.sqrt(5))/2)**num)/Math.sqrt(5)) : undefined

const reverse = str => {
	let newString = []
	for (let i = str.length - 1; i >= 0; i--) {
		newString[str.length - i] = str[i]
	}
	return newString.join('')
}

const isPalindrome = str => {
	const monoString = raw => raw.toLowerCase().replace(/\s/g,'')
	return monoString(str) === monoString(reverse(str))
}

const missing = arr => {
	if (arr.length === 0) return undefined
	let missing = (Math.max(...arr) * (Math.max(...arr) + 1) / 2) - arr.reduce((a, b) => a + b)
	return missing === 0 ? undefined : missing
}

const indexOf = (arr, num) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) return i
	}
	return -1
}

const isBalanced = str => {
	let braces = []
	for (let i in str) {
		if (str[i] === '{') braces++
		if (str[i] === '}') braces--
		if (braces === -1) return false
	}

	return ((str.match(/{/g).length === str.match(/}/g).length) && !str.match('{}'))
}

const isSorted = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i+1]) return false
	}
	return true
}

// Tests

const literals = val => {
	if (val === undefined) return 'undefined'
	if (typeof val === 'string') return `'${val}'`
	if (val.slice) return `[${val}]`
	return val
}

const test = (func, val,  expected) => {
	const isEqual = func(val) === expected
	console.log(`${isEqual} | ${func.name}(${literals(val)}) === ${literals(expected)}`)
	return isEqual
}

const testTwo = (func, arr, num,  expected) => {
	const isEqual = func(arr, num) === expected
	console.log(`${isEqual} | ${func.name}(${literals(arr)}, ${num}) === ${expected}`)
	return isEqual
}

test(isPrime, 0, false)
test(isPrime, 1, false)
test(isPrime, 17, true)
test(isPrime, 10000000000000, false)

test(factorial, 0, 1)
test(factorial, 1, 1)
test(factorial, 6, 720)

test(fib, 0, 0)
test(fib, 1, 1)
test(fib, 10, 55)
test(fib, 20, 6765)

test(isPalindrome, '', true)
test(isPalindrome, 'abcdcba', true)
test(isPalindrome, 'abcd', false)
test(isPalindrome, 'A man a plan a canal Panama', true)

test(reverse, '', '')
test(reverse, 'abcdef', 'fedcba')

test(missing, [], undefined)
test(missing, [1, 4, 3], 2)
test(missing, [2, 3, 4], 1)
test(missing, [5, 1, 4, 2], 3)
test(missing, [1, 2, 3, 4], undefined)

test(isBalanced, '}{', false)
test(isBalanced, '{{}', false)
test(isBalanced, '{}{}', false)
test(isBalanced, 'foo { bar { baz } boo }', true)
test(isBalanced, 'foo { bar { baz }', false)
test(isBalanced, 'foo { bar } }', false)

test(isSorted, [], true)
test(isSorted, [-Infinity, -5, 0, 3, 9], true)
test(isSorted, [3, 9, -3, 10], false)

testTwo(indexOf, [1, 2, 3], 1, 0)
testTwo(indexOf, [1, 2, 3], 4, -1)