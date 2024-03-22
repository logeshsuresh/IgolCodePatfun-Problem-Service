const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
 
function pingProblemController(req, res, next) {
    try {
        return res.json({message: 'Problem controller is up'});
    } catch (error) {
        next(error);
    }
}

function addProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message : 'not implemented'});
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message : 'not implemented'});
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message : 'not implemented'});
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message : 'not implemented'});
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}