console.clear();
const os = require('os');
const   arch = os.arch(),
        constants = os.constants,
        cpas = os.cpus()

console.log(`ARCH = ${arch}`, os.EOL);
console.log(constants);
console.table(cpas);
