import React from 'react';


const Button = props => {


  return(
    <div>
      <button onClick={props.handleNewWordClick}>
        New Word
      </button>

      <button>
        Clear
      </button>
    </div>
  )
}

export default Button;
