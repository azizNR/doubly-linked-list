const Node = require('./node');

class LinkedList {
    constructor(length = 0, _head = null, _tail = null) {
        this.length = length;
        this._head = _head;
        this._tail = _tail;
    }

    append(data) {

        var node = new Node();

        node.data = data;
        node.next = null;

        if (this.length == 0) {
            this._head = node;
            node.prev = null;

        } else {
            this._tail.next = node;
            node.prev = this._tail;
        }  

        this._tail = node;
        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var node = this._head,
            count = 0;
        if (index > this.length || index < 0 || this.length==0) {
            return "Error!";
        }
        while (count < index) {
            node = node.next;
            count++;
        }
        return node.data;

    }

    insertAt(index, data) {
        var newNode = new Node(),
            currNode = this._head,
            count = 0;
        newNode.data = data;

        while (count < index-1) {
            currNode = currNode.next;
            count++;
        }
        
        newNode.next = currNode.next;
        currNode.next = newNode;
        newNode.prev = currNode;        

        return this;
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        var temp = new Node();
        while (this.length > 1) {                     
            this._tail = this._tail.prev;
            this.length--;
        }
        this._tail = temp;
        this._head = temp;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        var currNode = this._head,
            count = 0;
        if (index < this.length && index >= 0 && this.length != 0) {
            while (count < index-1) {
                currNode = currNode.next;
                count++;
            }
            if (this.length == 1) {
                this._head = null;
                this._tail = null;
                this.count = 0;
            } else {
                currNode.next = currNode.next.next;
                (currNode.next.next).prev = currNode;
                //currNode.prev = currNode; 
                this.length--;
            }

        }
        return this;
    }
    reverse() {
        var list = new LinkedList(),
            oldList = new LinkedList(),
            count = 0;
        
        if (this.length > 1) {
            oldList._head = this._head;
            oldList._tail = this._tail;
            oldList.length = this.length;

            for (var i = this.length; i > 0; i--) {
                list.append(oldList.at(i-1));
            }
            this._head = list._head;
            this._tail = list._tail; 
        }
        return this;
    }

    indexOf(data) {
        var node = this._head,
            count = 0;
        while (count < this.length) {
            
            if (data == node.data) {
                return count;
            } 
            count++;
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
