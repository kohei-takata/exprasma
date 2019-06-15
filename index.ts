const execSync = require('child_process').execSync;

// TODO Get application name by command line argument
const appName = 'hello-world';
const DOCKER_COMPOSE_FILE_PATH = 'template';
const DOCKER_COMPOSE_FILE_NAME = 'docker-compose.yml';

execSync(`rm -rf ${appName}`);
execSync(`mkdir ${appName}`);

execSync(`cd ${appName}`);

execSync(`cp ${__dirname}/${DOCKER_COMPOSE_FILE_PATH}/${DOCKER_COMPOSE_FILE_NAME} ${appName}/`);

console.log(execSync(`docker-compose -f ${appName}/${DOCKER_COMPOSE_FILE_NAME} up -d`).toString());

