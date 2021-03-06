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

    this.handleClearClick = this.handleClearClick.bind(this);
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

  handleClearClick(event){
    let emptyArray = []
    this.setState({ magnets: emptyArray });
  };

  render(){
    let magnets = this.state.magnets.map(magnet => {
      return(
        <div>
          <Draggable
            axis="both"
            handle=".magnet"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            zIndex={100}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <Word
                key={magnet}
                body={magnet}
                />
            </div>
          </Draggable>
        </div>
      )
    })

    return(
      <div>
        <Button handleNewWordClick={this.handleNewWordClick}
        handleClearClick={this.handleClearClick}
        />
        <div>
          {magnets}
        </div>
      </div>
    );
  }
};

export default App;
