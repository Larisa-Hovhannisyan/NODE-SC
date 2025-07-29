const os = require('os');

function getFreeMemoryEverySecond() {
  setInterval(() => {
    const freeBytes = os.freemem();
    const freeMB = (freeBytes / (1024 * 1024));
    console.log(`Free memory: ${freeMB} MB`);
  }, 1000);
}

getFreeMemoryEverySecond();

