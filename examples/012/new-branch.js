const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const { repository } = require('./config');

const { delivery, baseBranch } = repository;
const repoName = delivery.substring(delivery.lastIndexOf('/'));

// Changing into the repo's directory:

const repoPath = path.join(__dirname, repoName);
shell.cd(repoPath);

// Checking out to base branch

shell.exec(`git checkout ${baseBranch}`);

// Making sure we have the latest changes from the remote origin:

shell.exec(`git pull origin ${baseBranch}`);

// Prompt for ticket ID:

const ticketId = readLineSync.question('What is the ticket ID? ', {
  limit: input => input.trim().length > 0,
  limitMessage: 'Please enter a ticket ID (e.g. GOT-123)'
});

// Create a new branch:

shell.exec(`git checkout -b ${ticketId}`);