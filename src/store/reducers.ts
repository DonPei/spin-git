/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import calendarReducer from 'features/calendar/calendarSlice';
import profileReducer from 'features/profile/profileSlice';
import authReducer from '../features/auth/authSlice';

const injectedReducers = {
  calendar: calendarReducer,
  profile: profileReducer,
  auth: authReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
