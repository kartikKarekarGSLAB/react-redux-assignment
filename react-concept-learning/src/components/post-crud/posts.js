import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPost,addNewPost,updatepost
 } from './../../actions/postsCRUDAction';
import './posts.css';


class UserPosts extends Component {
	getPosts = () => {
				console.log(this.props);	
		console.log(this.props.dispatch);
		this.props.dispatch(getAllPost());
		// this.props.getAllPosts();
	}
	addPosts = () => {
		const title = document.querySelector('#posts-title').value.length ? document.querySelector('#posts-title').value : false;
		const body = document.querySelector('#posts-details').value.length ? document.querySelector('#posts-details').value : false;
		if( title && body ) {
			console.log('title : ',title);
			console.log('body : ',body);
			const post = {
				title : title,
				body : body,
				userId :1
			}
			this.props.addPosts(post);
			console.log(this.props.posts);
		} else {
			alert('please fill all information');
		}
			
	}
	updatepost = () => {
			const post = {
				id : 1,
				title : 'Kartik',
				body : 'this is my first update',
				userId :1
			}		
		this.props.dispatch(updatepost(post));
	}
	render() {
		var usersPosts = [];
		if (this.props.posts.length) {
			usersPosts = this.props.posts.map( (currentPosts,index) => {
				return (
					<div key={currentPosts.title}>
						<h4> {currentPosts.title} </h4>
						<p> {currentPosts.body} </p>
					</div>
					)
			} );			
		}
		return (
			<div id='user-post-container'>
				<div id='control-panel'>
					<button onClick={this.getPosts}>
							Display All
		 			</button>
					<div id="new-post">
						<h3>Add new posts : </h3>
							<label>
								Posts title :
							</label> 
							<input type='text' id='posts-title'/>
							<label>
								Posts details : 
							</label>
							<input type='text' id='posts-details'/>
						<button onClick={this.addPosts} >Add new post</button>
					</div>
					<button onClick={ this.updatepost }>
							Chnage existing post
					</button>
				</div>
				<div id='display-panel'>
					{ usersPosts }
				</div>
			</div>
			);
	}
} 

const mapStateToProps = (state) => ({
	posts : state.crudposts.posts
});
const mapDispatchToProps = (dispatch,props) => ({
  getAllPosts : () => { dispatch(getAllPost()) } ,
  addPosts : () => { dispatch(addNewPost({})) } 	
});

export default connect(mapStateToProps , null )(UserPosts);