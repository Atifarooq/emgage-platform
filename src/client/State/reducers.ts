import { combineReducers } from 'redux';
import rolesReducer from '../Routes/RoleDef/Package/reducer';

const rootReducer = () => combineReducers({
  rolesReducer
});

export default rootReducer;
