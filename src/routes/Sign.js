import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';

import CommentStore  from '../stores/CommentStore';
import CommentAction from '../actions/CommentAction';
import CommentBox from '../components/CommentBox';

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
    CommentAction.fetchComments();
  }

  render(){
    console.log(this.state.comments);
    return(
      <div class='sing'>
        <CommentBox />
      </div>
    );
  }
}
