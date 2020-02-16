module.exports = {
    run: (Bot, message, argument) => {
        class Computer {
            constructor() {
                require('fs').mkdirSync("./db/pc-"+argument);
            }
        }
    }
}