const os = require('os');

const homeDirectory = os.homedir();
console.log(`Your ho,e directory is: ${homeDirectory}`);

const osPlatform = os.platform();
console.log(`The OS platform is: ${osPlatform}`);

const osArchitecture = os.arch();
console.log(`The architecture of your computer is: ${osArchitecture}`);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;

console.log(`I can see your : ${cpuModel} has ${coreCount} cores`);

const hostName = os.hostname();
console.log(`Your hostname is: ${hostName}`);