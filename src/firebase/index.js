import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export const functions = firebase.functions();