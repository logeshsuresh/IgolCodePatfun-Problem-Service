const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService();
    
    // 1. Convert Markdown to HTML
    const convertedHtml = marked.parse(markdownContent);

    // 2. Sanitize HTML
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    // 3. Convert the sanitized HTML to Markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;

}

module.exports = sanitizeMarkdownContent;

