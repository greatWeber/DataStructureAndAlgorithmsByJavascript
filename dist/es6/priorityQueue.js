"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 优化队列
* @Author: greatWeber
* @Date:   2019-01-02 11:22:05
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-02 11:49:43
*/

var QueueElement = function QueueElement(elm, priority) {
	_classCallCheck(this, QueueElement);

	this.element = elm;
	this.priority = priority;
};

var PriorityQueue = function () {
	function PriorityQueue() {
		_classCallCheck(this, PriorityQueue);

		this.data = [];
	}

	_createClass(PriorityQueue, [{
		key: "enqueue",
		value: function enqueue(elm, priority) {
			// 入队
			var queueElement = new QueueElement(elm, priority);
			if (this.isEmpty()) {
				this.data.push(queueElement);
			} else {
				var added = false;
				for (var i = 0; i < this.size(); i++) {
					if (queueElement.priority > this.data[i].priority) {
						// 优先级越高，越靠前
						this.data.splice(i, 0, queueElement);
						added = true;
						break;
					}
				}

				if (!added) {
					this.data.push(queueElement);
				}
			}
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
			return this.data[0];
		}
	}, {
		key: "isEmpty",
		value: function isEmpty() {
			return this.data.length === 0;
		}
	}, {
		key: "size",
		value: function size() {
			return this.data.length;
		}
	}, {
		key: "clear",
		value: function clear() {
			this.data = [];
		}
	}, {
		key: "print",
		value: function print() {
			console.log(JSON.stringify(this.data));
			return JSON.stringify(this.data);
		}
	}]);

	return PriorityQueue;
}();