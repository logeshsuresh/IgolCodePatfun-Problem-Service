const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemRepository = new ProblemRepository();
const problemService = new ProblemService(problemRepository);

async function pingProblemController(req, res, next) {
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
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched the problem',
            data: problem,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all problems',
            data: problems,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req, res, next) {
    try {
        // nothing implemented
        throw new NotImplemented('Delete Problem');
    } catch (error) {
        next(error);
    }
}

async function updateProblem(req, res, next) {
    try {
        const problem = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully updated the problem',
            data: problem,
            error: {}
        });
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