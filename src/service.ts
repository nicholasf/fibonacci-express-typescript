import express from 'express';
import number from './controllers/number';
import resource from './controllers/resource';
import error from './controllers/error';

// Create Express server
const service = express();

/**
 * Primary routes.
 */
service.get('/:position', number, resource, error);

export default service;
