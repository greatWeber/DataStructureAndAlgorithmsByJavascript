/* 模拟链表
* @Author: greatWeber
* @Date:   2019-01-03 10:36:52
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-04 09:10:03
*/

class Node{
	constructor(elm){ 
		this.element = elm;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.length = 0;
		this.head = null;
	}

	append(elm){
		// 添加
		let node = new Node(elm);
		let current;

		if(this.head === null){ //列表中的第一个元素
			this.head = node;
		}else{
			// 循环找到最后一个元素
			current = this.head;
			while(current.next){
				current = current.next;
			}

			current.next = node;
		}
		this.length++;
	}

	insert(position,elm){
		// 插入元素
		if(position>-1&&position<=this.length){ //边界判断
			let node = new Node(elm);
			let previous,current=this.head,index=0;
			if(position==0){ //第一个元素
				node.next = current;
				this.head = node;
				this.length++;
			}else if(position == this.length){
				this.append(elm);			
			}else {
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
				this.length++;
			}
			
			return true;
		}else{
			return false;
		}
	}

	removeAt(position){
		// 根据索引移除元素
		if(position>-1&&position<=this.length){
			let current = this.head;
			let previous,index=0;
			if(position==0){
				this.head = current.next;
			}else{
				while(index++<position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			this.length--;
			return true;
		}else{
			return false;
		}
	}

	indexOf(elm){
		// 返回查找元素的位置
		let current = this.head;
		let index =0;
		while(current){
			if(elm === current.element){
				return index;
			}
			index++;
			current = current.next;
		}

		return -1;
	}

	remove(elm){
		// 移除某元素
		let index = this.indexOf(elm);
		return this.removeAt(index);
	}

	isEmpty(){
		return this.length === 0;
	}

	size(){
		return this.length;
	}

	getHead(){
		return this.head;
	}

	toString(){
		// 打印
		let current = this.head;
		let string = '';
		while(current){
			string+=current.element+'-->';
			current = current.next;
		}
		return string;
	}
}