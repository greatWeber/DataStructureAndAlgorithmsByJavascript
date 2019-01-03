'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 模拟链表
* @Author: greatWeber
* @Date:   2019-01-03 10:36:52
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-03 11:40:35
*/

var Node = function Node(elm) {
	_classCallCheck(this, Node);

	this.element = elm;
	this.next = null;
};

var LinkedList = function () {
	function LinkedList() {
		_classCallCheck(this, LinkedList);

		this.length = 0;
		this.head = null;
	}

	_createClass(LinkedList, [{
		key: 'append',
		value: function append(elm) {
			// 添加
			var node = new Node(elm);
			var current = void 0;

			if (this.head === null) {
				//列表中的第一个元素
				this.head = node;
			} else {
				// 循环找到最后一个元素
				current = this.head;
				while (current.next) {
					current = current.next;
				}

				current.next = node;
			}
			this.length++;
		}
	}, {
		key: 'insert',
		value: function insert(position, elm) {
			// 插入元素
			if (position > -1 && position <= this.length) {
				//边界判断
				var node = new Node(elm);
				var previous = void 0,
				    current = this.head,
				    index = 0;
				if (position == 0) {
					//第一个元素
					node.next = current;
					this.head = node;
					this.length++;
				} else if (position == this.length) {
					this.append(elm);
				} else {
					while (index++ < position) {
						previous = current;
						console.log(current);
						current = current.next;
					}
					node.next = current;
					previous.next = node;
					this.length++;
				}

				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'removeAt',
		value: function removeAt(position) {
			// 根据索引移除元素
			if (position > -1 && position <= this.length) {
				var current = this.head;
				var previous = void 0,
				    index = 0;
				if (position == 0) {
					this.head = current.next;
				} else {
					while (index++ < position) {
						previous = current;
						current = current.next;
					}
					previous.next = current.next;
				}
				this.length--;
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'indexOf',
		value: function indexOf(elm) {
			// 返回查找元素的位置
			var current = this.head;
			var index = 0;
			while (current) {
				if (elm === current.element) {
					return index;
				}
				index++;
				current = current.next;
			}

			return -1;
		}
	}, {
		key: 'remove',
		value: function remove(elm) {
			// 移除某元素
			var index = this.indexOf(elm);
			return this.removeAt(index);
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty() {
			return this.length === 0;
		}
	}, {
		key: 'size',
		value: function size() {
			return this.length;
		}
	}, {
		key: 'getHead',
		value: function getHead() {
			return this.head;
		}
	}, {
		key: 'toString',
		value: function toString() {
			// 打印
			var current = this.head;
			var string = '';
			while (current) {
				string += current.element + '-->';
				current = current.next;
			}
			return string;
		}
	}]);

	return LinkedList;
}();