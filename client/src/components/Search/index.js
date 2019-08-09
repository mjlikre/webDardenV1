import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchCity } from './../../actions/searchAction';
import { connect } from 'react-redux';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.fetchCity(this.state.city);
  }
  render() {
    return (
      <div id='search-bar'>
        <form onSubmit={this.onSubmit}>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              id='search-term'
              placeholder='Search for places to go!'
              aria-label='traveler search term'
              aria-describedby='button-addon4'
              value={this.state.city}
              name='city'
              onChange={this.onChange}
            />
            <div className='input-group-append' id='button-addon4'>
              {/* <button className='btn btn-outline-secondary' type='button'>
                Filters
              </button> */}
              <button className='btn btn-success' type='submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { fetchCity }
)(index);
