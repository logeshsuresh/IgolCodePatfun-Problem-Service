const { Problem } = require('../models');
const NotFound = require('../errors/notFound.error');
const logger = require('../config/logger.config');

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblems() {
        try {
            const problems = await Problem.find();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemId) {
        try {
            const problem = await Problem.findById(problemId);
            if (!problem) {
                throw new NotFound('problem', problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(problemId, problemData) {
        try {
            const problem = await Problem.findByIdAndUpdate(problemId, problemData, {
                new: true
            });
            if (!problem) {
                throw new NotFound('problem', problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId) {
        try {
            const problem = await Problem.findByIdAndDelete(problemId);
            if (!problem) {
                logger.error(`Problem with id: ${problemId} not found in DB`);
                throw new NotFound('problem', problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;