import React, { Component } from 'react'
import Idea from '../components/Idea'
import { connect } from 'react-redux'
import { fetchIdeas } from '../actions/ideas'

class Index extends Component {

// using the fetchIdea action creator to get all ideas from the API
  componentDidMount() {
    this.props.fetchIdeas()
  }

  render() {
    return (
      <p>Ideas will go here</p>
    )
  }

}

// enabling Index component to access ideas and loading from state in redux store
const mapStateToProps = ({ ideas, loading }) => {
  return { ideas, loading }
}

export default connect(mapStateToProps, {fetchIdeas})(Generator)
