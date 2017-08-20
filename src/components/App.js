import React from 'react';
import Counter from './Counter'

class App extends React.Component {
    render(){
        return (
          <div>
            <h1>Hello React Skeleton</h1>
            <h3>Counter</h3>
            <Counter/>
          </div>
        );
    }
}

export default App;
