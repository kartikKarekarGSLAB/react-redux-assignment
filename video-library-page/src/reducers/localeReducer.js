import en from './../locales/en/en'; //load locale messages
import es from './../locales/es/es'; //load locale messages

function localeReducer( 
			previousState = { 
								lang : 'en' ,
								locale : en 
							}, 
			action ) 
{
	var locale = en;
	switch (action.type) {
		case 'LOCALE_CHANGED' :
			switch(action.payload){
				case 'en' :
					locale = en;
					break;
				case 'es' :
					locale = es;
					break;
				default:
					locale = en;
					break;
			}
			return {...previousState , lang : action.payload , locale : locale };
		default:
			console.log('inside default case - for locale reducer ');
			return {...previousState};
	}
} 
export default localeReducer;