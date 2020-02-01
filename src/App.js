import React from 'react';
import './App.css';

function calculation({name, price}, e) {
  e.preventDefault();
  var buy = (({price} * 0.95) -300);
  console.log(`${name}` + buy);
}

class Submit extends React.Component{
  render (){
   return( 
    <form onSubmit={calculation}>
        <label>
            Name: 
            <input type="text" name=""/>
        </label>
        <label>
          Price:
            <input type="text" price=""/>
        </label>
        <input type="submit" value="Submit"/>
    </form>
    )
  }
}


function App() {
    return (
        <div className="App">
            <div>
                <Submit/>
            </div>
        </div>

    );
}

export default App;
