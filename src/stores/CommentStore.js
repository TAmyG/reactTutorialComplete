import Reflux from 'reflux';
import io from 'socket.io-client';

import CommentAction from '../actions/CommentAction';

let CommentStore = Reflux.createStore({
  listenables: [CommentAction],
  init: function(){
    this.socket = io('http://localhost:3000');
    this.socket.on('data', (data)=>{
      this.trigger(data);
    });
  },
  fetchComments: function(){
    this.socket.emit('read');
  }
})

export default CommentStore;
