import React, { Component } from 'react'
import Idea from '../components/Idea'
import { connect } from 'react-redux'
import { fetchIdeas } from '../actions/ideas'

class Index extends Component {
  render() {
    return (
      <p>Ideas will go here</p>
    )
  }

}

export default connect(mapStateToProps, {fetchIdeas})(Generator)
