import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve(__dirname, 'content.json');

function save(content: any) {
  const contentString = JSON.stringify(content);
  return fs.writeFileSync(contentFilePath, contentString);
}

function load() {
  if (!fs.existsSync(contentFilePath)) return
  const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8');
  const contentJson = JSON.parse(fileBuffer || '[]');
  return contentJson;
}

export { save, load };
