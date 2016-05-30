import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div class='home'>
        <h1>React Final para firmas</h1>
        <Link to='sign'>Firmar</Link>
      </div>
    );
  }
}
