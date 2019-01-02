"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 模拟队列
* @Author: greatWeber
* @Date:   2019-01-02 10:46:12
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-02 11:20:54
*/

var Queue = function () {
	function Queue() {
		_classCallCheck(this, Queue);

		this.data = [];
	}

	_createClass(Queue, [{
		key: "enqueue",
		value: function enqueue(val) {
			// 入队
			this.data.push(val);
		}
	}, {
		key: "dequeue",
		value: function dequeue() {
			// 出列
			this.data.shift();
		}
	}, {
		key: "front",
		value: function front() {
			// 队列顶部
			return this.data[0];
		}
	}, {
		key: "isEmpty",
		value: function isEmpty() {
			return this.data.length === 0;
		}
	}, {
		key: "clear",
		value: function clear() {
			this.data = [];
		}
	}, {
		key: "size",
		value: function size() {
			return this.data.length;
		}
	}, {
		key: "print",
		value: function print() {
			// 打印队列
			return this.data.toString();
			console.log(this.data.toString());
		}
	}]);

	return Queue;
}();