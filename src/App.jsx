import React from "react";

import SearchMovie from './searchMovie'


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie/>
      </div>
    
    )
  }
}
