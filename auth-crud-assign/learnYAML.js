const yaml = require('js-yaml')
const fs = require('fs')

try {
    const config = yaml.load(fs.readFileSync('learn.yml', 'utf8'));
    const indentedJson = JSON.stringify(config, null, 4);
    console.log(indentedJson);
} catch (e) {
    console.log(e);
}