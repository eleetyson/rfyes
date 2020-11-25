import React, { Component } from 'react'
import Loading from '../components/Loading'
import Idea from '../components/Idea'
import { connect } from 'react-redux'
import { fetchIdeas, resetIdeas } from '../actions/ideas'

class IdeasIndex extends Component {

// invoked immediately after component mounts
  componentDidMount() {
    this.clearIdeas()
    this.getIdeas()
    // window.addEventListener("keyup", this.handleKeyUp)
  }

// clearing out any existing ideas from redux store
  clearIdeas() { this.props.resetIdeas() }

// using the fetchIdeas action creator to get an idea from the API
  getIdeas() { this.props.fetchIdeas() }

// display loading message until fetch is completed
  renderContentConditional() {
    if (this.props.loading) {
      return this.renderContentLoading()
    } else {
      return this.renderContent()
    }
  }

// returns the component for the loading animation
  renderContentLoading() {
    return <Loading />
  }

// returns a card component once fetch is completed successfully
  renderContent() {
    return (
      this.props.ideas.map(idea => <Idea idea={idea} key={idea.id} id={idea.id} />)
    )
  }

  render() {
    return (
      <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-10 col-xs-10  offset-2  py-5 my-xl-5 my-lg-5 my-md-5 my-sm-4 my-xs-4">
        {this.renderContentConditional()}
      </div>
    )
  }

}

// enabling Index component to access ideas and loading from state in redux store
const mapStateToProps = ({ ideas, loading }) => {
  return { ideas, loading }
}

export default connect(mapStateToProps, {fetchIdeas, resetIdeas})(IdeasIndex)
