npm install -g typescript
tsc --version

<!-- 
npm install -g ts-node typescript '@types/node'
ts-node index.ts 
-->

<!-- Run this command in 1st terminal terminal  -->
tsc index.ts --watch

<!-- Run this command in 2nd terminal terminal -->
node --watch index.js

<!-- command from package.json -->
npm run start