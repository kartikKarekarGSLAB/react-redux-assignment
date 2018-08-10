import React, { Component } from 'react';
import './pageContent.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVedio } from './../../actions/vedioActions';
import { alertWarningMessage } from './../../actions/alertAction';
import { FETCH_VEDIO , PLAY_VEDIO } from './../../actions/types';

 
class PageContent extends Component {

    componentWillMount() {
  	this.props.fetchVedio();
    this.props.alertWarningMessage();
  }
  render() {
  	const vediosList = this.props.vedios.map((currentVedio,index) => {
		return (<li key = { index } >
			<img id="current-vedio" src={ currentVedio.thumbnailUrl } alt={ currentVedio.title } />
			<p>{ currentVedio.title  }</p>
		 </li>);  		
  	});

    return (
      <div id="page-content">
      	 <div id="currentVedioContent">
          <p> Current status : <b>{this.props.status}</b> </p>
      	 	<p> Your provider will be with you momentarily. </p>
      	 	<img id="current-vedio" src={''} alt="current-vedio" />
      	 	<p id="current-vedio-title"></p>
      	 </div>
      	 <div id="vedio-playlist">
      	 	<p> The Following vedios have been selected especially for you while you wait </p>
      	 	<p> Up Next</p>
      	 	<ul>
      	 		{vediosList}
      	 	</ul>
      	 </div>
     </div>
    );
  }
}

// PageContent.propTypes = {
// 	fetchVedio : PropTypes.func.isRequired,
//   alertWarningMessage : PropTypes.func.isRequired,
// 	vedios : PropTypes.array.isRequired,
//   status : PropTypes.string.isRequired
// }

const mapStateToProps = state => ({
	vedios : state.vediosFetch.vedios,
  status : state.vediosFetch.status 
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVedio : () =>  dispatch(fetchVedio()) ,
    alertWarningMessage : () =>  dispatch(alertWarningMessage())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PageContent);
