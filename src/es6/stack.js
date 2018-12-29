/*模拟栈
* @Author: greatWeber
* @Date:   2018-12-29 09:59:53
* @Last Modified by:   MM
* @Last Modified time: 2018-12-29 13:53:09
*/
class Stack {
	constructor(){
		this.data = [];
	}
  
	push(val){
		// 添加数据
		this.data.push(val);
	}

	pop(){
		// 移除数据
		return this.data.pop();
	}
 
	peek(){
		// 返回顶部数据
		return this.data[this.data.length-1];
	}

	isEmpty(){
		// 判断栈是否为空
		return this.data.length === 0;
	}

	size(){
		// 栈的长度
		console.log(this.data);
		return this.data.length;
	}

	clear(){
		// 清空栈
		this.data = [];
	}

	print(){
		// 打印栈
		console.log(this.data.toString());
		return this.data.toString();
		
	}

}

// *******************************
// 实际使用
// *******************************

/**
 * 十进制转换
 * @param  {[type]} input [输入的数据]
 * @param  {[type]} base  [基数]
 * @return {[type]}       [转换后的数据]
 */
const baseConverter = (input, base)=>{
	let stack = new Stack(),
		rem,
		baseString = '',
		digits = '0123456789ABCDEF';

	while(input>0){
		rem = Math.floor(input%base);
		stack.push(rem);
		input = Math.floor(input/base);
	}

	while(!stack.isEmpty()){
		baseString += digits[stack.pop()];
	}

	return baseString;
}




