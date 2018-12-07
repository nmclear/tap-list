import { AsyncStorage } from 'react-native';
import axios from 'axios';
import firebase from '../../firebase';

import {
  FETCH_CURRENT_USER,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_UP_ERROR,
  AUTH_ERROR,
} from '../types';

const ROOT_URL = 'http://localhost:3000';

export const signUpWithPhone = phone => async (dispatch) => {
  const onSuccess = () => {
    dispatch({
      type: AUTH_SIGN_UP_SUCCESS,
      authStage: 'SIGN_IN',
    });
  };
  const onError = () => {
    dispatch({
      type: AUTH_SIGN_UP_ERROR,
      authStage: 'SIGN_UP',
    });
  };

  try {
    await axios.post(`${ROOT_URL}/createUser`, { phone });
    await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone });
    return onSuccess();
  } catch (error) {
    return onError();
  }
};

export const signInWithPhoneAndCode = (phone, code) => async (dispatch) => {
  const onSuccess = (currentUser) => {
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      currentUser,
    });
  };
  const onError = () => {
    dispatch({
      type: AUTH_SIGN_IN_ERROR,
      authStage: 'SIGN_IN',
    });
  };
  try {
    const { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
    const { user } = await firebase.auth().signInWithCustomToken(data.token);
    await AsyncStorage.setItem('TAPLIST_AUTH_TOKEN', data.token);

    return onSuccess(user.uid);
  } catch (error) {
    return onError();
  }
};

export const fetchCurrentUser = () => async (dispatch) => {
  const onSuccess = (currentUser) => {
    dispatch({
      type: FETCH_CURRENT_USER,
      currentUser,
    });
  };
  const onError = () => {
    dispatch({
      type: AUTH_ERROR,
    });
  };

  try {
    const token = await AsyncStorage.getItem('TAPLIST_AUTH_TOKEN');
    if (token !== null) {
      const { user } = await firebase.auth().signInWithCustomToken(token);
      return onSuccess(user.uid);
    }
    return onError();
  } catch (error) {
    return onError();
  }
};
