import React, { Component } from 'react'
import Idea from '../components/Idea'
import Instruction from '../components/Instruction'
import { connect } from 'react-redux'
import { fetchIdea } from '../actions/ideas'

class Generator extends Component {

// using the fetchIdea action creator to get a random idea from the API
  componentDidMount() {
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

// returns a loading message
  renderContentLoading() {
    return <p> Loading... </p>
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
export default connect(mapStateToProps, {fetchIdea})(Generator)
