'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*模拟双向链表
* @Author: greatWeber
* @Date:   2019-01-04 09:32:27
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-04 10:44:00
*/

var Node = function Node(elm) {
	_classCallCheck(this, Node);

	this.element = elm;
	this.prev = null;
	this.next = null;
};

var DoublyLinkedList = function () {
	function DoublyLinkedList() {
		_classCallCheck(this, DoublyLinkedList);

		this.length = 0;
		this.head = null;
		this.tail = null; //指向最后一个元素
	}

	_createClass(DoublyLinkedList, [{
		key: 'append',
		value: function append(elm) {
			// 添加
			var node = new Node(elm);
			var current = this.head;
			if (this.length == 0) {
				this.head = node;
				this.tail = node;
			} else {
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			}
			this.length++;
		}
	}, {
		key: 'insert',
		value: function insert(position, elm) {
			var node = new Node(elm);
			if (position > -1 && position <= this.length) {
				var current = this.head;
				var previous = void 0;
				var index = 0;
				if (position == 0) {
					if (!this.head) {
						//新增
						this.head = node;
						this.tail = node;
					} else {
						current.prev = node;
						node.next = current;
						this.head = node;
					}
					this.length++;
				} else if (position == this.length) {
					this.append(elm);
				} else {
					while (index++ < position) {
						previous = current;
						current = current.next;
					}
					previous.next = node;
					node.prev = previous;

					node.next = current;
					current.prev = node;
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
			if (this.length == 0) return false;
			if (position > -1 && position <= this.length) {
				var current = void 0;
				if (position == 0) {
					if (this.length == 1) {
						this.tail = null;
						this.head = null;
					} else {
						current = this.head.next;
						current.prev = null;
						this.head = current;
					}
				} else if (position == this.length) {
					current = this.tail.prev;
					current.next = null;
					this.tail = current;
				} else {
					var index = 0;
					var previous = void 0;
					current = this.head;
					while (index++ < position) {
						previous = current;
						current = current.next;
					}
					previous.next = current.next;
					current.next.prev = previous;
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
			var current = this.head,
			    index = 0;
			while (current) {
				if (elm === current.element) {
					return index;
				}
				index++;
				current = current.next;
			}
		}
	}, {
		key: 'remove',
		value: function remove(elm) {
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
		key: 'getTail',
		value: function getTail() {
			return this.tail;
		}
	}, {
		key: 'toString',
		value: function toString() {
			var string = '';
			var current = this.head;
			while (current) {
				string += current.element + '-->';
				current = current.next;
			}
			return string;
		}
	}]);

	return DoublyLinkedList;
}();