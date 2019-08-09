import React, { Component } from 'react'
import SearchBar from '../components/Search';

export default class Search extends Component {
  render() {
    const searchStyle = {
      width: '50%'
    }
    return (
      <div>
        <SearchBar style={searchStyle} />
      </div>
    )
  }
}
