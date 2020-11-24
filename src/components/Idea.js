import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchIdea from '../actions/ideas'

class Idea extends Component {

  // use the fetchIdea action creator to get a random idea from the API
  componentDidMount() {
    this.props.fetchIdea()
  }

  render() {
    return (

    )
  }

}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, {fetchIdea})(Idea)
