/**
 * This file is run before any tests (by being included in the setupFiles property of the jest.config.js), 
 * and allows Jest to work with Enzyme to create shallow copies of React Components, as well as methods 
 * within those components
 * 
 * Any 'module not defined' issues with testing imported modules should include those modules here, as done 
 * in the example below with the 'whatwg-fetch' module (imports and defines 'fetch')
 */

 /** Example 
//imports the node-fetch module
import 'whatwg-fetch';
 */

//Initialize and configure enzyme (if testing individual components)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
