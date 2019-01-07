/* 模拟集合
* @Author: greatWeber
* @Date:   2019-01-07 13:53:25
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-07 14:54:22
*/

class Set{
	constructor(){
		this.data = {}; 
	}

	has(value){
		// 是否有该元素
		return this.data.hasOwnProperty(value);
	}

	add(value){
		// 添加元素
		if(!this.has(value)){
			this.data[value] = value;
			return true;
		}
		return false;
	}

	remove(value){
		// 移除元素
		if(this.has(value)){
			delete this.data[value];
			return true;
		}
		return false;
	}

	clear(){
		this.data = {};
	}

	size(){
		return Object.keys(this.data).length;
	}

	values(){
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

	union(otherSet){
		// 并集
		let unionSet = new Set();
		let values = this.values();
		values.forEach((value,i)=>{
			unionSet.add(value);
		});
		values = otherSet.values();
		values.forEach((value,i)=>{
			unionSet.add(value);
		});
		return unionSet;
	}

	intersection(otherSet){
		// 交集
		let intersectionSet = new Set();
		let values = this.values();
		values.forEach((value,i)=>{
			if(otherSet.has(value)){
				intersectionSet.add(value);
			}
		});

		return intersectionSet;
	}

	difference(otherSet){
		// 差集
		let differenceSet = new Set();
		let values = this.values();
		values.forEach((value,i)=>{
			if(!otherSet.has(value)){
				differenceSet.add(value);
			}
		});

		return differenceSet;
	}

	subset(otherSet){
		// 子集
		if(this.size()>otherSet.size()){
			return false;
		}
		let values = this.values();
		for(let i=0;i<values.length;i++){
			if(!otherSet.has(values[i])){
				return false;
			}
		}

		return true;
	}

	toString(){
		console.log(this.data);
		return JSON.stringify(this.data);
	}
}
