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

		else
		{
			this._tail.next=node;
		    node.prev=this._tail;

		}
			this._tail=node;
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
		
		var current=this._head;
		for(var i=0;i<index;i++)
		{
			current=current.next;

		}
		return current.data;

	}

    insertAt(index, data) {
		
		var current=this._head;
		for(var i=0;i<index;i++){
			
			current=current.next;
			
			
		}
		current.data=data;
		return this;
		
	}

    isEmpty() {
		
		return this.length==0;

	}

    clear() {

		this._head=this._tail=new Node();
		
		this.length=0;
		return this;

		}

	
    deleteAt(index) {
		var current=this._head;
		
		
		for(var i=0;i<index;i++){
			
			current=current.next;
			
			
		}
		  if (current.prev!=null)
            {
                current.prev.next = current.next;
                

            }
          else
            {
                this._head = current.next;
              
            }
          if (current.next != null)
            {
                current.next.prev = current.prev;

            }
          else
            {
                this._tail = current.prev;
            }
			
		this.length--;
		return this;

	}

    reverse() {
		
		    var current = this._tail;
			var temp;

        while(current!=null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current =temp;
        }

			temp = this._head;
			this._head = this._tail;
			this._tail = temp;    

    
			return this;
	}

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
