console.log(`This process is pid ${process.pid}`);
process.stdout.write(`Current working directory: ${process.cwd()}\n`);

process.stdout.write('Type something then hit enter: \n');
process.stdin.setEncoding(`utf8`);
process.stdin.on(`readable`, () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`You wrote: ${chunk}`);
    process.exit(0);
  }
});

process.on(`exit`, (code) => {
  console.log(`This script has been running for ${process.uptime()} seconds`);
  console.log(`The process has now finished, exiting with code: ${code}`);
});