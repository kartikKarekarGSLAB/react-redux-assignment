import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/postsAction';

function Post(currentPostMessage , currentIndex) {
    return (<div key = {currentIndex} > <p> { currentPostMessage } </p> </div> );
}
class Posts extends Component {
    constructor(props) {
        super(props);
        // this.hidePosts = this.hidePosts.bind(this);
    }
    componentWillMount() {
        // this.props.dispatch(fetchPosts());
    }
    showPosts = () =>  {
        this.props.displayPost();
    }
    hidePosts = () => {
        console.log(this);
    }
    render() {
        {    console.log(this.props); }

        const postsArray = this.props.posts.map((currentPostMessage,currentIndex) => {
            return Post(currentPostMessage , currentIndex);
        });
        return (
            <div>
                <h1>Hello</h1>
                <div id='post-div'>
                {   
                    postsArray
                }
                </div>
                <button onClick={ this.showPosts }> Show posts! </button>
                <button onClick={ this.hidePosts } value='hidebutton'> Hide posts! </button>
            </div>
            );
        }
    }
const mapStateToProps = state => ({
  posts : state.posts.posts
});
const mapDispatchToProps = dispatch => ({
    displayPost : () => { dispatch(fetchPosts()) }
})

export default connect(mapStateToProps,mapDispatchToProps)(Posts);