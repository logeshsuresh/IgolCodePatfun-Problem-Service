const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        // 1. Sanitize the markdown for description
        problemData.description = sanitizeMarkdownContent(problemData.description);
        // 2. Create problem
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getProblems() {
        const problems = await this.problemRepository.getProblems();
        return problems;
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async updateProblem(problemId, problemData) {
        const problem = await this.problemRepository.updateProblem(problemId, problemData);
        return problem;
    }

    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
    }

}

module.exports = ProblemService; 