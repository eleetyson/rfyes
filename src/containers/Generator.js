import React, { Component } from 'react'
import Loading from '../components/Loading'
import Idea from '../components/Idea'
import Instruction from '../components/Instruction'
import { connect } from 'react-redux'
import { fetchIdea,  resetIdeas } from '../actions/ideas'

class Generator extends Component {

// callback adds a keyboard shortcut for new idea generation
  // handleKeyDown(event) {
  //   if (event.key === 'Enter') {
  //     this.props.resetIdeas()
  //   }
  // }

// invoked immediately after component mounts
  componentDidMount() {
    this.clearIdeas()
    this.getIdea()
  }

// clearing out any existing ideas from redux store
  clearIdeas() {
    this.props.resetIdeas()
  }

// using the fetchIdea action creator to get an idea from the API
  getIdea() {
    this.props.fetchIdea()
  }

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
        <Instruction />
      </div>
    )
  }

}

// enabling Generator component to access ideas and loading from state in redux store
const mapStateToProps = ({ ideas, loading }) => {
  return { ideas, loading }
}

// connecting component to redux store
// redux state and fetchIdea() action creator will be available through props
export default connect(mapStateToProps, {fetchIdea, resetIdeas})(Generator)
