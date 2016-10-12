// App.js
import React from 'react';
import Word from './Word';
import Button from './Button';
import Draggable from 'react-draggable';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      magnets: []
    };

    this.handleNewWordClick = this.handleNewWordClick.bind(this);
  }

  handleNewWordClick(event){
    let newArray = this.state.magnets
    $.ajax({
      url: 'https://wordsapiv1.p.mashape.com/words/?random=true',
      type: 'GET',
      data: {},
      dataType: 'json',
      success: function(data) {
        newArray.push(data.word);
        this.setState({ magnets: newArray });
      }.bind(this),
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "MKUEGhHO8OmshoWMUCPKmbuq7xeHp1EXgItjsnmPOlGC4cBUMl")}
    })

  };

  render(){
    let magnets = this.state.magnets.map(magnet => {
      return(
        <div>
          <Word
            key={magnet}
            body={magnet}
            />
        </div>
      ).bind(this)
    })

    return(
      <div>
        <Draggable
          axis="x"
          handle=".magnet"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          zIndex={100}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
        <div className="magnet">
          {magnets}
        </div>
        </Draggable>

        <Button handleNewWordClick={this.handleNewWordClick}/>
      </div>
    );
  }
};

export default App;
