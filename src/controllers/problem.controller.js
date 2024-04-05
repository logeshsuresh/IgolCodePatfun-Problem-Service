const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemRepository = new ProblemRepository();
const problemService = new ProblemService(problemRepository);

 function pingProblemController(req, res, next) {
    try {
        return res.json({ message: 'Problem controller is up' });
    } catch (error) {
        next(error);
    }
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: 'true',
            message: 'Successfully created a new problem',
            data : newProblem,
            error: {}
        });
    } catch(error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Get Problem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Get Problems');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Delete Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Update Problem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}