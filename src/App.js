import React, { Component } from 'react';
import {data} from './Data'
import './data.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[]
      }
    }

    componentDidMount(){
      this.setState({
        datas:data
      })
    }

  render() {
    return (
      <div className="App">
        {
          this.state.datas.map((param, index) => {
            return (
              <div className="layout">
                <div className="gambar">
                  <img className="ga" src={param.thumbnail}/>
                  <p>{param.title}</p>
                  <h3>{param.author}</h3>
                  <h5>{param.pubDate}</h5>
                </div>
             </div> 
            )
        })
        }
      </div>
    );
  }
}


export default App;
