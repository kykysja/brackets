module.exports = function check(str, bracketsConfig) {

	bracketsObj = {};

	for (i = 0; i < bracketsConfig.length; i++) {

		bracketsObj[`${bracketsConfig[i][0]}`] = bracketsConfig[i][1];
	}

	let stack = [];
	stack.push(str.charAt(0));

	for (i = 1; i < str.length; i++) {

		if (str.charAt(i) === bracketsObj[stack[stack.length - 1]]) {
			stack.pop();

		} else {
			stack.push(str.charAt(i));
		}
	}
	return stack.length > 0 ? false : true;
}
