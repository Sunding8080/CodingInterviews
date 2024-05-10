/**
 * 用俩个栈实现一个队列
 * 
 * 解法：
 * 当插入时， 直接插入 stack1
 * 当弹出时， 当 stack2 不为空， 弹出 stack2 栈顶元素， 如果 stack2 为空，将 stack1 中的全部数逐个出栈入栈 stack2， 再弹出 stack2 栈顶元素
 * 
 **/

class Queue {
  inStack = [];
  outStack = [];

  push(node) {
    this.inStack.push(node);
    return this
  }

  pop() {
    if (this.outStack.length) {
      return this.outStack.pop()
    } else {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
      }

      if (this.outStack.length) {
        return this.outStack.pop()
      }
    }
  }
}

const queue = new Queue();
console.log(queue.push(1).push(2).push(3).push(4));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.push(10).push(20).push(30).push(40));
