"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 模拟集合
* @Author: greatWeber
* @Date:   2019-01-07 13:53:25
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-07 14:54:22
*/

var Set = function () {
	function Set() {
		_classCallCheck(this, Set);

		this.data = {};
	}

	_createClass(Set, [{
		key: "has",
		value: function has(value) {
			// 是否有该元素
			return this.data.hasOwnProperty(value);
		}
	}, {
		key: "add",
		value: function add(value) {
			// 添加元素
			if (!this.has(value)) {
				this.data[value] = value;
				return true;
			}
			return false;
		}
	}, {
		key: "remove",
		value: function remove(value) {
			// 移除元素
			if (this.has(value)) {
				delete this.data[value];
				return true;
			}
			return false;
		}
	}, {
		key: "clear",
		value: function clear() {
			this.data = {};
		}
	}, {
		key: "size",
		value: function size() {
			return Object.keys(this.data).length;
		}
	}, {
		key: "values",
		value: function values() {
			// 返回集合所有的属性
			return Object.keys(this.data);
			// let keys = [];
			// for(let key in this.data){
			// 	if(this.data.hasOwnProperty(key)){
			// 		keys.push(key);
			// 	}
			// }
			// return keys;
		}
	}, {
		key: "union",
		value: function union(otherSet) {
			// 并集
			var unionSet = new Set();
			var values = this.values();
			values.forEach(function (value, i) {
				unionSet.add(value);
			});
			values = otherSet.values();
			values.forEach(function (value, i) {
				unionSet.add(value);
			});
			return unionSet;
		}
	}, {
		key: "intersection",
		value: function intersection(otherSet) {
			// 交集
			var intersectionSet = new Set();
			var values = this.values();
			values.forEach(function (value, i) {
				if (otherSet.has(value)) {
					intersectionSet.add(value);
				}
			});

			return intersectionSet;
		}
	}, {
		key: "difference",
		value: function difference(otherSet) {
			// 差集
			var differenceSet = new Set();
			var values = this.values();
			values.forEach(function (value, i) {
				if (!otherSet.has(value)) {
					differenceSet.add(value);
				}
			});

			return differenceSet;
		}
	}, {
		key: "subset",
		value: function subset(otherSet) {
			// 子集
			if (this.size() > otherSet.size()) {
				return false;
			}
			var values = this.values();
			for (var i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}

			return true;
		}
	}, {
		key: "toString",
		value: function toString() {
			console.log(this.data);
			return JSON.stringify(this.data);
		}
	}]);

	return Set;
}();