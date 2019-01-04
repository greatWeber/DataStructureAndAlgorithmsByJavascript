/*模拟双向链表
* @Author: greatWeber
* @Date:   2019-01-04 09:32:27
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-04 10:44:00
*/

class Node{
	constructor(elm){
		this.element = elm;
		this.prev = null;
		this.next = null;
	} 
}

class DoublyLinkedList{
	constructor(){
		this.length = 0;
		this.head = null;
		this.tail = null; //指向最后一个元素
	}

	append(elm){
		// 添加
		let node = new Node(elm);
		let current = this.head;
		if(this.length==0){
			this.head = node;
			this.tail = node;
		}else{
			current = this.tail;
			current.next = node;
			node.prev = current;
			this.tail = node;
		}
		this.length++;
	}

	insert(position, elm){
		let node = new Node(elm);
		if(position>-1&&position<=this.length){
			let current = this.head;
			let previous;
			let index = 0;
			if(position==0){
				if(!this.head){ //新增
					this.head = node;
					this.tail = node;
				}else{
					current.prev = node;
					node.next = current;
					this.head = node;
				}
				this.length++;
			}else if(position == this.length){
				this.append(elm);

			}else{
				while(index++<position){
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
		}else{
			return false;
		}
	}	

	removeAt(position){
		if(this.length==0) return false;
		if(position>-1&&position<=this.length){
			let current;
			if(position==0){
				if(this.length==1){
					this.tail = null;
					this.head = null;
				}else{
					current = this.head.next;
					current.prev = null;
					this.head = current;
				}
			}else if(position == this.length){
				current = this.tail.prev;
				current.next = null;
				this.tail = current;
			}else {
				let index = 0;
				let previous; 
				current = this.head;
				while(index++<position){
					previous = current;
					current = current.next; 
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.length--;
			return true;
		}else{
			return false;
		}
	}

	indexOf(elm){
		let current = this.head,
			index = 0;
		while(current){
			if(elm === current.element){
				return index;
			}
			index++;
			current = current.next;
		}
	}

	remove(elm){
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

	getTail(){
		return this.tail;
	}

	toString(){
		let string = '';
		let current = this.head;
		while(current){
			string += current.element+'-->';
			current = current.next;
		}
		return string;
	}
}