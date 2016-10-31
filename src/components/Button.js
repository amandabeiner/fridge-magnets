import React from 'react';


const Button = props => {


  return(
    <div>
      <div className="button-space">
        <h1>Welcome to Fridge Magnets</h1>
        <h2>Click to add new words to your magnetic poetry</h2>

        <button className='btn' onClick={props.handleNewWordClick}>
          New Word
        </button>

        <button className='btn' onClick={props.handleClearClick}>
          Clear
        </button>

        </div>

        <img src= 'https://s13.postimg.org/to254ablj/refrigerator.png'></img>
    </div>
  )
}

export default Button;
