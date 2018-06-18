import chai from 'chai';
import app from '../../../index';

global.Server = app;
global.expect = chai.expect;