import enlocale from './../locales/en/en'; //load locale messages
import eslocale from './../locales/es/es'; //load locale messages

function localeReducer( 
			previousState = { 
								lang : 'en' ,
								locale : enlocale 
							}, 
			action ) 
{
	var locale = enlocale;
	switch (action.type) {
		case 'LOCALE_CHANGED' :
			switch(action.payload){
				case 'en' :
					locale = enlocale;
					break;
				case 'es' :
					locale = eslocale;
					break;
				default:
					locale = enlocale;
					break;
			}
			return {...previousState , lang : action.payload , locale : locale };
		default:
			console.log('inside default case - for locale reducer ');
			return {...previousState};
	}
} 
export default localeReducer;