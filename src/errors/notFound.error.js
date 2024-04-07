const { StatusCodes } = require('http-status-codes');
const BaseError = require('./base.error');

class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super('BadRequest', StatusCodes.NOT_FOUND, `Requested resource : ${resourceName} with value ${resourceValue} not found`, {
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFound;