'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*模拟栈
* @Author: greatWeber
* @Date:   2018-12-29 09:59:53
* @Last Modified by:   MM
* @Last Modified time: 2018-12-29 13:53:09
*/
var Stack = function () {
	function Stack() {
		_classCallCheck(this, Stack);

		this.data = [];
	}

	_createClass(Stack, [{
		key: 'push',
		value: function push(val) {
			// 添加数据
			this.data.push(val);
		}
	}, {
		key: 'pop',
		value: function pop() {
			// 移除数据
			return this.data.pop();
		}
	}, {
		key: 'peek',
		value: function peek() {
			// 返回顶部数据
			return this.data[this.data.length - 1];
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty() {
			// 判断栈是否为空
			return this.data.length === 0;
		}
	}, {
		key: 'size',
		value: function size() {
			// 栈的长度
			console.log(this.data);
			return this.data.length;
		}
	}, {
		key: 'clear',
		value: function clear() {
			// 清空栈
			this.data = [];
		}
	}, {
		key: 'print',
		value: function print() {
			// 打印栈
			console.log(this.data.toString());
			return this.data.toString();
		}
	}]);

	return Stack;
}();

// *******************************
// 实际使用
// *******************************

/**
 * 十进制转换
 * @param  {[type]} input [输入的数据]
 * @param  {[type]} base  [基数]
 * @return {[type]}       [转换后的数据]
 */


var baseConverter = function baseConverter(input, base) {
	var stack = new Stack(),
	    rem = void 0,
	    baseString = '',
	    digits = '0123456789ABCDEF';

	while (input > 0) {
		rem = Math.floor(input % base);
		stack.push(rem);
		input = Math.floor(input / base);
	}

	while (!stack.isEmpty()) {
		baseString += digits[stack.pop()];
	}

	return baseString;
};