import chai from 'chai';
import app from '../../../app';

global.Server = app;
global.expect = chai.expect;