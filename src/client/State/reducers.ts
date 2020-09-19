import { combineReducers } from 'redux';
import rolesReducer from '../Routes/RoleDef/Package/Reducer';

const rootReducer = () => combineReducers({
  rolesReducer
});

export default rootReducer;
