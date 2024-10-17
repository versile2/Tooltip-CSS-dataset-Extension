const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_PATH = path.join(process.cwd(), 'docs_build', 'pages');
const OUTPUT_PATH = path.join(process.cwd(), 'docs_build', 'search-index.json');

function generateSearchIndex() {
  const files = fs.readdirSync(CONTENT_PATH);
  const searchIndex = [];

  files.forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(CONTENT_PATH, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(content);

      const item = {
        title: data.title,
        content: markdownContent,
        url: `/${path.parse(file).name}/`,
      };

      // Add installation methods for get-started.md
      if (file === 'get-started.md') {
        item.installation = markdownContent.match(/npm install .+/g);
      }

      // Add code snippets for howto.md
      if (file === 'howto.md') {
        item.code = markdownContent.match(/```[\s\S]+?```/g);
      }

      searchIndex.push(item);
    }
  });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(searchIndex));
  console.log('Search index generated successfully.');
}

module.exports = generateSearchIndex;
