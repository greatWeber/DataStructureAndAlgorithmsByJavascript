/* 模拟队列
* @Author: greatWeber
* @Date:   2019-01-02 10:46:12
* @Last Modified by:   greatWeber
* @Last Modified time: 2019-01-02 11:20:54
*/
 
class Queue{
	constructor(){
		this.data = [];
	}

	enqueue(val){
		// 入队
		this.data.push(val);
	}

	dequeue(){
		// 出列
		this.data.shift();
	}

	front(){
		// 队列顶部
		return this.data[0];
	}

	isEmpty(){
		return this.data.length === 0;
	}

	clear(){
		this.data = [];
	}

	size(){
		return this.data.length;
	}

	print(){
		// 打印队列
		return this.data.toString();
		console.log(this.data.toString());
	}
} 


