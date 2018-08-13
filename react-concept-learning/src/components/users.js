import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './../actions/userAction';

class Users extends Component {

    getAllUsers = () => {
		document.getElementById("user-data").style.display = 'block';
    	this.props.getAllUsers();
    }
    hideAllUser() {
    	console.log('inside this function',document.getElementById("user-data"));
    	document.getElementById("user-data").style.display = 'none';
    }
    render() {
        {
        	var userProfiles = [];
        	if(this.props.users.length > 0) {
	        	userProfiles =  this.props.users.map((currentUser,currentIndex) => {
	            return (
	            	<div key={currentUser.username}>
	            		<h1>{currentUser.name}</h1>
	            		<span>
	            			<p> Contact Information : </p>
	            			<p>{currentUser.email}</p>
	            			<p>{currentUser.phone}</p>
	            		</span>
	            		<p>
						Company name : <br/>
						{
							currentUser.company.name
						}
	            		</p>
	            	</div>
	            	);

        		});
        	}

        return (
            <div >
            	<button onMouseOver={ this.getAllUsers } onMouseOut={ this.hideAllUser } >SHOW ALL USERS</button>
            	<div id="user-data">
            	 {userProfiles}
            	</div>
            </div>
            );
        }
    }
}
const mapStateToProps = state => (
console.log('>>>>>>>>>>>>>>>>>>>>>> : ',state),
{	
  users : state.users.users
});
const mapDispatchToProps = (dispatch,props) => {
 return  bindActionCreators({getAllUsers : getAllUsers},dispatch); 	
};
export default connect(mapStateToProps , mapDispatchToProps)(Users);