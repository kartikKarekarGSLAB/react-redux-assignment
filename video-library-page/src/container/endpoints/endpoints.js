import React , { Component } from 'react';
import { connect } from 'react-redux';

import { requestEndpointsList } from  './../../actions/endpointsAction';
import './endpoints.css' 

import loading from './../../images/loading_icon.gif';

class Endpoints extends Component {
	componentDidMount() {
		this.props.requestEndpointsList();
	}
	render() {
		
			if(this.props.loading) {
				return (
						<div className = 'container-fluid'>
							<div className = 'row'>
								<div className = 'col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center'>
									<img id="loading-icon" src={ loading } alt='loading-logo' />
								</div>
							</div>
						</div>
					);
			}
			var endpoints = this.props.endpoints.map( (currentEndpoint) => {
				return (<button className='endpoint-buttton' key={currentEndpoint.endpointId} >{currentEndpoint.endpointName}</button>);
			});
			return (
					<div className = 'container-fluid'>
						<div className = 'row'>
							<div className = 'col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center'>
								{ endpoints }
							</div>
						</div>
					</div>
				);			
		}
}

const mapStateToProps = (state) => ({
	endpoints : state.endpoints.endpointsList.endpoints,
	loading : state.endpoints.endpointsList.loading,
	error : state.endpoints.endpointsList.error
});
const mapDispatchToProps = (dispatch,props) => ({
	requestEndpointsList : () => { dispatch( requestEndpointsList() ) }
});

export default connect(mapStateToProps , mapDispatchToProps )(Endpoints);