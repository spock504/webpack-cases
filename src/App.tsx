/*
 * @Author: liujian
 * @Date: 2021-03-20 10:40:45
 * @Description: file content
 * @LastEditors: liujian
 * @LastEditTime: 2021-03-23 15:19:44
 */
import React from 'react'
import logo from './logo.svg';
import './App.css';



class App extends React.Component<any, any> {

  render() {
    console.log('process.env', process.env);

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
          <form>
            <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
          </form>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
