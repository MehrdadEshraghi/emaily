import { FETCH_SURVEYS } from '../actions/types';

function surveysReducer(state = null, action) {
	switch (action.type) {
		case FETCH_SURVEYS:
			return action.payload;
		default:
			return state;
	}
}

export default surveysReducer;
