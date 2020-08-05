import {combineReducers} from 'redux';
// =============================================
// import from reducers auth
import auth from './auth/auth';
import searchFriend from './auth/searchFriend';
import register from './register';
import FriendList from './Friends/FriendList';
import AddFriend from './Friends/AddFriend';
import Messanger from './Messanger';
import History from './history';
// export combine reducers
export default combineReducers({
  // =========================================//
  // export auth //
  auth,
  searchFriend,
  register,

  FriendList,
  AddFriend,
  Messanger,

  History,
});
