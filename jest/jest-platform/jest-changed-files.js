const { getChangedFilesForRoots } = require('jest-changed-files');

// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(["../../jest"], {
    lastCommit: true,
}).then(result => {
    console.log(result.changedFiles)
});