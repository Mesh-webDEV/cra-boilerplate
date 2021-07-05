import { useContext, useReducer } from 'react';
import { useHistory, useLocation } from 'react-router';

// Context
import {
  LOADING,
  SET_TOKEN,
  SET_USER,
  SET_AUTH_STATE,
  SIGNOUT,
} from './../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import ToastContext from '../../Context/Toast/ToastContext';

// Utils
import { backendAPI } from '../../lib/backend';
import {
  setLocalStorage,
  getLocalStorage,
  clearLocalStorage,
  removeItemLocalStorage,
} from '../../lib/localStorage';
// =====

const AuthState = props => {
  const initialState = {
    username: '',
    authState: false,
    loading: false,
    token: '',
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const { setToast } = useContext(ToastContext);

  let history = useHistory();
  const location = useLocation();

  const isAuthorized = async () => {
    try {
      // get data from localStorage
      const token = await getLocalStorage('token');
      const username = await getLocalStorage('username');

      if (!token || !username) throw new Error('Not authorized');
      console.clear();
      console.log(token);
      console.log(username);

      await backendAPI.get('/user/', {
        headers: {
          'authorization': `Bearer ${token}`,
        },
      });

      dispatch({
        type: SET_TOKEN,
        payload: token,
      });
      dispatch({
        type: SET_USER,
        payload: username,
      });
      dispatch({
        type: SET_AUTH_STATE,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: SIGNOUT,
      });
      await clearLocalStorage()
        .then(() => console.log('cleared'))
        .catch(e => console.log('error clearing storage', e));

      console.log(error.message);
    }
  };

  const signup = async user => {
    try {
      dispatch({
        type: LOADING,
      });
      const { data } = await backendAPI.post('/auth/signup', user);
      dispatch({
        type: SET_TOKEN,
        payload: data.token,
      });
      dispatch({
        type: SET_USER,
        payload: data.username,
      });
      dispatch({
        type: SET_AUTH_STATE,
        payload: true,
      });

      // persist token & username in localStorage
      try {
        await setLocalStorage('token', data.token.toString());
        await setLocalStorage('username', data.username.toString());
        return history.replace('dashboard');
      } catch (error) {
        // TODO: Toast: Successfully Created an account, but error signing you in.. Please sign-in below.
        // TOOD: redirect to signin
        history.push('/join?menu=signin');
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: LOADING,
      });
    }
  };

  const signin = async user => {
    try {
      dispatch({
        type: LOADING,
      });
      const { data } = await backendAPI.post('/auth/signin', user);
      console.log(data);
      dispatch({
        type: SET_TOKEN,
        payload: data.token,
      });
      dispatch({
        type: SET_USER,
        payload: data.username,
      });
      dispatch({
        type: SET_AUTH_STATE,
        payload: true,
      });

      // persist token & username in localStorage
      try {
        await setLocalStorage('token', data.token.toString());
        await setLocalStorage('username', data.username.toString());
        history.replace('/dashboard');
      } catch (error) {
        // TODO: Toast: Successfully Created an account, but error signing you in.. Please sign-in below.
        // TOOD: redirect to signin
        history.push('/join?menu=signin');
        console.log(error);
      }
    } catch (error) {
      if (!error.response.data.message)
        return setToast({
          variant: 'error',
          message: 'Internal error - try again later or contact us',
        });

      setToast({ variant: 'error', message: error.response.data.message });
    } finally {
      dispatch({
        type: LOADING,
      });
    }
  };

  const signout = async () => {
    try {
      dispatch({
        type: SIGNOUT,
      });
      await removeItemLocalStorage('token');
      await removeItemLocalStorage('username');
      return history.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        username: state.username,
        authState: state.authState,
        loading: state.loading,
        token: state.token,
        signup,
        signin,
        signout,
        isAuthorized,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
