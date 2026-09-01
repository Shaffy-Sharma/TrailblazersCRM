const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../../logs');
const logFile = path.join(logDir, 'test.log');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const timestamp = () => new Date().toISOString();

const writeLog = (level, message) => {
  const line = `[${timestamp()}] [${level}] ${message}\n`;
  fs.appendFileSync(logFile, line, 'utf8');
};

const logger = {
  info(message) {
    const text = `[INFO] ${message}`;
    console.log(text);
    writeLog('INFO', message);
  },

  step(message) {
    const text = `\n=== ${message} ===`;
    console.log(text);
    writeLog('STEP', message);
  },

  warn(message) {
    const text = `[WARN] ${message}`;
    console.warn(text);
    writeLog('WARN', message);
  },

  error(message) {
    const text = `[ERROR] ${message}`;
    console.error(text);
    writeLog('ERROR', message);
  },

  debug(message) {
    const text = `[DEBUG] ${message}`;
    console.log(text);
    writeLog('DEBUG', message);
  },
};

module.exports = logger;
