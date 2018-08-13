import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/postsAction';

function Post(currentPostMessage , currentIndex) {
    return (<div key = {currentIndex} > <p> { currentPostMessage } </p> </div> );
}
class Posts extends Component {
    componentWillMount() {
        // this.props.dispatch(fetchPosts());
    }
    showPosts = () =>  {
        this.props.dispatch(fetchPosts());
    }
    render() {
        {    console.log(this.props); }

        const postsArray = this.props.posts.map((currentPostMessage,currentIndex) => {
            return Post(currentPostMessage , currentIndex);
        });
        return (
            <div>
                <h1>Hello</h1>
                {   
                    postsArray
                }
                <button onClick={ this.showPosts }> Display Posts for me ! </button>
            </div>
            );
        }
    }
const mapStateToProps = state => ({
  posts : state.posts.posts
});

export default connect(mapStateToProps)(Posts);