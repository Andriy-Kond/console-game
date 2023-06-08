console.log(process);
console.log(process.env);
console.log(process.argv);
console.log(process.argv[2]);

// // командний рядок "node index.js --arg -s 123123" через console.log(process.argv) поверне масив аргументів:
// [
//   'C:\\Program Files\\nodejs\\node.exe', - шлях до встановленого node
//   'D:\\Programming\\JS-Node-Tests\\Module-01\\console-game\\index.js', - шлях до теки файлу
//   '--arg',     - аргумент 01
//   '-s',        - аргумент 02
//   '123123',    - аргумент 03
// ];

// // node index.js --port 3000 --file /pathToTheFile
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Programming\\JS-Node-Tests\\Module-01\\console-game\\index.js',
//   '--port',
//   '3000',
//   '--file',
//   'C:/Program Files/Git/pathToTheFile',
// ];

console.log(__dirname); // D:\Programming\JS-Node-Tests\Module-01\console-game
console.log(__filename); // D:\Programming\JS-Node-Tests\Module-01\console-game\index.js

// cwd - current working directory
console.log(process.cwd()); // D:\Programming\JS-Node-Tests\Module-01\console-game

// Зупинити скрипт:
process.exit();
