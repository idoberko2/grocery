import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default [
    thunk,
    createLogger()
];
