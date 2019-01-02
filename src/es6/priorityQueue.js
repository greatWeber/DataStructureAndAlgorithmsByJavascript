/* 优化队列
* @Author: greatWeber
* @Date:   2019-01-02 11:22:05
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-02 11:49:43
*/

class QueueElement{
	constructor(elm,priority){
		this.element = elm;
		this.priority = priority;
	}
}

class PriorityQueue{
	constructor(){
		this.data = [];
	}

	enqueue(elm,priority){
		// 入队
		let queueElement = new QueueElement(elm,priority);
		if(this.isEmpty()){
			this.data.push(queueElement);
		}else{
			let added = false;
			for(let i=0;i<this.size();i++){
				if(queueElement.priority>this.data[i].priority){
					// 优先级越高，越靠前
					this.data.splice(i,0,queueElement);
					added = true;
					break;
				}
			}

			if(!added){
				this.data.push(queueElement);
			}
		}

	}

	dequeue(){
		// 出列
		this.data.shift();
	}

	front(){
		return this.data[0];
	}

	isEmpty(){
		return this.data.length === 0;
	}

	size(){
		return this.data.length;
	}

	clear(){
		this.data = [];
	}

	print(){
		console.log(JSON.stringify(this.data));
		return JSON.stringify(this.data);
	}
}