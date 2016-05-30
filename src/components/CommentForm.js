import React from 'react';


export default class CommentForm extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <form class='commentForm'>
        <input type="text" name = "author" placeholder="Su Nombre"/>
        <input type="text" name = "text" placeholder="Firma"/>
        <input type="hidden" name = "id"  value = {Date.now()} />
        <input type="submit" value = "Enviar"/>
      </form>
    );
  }
}
