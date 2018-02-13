import Polyglot from 'node-polyglot';
import english from './en.json';
import czech from './cs.json';

const instance = new Polyglot({phrases: czech});

export default instance;
