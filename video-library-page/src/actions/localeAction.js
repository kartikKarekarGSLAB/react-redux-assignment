export var localeChanged = (locale) => dispatch => {
	dispatch({type:'LOCALE_CHANGED' ,payload:locale});
}