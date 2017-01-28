const Node = require('./node');

class LinkedList {
    constructor() {
		
		this._head = null;
        this._tail = null;
        this.length=0;
	}
   
	
	
	
    append(data) {
		
		var node =new Node(data);
		if(this.length==0)
			this._head=node;
		  
		

		else{
			this._tail.next=node;
		    node.prev=this.tail;
			
			
		}
		this._tail=node;
	
	    this.length++;
		
		
		
	}

    head() {
		
		
			return this._head.data;
		
		
		
	}

    tail() {
		
			return this._tail.data;
		
		
		
		
	}

    at(index) {
		
		var current=this._head;
		for(var i=0;i<index;i++){
			
			current=current.next;
			
			
		}
		return current.data;
		
		
		
	}

    insertAt(index, data) {
		
		
		
		
		
		
		
		
	}

    isEmpty() {
		return this.length==0;
		
		
	}

    clear() {
	
	
		this._head=this._tail=new Node();
		
		this.length=0;
	
		
			
			
		}

	
    deleteAt(index) {
		var current=this._head;
		
		
	
        
		
		
	}

    reverse() {}

    indexOf(data) {
	
		
		var current=this._head;
		var index=0;
	while(current.data!=data){

		index++;
		current=current.next;
		
			if(current==null)
			return -1;
	}
	
	return index;
	
		
		
	}
}

module.exports = LinkedList;
