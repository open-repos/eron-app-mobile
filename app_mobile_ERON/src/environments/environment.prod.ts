import { runtimeEnv } from './runtime-env';

export const environment = {
  production: true,
  firebaseConfig: runtimeEnv && runtimeEnv.firebaseConfig ? runtimeEnv.firebaseConfig : {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};