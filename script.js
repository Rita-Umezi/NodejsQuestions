// Complete question data extracted and processed from the provided text.
const allQuestions = [
    { q: "What is Node.js primarily used for?", options: ["Frontend Development", "Backend Development", "Database Management", "Game Development"], ans: "Backend Development" },
    { q: "Which language does Node.js use?", options: ["Python", "Java", "JavaScript", "Ruby"], ans: "JavaScript" },
    { q: "Node.js is based on which runtime environment?", options: ["V8", "Chakra", "SpiderMonkey", "Rhino"], ans: "V8" },
    { q: "How does Node.js handle I/O operations?", options: ["Synchronous", "Asynchronous", "Concurrent", "Serial"], ans: "Asynchronous" },
    { q: "Which keyword is used to import modules in Node.js?", options: ["import", "include", "require", "fetch"], ans: "require" },
    { q: "What does module.exports do?", options: ["Exports functions to other modules", "Initializes the module", "Imports other modules", "Sets up a new module"], ans: "Exports functions to other modules" },
    { q: "Which module is used for creating an HTTP server?", options: ["http", "server", "os", "express"], ans: "http" },
    { q: "What does NPM stand for?", options: ["Node Program Management", "Node Package Manager", "Network Program Manager", "Node Processing Module"], ans: "Node Package Manager" },
    { q: "How do you install a package globally using NPM?", options: ["npm install <package>", "npm install -g <package>", "npm add <package>", "npm -global install <package>"], ans: "npm install -g <package>" },
    { q: "What file contains dependencies for a Node.js project?", options: ["config.json", "npm.json", "package.json", "dependencies.json"], ans: "package.json" },
    { q: "Which function executes code after a specified delay?", options: ["setTimeout", "setInterval", "setDelay", "asyncFunction"], ans: "setTimeout" },
    { q: "Which Node.js module provides utilities for working with asynchronous callbacks?", options: ["fs", "async", "util", "callbacks"], ans: "util" },
    { q: "Node.js relies on which architecture to handle events?", options: ["Procedural", "Synchronous", "Event-driven", "Multi-threaded"], ans: "Event-driven" },
    { q: "Which module is central to event handling in Node.js?", options: ["fs", "events", "http", "emitter"], ans: "events" },
    { q: "What is Express.js primarily used for in Node.js?", options: ["Frontend styling", "Data modeling", "Server-side framework", "Testing"], ans: "Server-side framework" },
    { q: "What function is used to create a route in Express.js?", options: ["expressRoute()", "route()", "app.route()", "app.get()"], ans: "app.get()" },
    { q: "Which of the following is a best practice in Node.js?", options: ["Blocking I/O operations", "Using synchronous functions", "Using asynchronous patterns", "Ignoring error handling"], ans: "Using asynchronous patterns" },
    { q: "What type of logging is recommended for production?", options: ["console.log", "Verbose logging", "Structured logging", "Debug logging"], ans: "Structured logging" },
    { q: "Which protocol does WebSocket use?", options: ["HTTP", "HTTPS", "ws://", "socket.io"], ans: "ws://" },
    { q: "What is the primary purpose of WebSocket?", options: ["Database connections", "Real-time, two-way communication", "File transfer", "Video streaming"], ans: "Real-time, two-way communication" },
    { q: "In Express.js, middleware functions can modify the:", options: ["Request and response objects", "Database schema", "Network protocols", "HTML templates"], ans: "Request and response objects" },
    { q: "What is the typical position of middleware in Express routes?", options: ["Before the route handlers", "After the route handlers", "Middleware is independent of route handlers", "Middleware is only used with errors"], ans: "Before the route handlers" },
    { q: "Which method is used to read data in chunks in Node.js?", options: ["read()", "pipe()", "chunk()", "stream()"], ans: "pipe()" },
    { q: "Which type of stream is used to read data?", options: ["Writable", "Readable", "Duplex", "Transform"], ans: "Readable" },
    { q: "Which function is used to read a file synchronously in Node.js?", options: ["fs.read()", "fs.readSync()", "fs.readFileSync()", "fs.syncRead()"], ans: "fs.readFileSync()" },
    { q: "How do you write data to a file in an asynchronous way?", options: ["fs.writeFileSync", "fs.appendFile", "fs.writeFile", "fs.writeAsync"], ans: "fs.writeFile" },
    { q: "What does a Promise represent?", options: ["A synchronous function", "A completed task", "An eventual result of an asynchronous operation", "A user input"], ans: "An eventual result of an asynchronous operation" },
    { q: "What does the await keyword do in an async function?", options: ["Pauses execution until the Promise is resolved", "Rejects a Promise", "Schedules a callback", "Cancels an async function"], ans: "Pauses execution until the Promise is resolved" },
    { q: "What is the purpose of the Event Loop in Node.js?", options: ["Manages synchronous code", "Handles asynchronous operations", "Loads modules", "Manages HTTP requests"], ans: "Handles asynchronous operations" },
    { q: "The Event Loop executes which type of operations first?", options: ["Network I/O", "Timers", "Microtasks", "File operations"], ans: "Microtasks" },
    { q: "Which of the following is a Node.js feature?", options: ["Blocking I/O", "Single-threaded event loop", "Multi-threaded architecture", "Client-side scripting"], ans: "Single-threaded event loop" },
    { q: "What kind of applications is Node.js well-suited for?", options: ["CPU-intensive applications", "I/O-bound applications", "GUI-based applications", "Desktop applications"], ans: "I/O-bound applications" },
    { q: "Which built-in method is used to output logs to the console in Node.js?", options: ["log()", "console()", "output()", "console.log()"], ans: "console.log()" },
    { q: "Which of the following is NOT a core module in Node.js?", options: ["os", "http", "express", "path"], ans: "express" },
    { q: "How would you import a custom module located in the same directory?", options: ["require('./module')", "require('module')", "import('module')", "module.exports('./module')"], ans: "require('./module')" },
    { q: "How do you export multiple functions from a Node.js module?", options: ["Use exports object with named properties", "Use module.exports with named properties", "Use return statement", "Import both functions in a single file"], ans: "Use exports object with named properties" }, // Note: Both A and B are technically correct ways to achieve this, but A is often the canonical short form. Using 'Use exports object with named properties' as a representation of a correct answer.
    { q: "Which command lists globally installed npm packages?", options: ["npm list", "npm list -g", "npm -global list", "npm show global"], ans: "npm list -g" },
    { q: "What does the --save flag do when installing an npm package?", options: ["Installs the package locally", "Saves the package as a devDependency", "Adds the package to the dependencies field in package.json", "Deletes the package from node_modules"], ans: "Adds the package to the dependencies field in package.json" },
    { q: "How do you update npm itself to the latest version?", options: ["npm update npm", "npm install npm -g", "npm upgrade", "npm self-update"], ans: "npm install npm -g" },
    { q: "What does the callback function in asynchronous functions prevent?", options: ["Race conditions", "Deadlocks", "Blocking code execution", "High memory usage"], ans: "Blocking code execution" },
    { q: "Which of the following can handle asynchronous operations in Node.js?", options: ["Events", "Promises", "async/await", "All of the above"], ans: "All of the above" },
    { q: "What is a callback hell?", options: ["A situation with nested callbacks, making code unreadable", "Errors that occur in callback functions", "A place in memory where callbacks are stored", "When a callback is executed multiple times"], ans: "A situation with nested callbacks, making code unreadable" },
    { q: "How do you listen to events in Node.js?", options: ["By calling event.on()", "By calling event.listen()", "By using event.subscribe()", "By creating a new EventListener()"], ans: "By calling event.on()" },
    { q: "Which method is used to emit an event in Node.js?", options: ["emit()", "on()", "trigger()", "call()"], ans: "emit()" },
    { q: "What is a key advantage of an event-driven model in Node.js?", options: ["It handles synchronous code efficiently", "It improves memory management", "It scales well for handling multiple I/O requests", "It requires no error handling"], ans: "It scales well for handling multiple I/O requests" },
    { q: "What is the default port used by Express applications?", options: ["80", "443", "3000", "5000"], ans: "3000" },
    { q: "Which middleware is commonly used for parsing JSON in Express?", options: ["body-parser", "json-parser", "cookie-parser", "express-parser"], ans: "body-parser" },
    { q: "How do you handle errors globally in Express?", options: ["Using error-handling middleware", "Catching errors in every route", "Using try-catch in each route", "By ignoring error codes"], ans: "Using error-handling middleware" },
    { q: "What is a recommended way to structure a Node.js project?", options: ["Keep all code in one file", "Use modularized code with separate files for routes, models, etc.", "Combine frontend and backend code", "Write all functions globally"], ans: "Use modularized code with separate files for routes, models, etc." },
    { q: "What should you avoid when working with sensitive data in Node.js?", options: ["Using environment variables", "Hardcoding sensitive information", "Using third-party libraries", "Minifying code"], ans: "Hardcoding sensitive information" },
    { q: "Why is it recommended to use async/await in Node.js applications?", options: ["It improves error handling and readability", "It makes code synchronous", "It blocks the Event Loop", "It executes code faster"], ans: "It improves error handling and readability" },
    { q: "Which library is commonly used for WebSocket communication in Node.js?", options: ["http", "ws", "socket.io", "net"], ans: "socket.io" },
    { q: "What method initiates a WebSocket connection?", options: ["ws.start()", "ws.connect()", "new WebSocket()", "ws.open()"], ans: "new WebSocket()" },
    { q: "What does WebSocket enable for real-time applications?", options: ["File upload", "Bi-directional communication", "Asynchronous file read", "HTTP-based communication"], ans: "Bi-directional communication" },
    { q: "What is the role of next() in Express middleware?", options: ["Ends the request-response cycle", "Passes control to the next middleware", "Caches the response", "Initializes the app"], ans: "Passes control to the next middleware" },
    { q: "In which order does Express execute middleware functions?", options: ["Alphabetical order", "Reverse order of declaration", "Order of declaration", "Random order"], ans: "Order of declaration" },
    { q: "How can you pipe data from a readable stream to a writable stream in Node.js?", options: ["readable.pipe(writable)", "writable.pipe(readable)", "readable.write(writable)", "writable.read(readable)"], ans: "readable.pipe(writable)" },
    { q: "Which event is emitted when a readable stream ends?", options: ["close", "end", "finish", "stop"], ans: "end" },
    { q: "Which method is used to check if a file exists in Node.js?", options: ["fs.existsSync()", "fs.fileExists()", "fs.check()", "fs.accessSync()"], ans: "fs.existsSync()" },
    { q: "Which fs method is used to delete a file asynchronously?", options: ["fs.delete()", "fs.remove()", "fs.unlink()", "fs.rm()"], ans: "fs.unlink()" },
    { q: "What does the then() method of a Promise do?", options: ["Chains asynchronous operations", "Returns a resolved Promise", "Handles synchronous code", "Throws an error"], ans: "Chains asynchronous operations" },
    { q: "How do you handle errors in a Promise chain?", options: ["By using a second argument in then()", "By using a .catch() method", "By ignoring them", "By using await"], ans: "By using a .catch() method" },
    { q: "What kind of tasks does the Event Loop prioritize in Node.js?", options: ["Network requests", "Timers", "Microtasks", "File I/O"], ans: "Microtasks" },
    { q: "What are the phases of the Event Loop?", options: ["Timers, I/O callbacks, close callbacks, poll, check, and immediate", "Main phase and secondary phase", "Setup and teardown", "Input phase and output phase"], ans: "Timers, I/O callbacks, close callbacks, poll, check, and immediate" },
    { q: "Which of the following describes Node.js's single-threaded model?", options: ["All code executes on a single thread, blocking I/O", "Node.js uses multiple threads for I/O and executes code in parallel", "Node.js uses a single thread but handles I/O asynchronously", "Node.js is only capable of executing one process at a time"], ans: "Node.js uses a single thread but handles I/O asynchronously" },
    { q: "Which of the following is true about Node.js?", options: ["Node.js is only for web servers", "Node.js uses an event-driven, non-blocking I/O model", "Node.js only works on Linux systems", "Node.js is a framework"], ans: "Node.js uses an event-driven, non-blocking I/O model" },
    { q: "Which built-in Node.js module allows you to work with the operating system?", options: ["fs", "os", "http", "path"], ans: "os" },
    { q: "Which module allows you to parse JSON files in Node.js?", options: ["json-parser", "json", "fs", "path"], ans: "fs" },
    { q: "How do you access the version of a Node.js module from within your code?", options: ["module.version", "require('module').version", "module.info()", "node.getVersion()"], ans: "require('module').version" },
    { q: "How can you use a Node.js module without installing it?", options: ["By using require() and specifying a path to the module", "By downloading the module manually", "By specifying global keyword", "By creating a symbolic link"], ans: "By using require() and specifying a path to the module" },
    { q: "Which command is used to initialize a new Node.js project and generate a package.json file?", options: ["npm create", "npm init", "npm start", "npm install"], ans: "npm init" },
    { q: "How would you uninstall a package globally using NPM?", options: ["npm uninstall <package> -g", "npm remove <package> --global", "npm delete -g <package>", "npm remove --global <package>"], ans: "npm uninstall <package> -g" },
    { q: "Which command can you use to check for outdated npm packages?", options: ["npm outdated", "npm check", "npm list --outdated", "npm update --outdated"], ans: "npm outdated" },
    { q: "Which function is used to schedule a one-time delay for executing code in Node.js?", options: ["setTimeout()", "setInterval()", "setDelay()", "asyncWait()"], ans: "setTimeout()" },
    { q: "What happens if a callback function is not passed to an asynchronous function?", options: ["The function will execute synchronously", "The callback is ignored and the function continues executing", "The function throws an error", "The program stops running"], ans: "The function throws an error" },
    { q: "Which method in Node.js can handle multiple asynchronous operations concurrently?", options: ["async.series()", "async.parallel()", "Promise.all()", "async.all()"], ans: "Promise.all()" },
    { q: "How do you define an event emitter in Node.js?", options: ["new EventEmitter()", "events.createEmitter()", "Emitter.create()", "new EventListener()"], ans: "new EventEmitter()" },
    { q: "What will happen if an event is emitted but no listeners are attached in Node.js?", options: ["Nothing happens", "The event will be lost", "Node.js throws an error", "Node.js will create a default listener"], ans: "Nothing happens" },
    { q: "How do you remove a listener from an event emitter?", options: ["emitter.removeListener(event, listener)", "emitter.off(event, listener)", "emitter.remove(event)", "emitter.remove(listener)"], ans: "emitter.removeListener(event, listener)" }, // Both A and B are correct in Node.js/EventEmitter
    { q: "Which method is used to serve static files in Express.js?", options: ["app.use(express.static())", "express.serveStatic()", "app.serveStatic()", "express.static()"], ans: "app.use(express.static())" },
    { q: "Which HTTP method does Express.js use to handle POST requests?", options: ["app.get()", "app.post()", "app.put()", "app.delete()"], ans: "app.post()" },
    { q: "Which of the following is correct for handling errors in Express?", options: ["app.error()", "app.handleError()", "app.use() with a four-argument function", "express.use()"], ans: "app.use() with a four-argument function" },
    { q: "What should be the main concern when handling errors in Node.js?", options: ["Ignore errors for faster execution", "Propagate errors to higher-level handlers for logging and reporting", "Log errors without stopping execution", "Catch and suppress errors to prevent crashes"], ans: "Propagate errors to higher-level handlers for logging and reporting" },
    { q: "Which tool is commonly used for testing Node.js applications?", options: ["Jest", "Mocha", "Jasmine", "All of the above"], ans: "All of the above" },
    { q: "Why is using environment variables for configuration considered a best practice?", options: ["It allows easier switching between development, staging, and production environments", "It helps to debug the application", "It improves code readability", "It keeps configuration details in the codebase"], ans: "It allows easier switching between development, staging, and production environments" },
    { q: "How do WebSockets maintain an open connection?", options: ["By keeping an HTTP request open", "By using long polling", "By maintaining a persistent TCP connection", "By creating a new connection for each message"], ans: "By maintaining a persistent TCP connection" },
    { q: "Which of the following best describes WebSocket's advantages?", options: ["Full-duplex communication with low latency", "Single-direction communication only", "No support for large messages", "Slower than HTTP"], ans: "Full-duplex communication with low latency" },
    { q: "Which WebSocket event is fired when the connection is closed?", options: ["close", "end", "terminate", "disconnect"], ans: "close" },
    { q: "What is the purpose of body parsers in Express.js middleware?", options: ["To parse incoming request bodies in various formats", "To handle errors in the request body", "To compress incoming requests", "To convert request bodies to JSON"], ans: "To parse incoming request bodies in various formats" },
    { q: "Which method in Express allows for chaining multiple middleware?", options: ["app.all()", "app.use()", "app.route()", "app.middleware()"], ans: "app.use()" },
    { q: "Which HTTP method is used to mount middleware that applies to a specific route?", options: ["app.use()", "app.get()", "app.post()", "app.all()"], ans: "app.get()" },
    { q: "What is the difference between a readable and a writable stream in Node.js?", options: ["Readable streams emit data that can be consumed, while writable streams accept data to write", "Readable streams store data, while writable streams send data", "Readable streams are for network operations, writable streams are for file I/O", "Writable streams process data asynchronously, readable streams process it synchronously"], ans: "Readable streams emit data that can be consumed, while writable streams accept data to write" },
    { q: "Which stream method is used to pipe the output of one stream into another?", options: ["pipe()", "link()", "merge()", "flow()"], ans: "pipe()" },
    { q: "Which method allows asynchronous reading of a file in Node.js?", options: ["fs.readFileSync()", "fs.readFile()", "fs.read()", "fs.asyncRead()"], ans: "fs.readFile()" },
    { q: "Which of the following will create a new directory asynchronously?", options: ["fs.mkdirSync()", "fs.createDirectory()", "fs.mkdir()", "fs.create()"], ans: "fs.mkdir()" },
    { q: "Which of the following does the async keyword indicate in front of a function?", options: ["The function will return a Promise", "The function executes synchronously", "The function will handle asynchronous events", "The function is error-prone"], ans: "The function will return a Promise" },
    { q: "What does Promise.all() return when one of the promises fails?", options: ["Promise.reject()", "Promise.all() ignores the failure", "Promise.all() waits for all promises", "Promise.all() rejects with the error of the first failed promise"], ans: "Promise.all() rejects with the error of the first failed promise" },
    { q: "At which phase does the Event Loop process I/O events?", options: ["Poll phase", "Timer phase", "Check phase", "Immediate phase"], ans: "Poll phase" },
    { q: "What is the main role of the Event Loop in Node.js?", options: ["Handle HTTP requests", "Manage event listeners and asynchronous operations", "Execute synchronous code only", "Process database queries"], ans: "Manage event listeners and asynchronous operations" },
    { q: "Which phase comes after the poll phase in the Node.js Event Loop?", options: ["Check phase", "Immediate phase", "Timer phase", "Idle phase"], ans: "Check phase" },
    { q: "Which of the following can be considered an advantage of using Node.js for server-side development?", options: ["High CPU usage", "Non-blocking I/O model", "Multi-threaded execution", "Supports synchronous file I/O"], ans: "Non-blocking I/O model" },
    { q: "What does the process.exit() method do in a Node.js application?", options: ["Exits the process without cleaning up resources", "Stops the event loop and terminates the Node.js process", "Exits the current function", "Pauses the application execution"], ans: "Stops the event loop and terminates the Node.js process" },
    { q: "Which of the following is used to handle child processes in Node.js?", options: ["Os", "http", "child_process", "fs"], ans: "child_process" },
    { q: "What does the module.exports object in Node.js do?", options: ["Exports data from one module to another", "Sets the default global object", "Imports data into the current module", "Imports libraries from other modules"], ans: "Exports data from one module to another" },
    { q: "Which of the following is NOT a feature of Node.js modules?", options: ["Encapsulation of code", "Code reusability", "Blocking I/O", "Support for synchronous code execution"], ans: "Blocking I/O" },
    { q: "Which of the following will import a file located in a different directory?", options: ["require('./myModule')", "require('../myModule')", "require('/myModule')", "import myModule"], ans: "require('../myModule')" },
    { q: "Which command installs all dependencies listed in package.json?", options: ["npm install", "npm update", "npm upgrade", "npm start"], ans: "npm install" },
    { q: "Which file is created when you initialize a Node.js project using npm init?", options: ["index.js", "node_modules.json", "package.json", "dependencies.json"], ans: "package.json" },
    { q: "How can you uninstall a package without removing its dependencies?", options: ["npm remove --no-deps <package>", "npm uninstall <package>", "npm delete <package>", "npm clear <package>"], ans: "npm uninstall <package>" },
    { q: "Which of the following is a correct way to use async/await in Node.js?", options: ["Using await inside non-async functions", "Using async in place of promises", "Wrapping the function call in a promise manually", "Using await only with synchronous functions"], ans: "Using async in place of promises" }, // The prompt's answer 'B' is slightly ambiguous; the best fit is "The function will return a Promise" (Q96) or "It improves error handling and readability" (Q51). Here, "Using async in place of promises" is the closest given the choices' style.
    { q: "How do you execute multiple promises in parallel using Promise.all()?", options: ["Promise.all([promise1, promise2])", "Promise.all(promise1, promise2)", "Promise.all(promise1 && promise2)", "Promise.parallel([promise1, promise2])"], ans: "Promise.all([promise1, promise2])" },
    { q: "Which is the best way to handle errors in async functions?", options: ["Using .catch() after calling the async function", "Wrapping async calls inside try/catch blocks", "Letting the function crash if an error occurs", "Returning null or undefined for errors"], ans: "Wrapping async calls inside try/catch blocks" },
    { q: "In Node.js, what type of pattern is commonly used for managing events?", options: ["Publisher-Subscriber pattern", "Observer pattern", "Event Queue pattern", "Request-Response pattern"], ans: "Publisher-Subscriber pattern" },
    { q: "What is emitted when an error occurs in Node.js Event Emitters?", options: ["error event", "exception event", "errorOccurred event", "failure event"], ans: "error event" },
    { q: "Which method allows you to remove all listeners for a specific event in Node.js?", options: ["emitter.removeAllListeners()", "emitter.removeListeners()", "emitter.clearListeners()", "emitter.deleteListeners()"], ans: "emitter.removeAllListeners()" },
    { q: "What does app.listen() do in an Express.js application?", options: ["Starts a web server that listens for incoming HTTP requests", "It listens for errors in the application", "Starts a database connection", "Mounts middleware on routes"], ans: "Starts a web server that listens for incoming HTTP requests" },
    { q: "How would you define a route for handling GET requests at the /home path in Express?", options: ["app.get('/home', function(req, res) {...})", "app.route('/home').get(function(req, res) {...})", "app.router('/home').get(function(req, res) {...})", "app.router('/home').post(function(req, res) {...})"], ans: "app.get('/home', function(req, res) {...})" }, // Both A and B are technically correct
    { q: "Which middleware is used to handle cookie parsing in Express?", options: ["cookie-parser", "cookie-handler", "cookie-manager", "express-cookie"], ans: "cookie-parser" },
    { q: "What is the purpose of using a .env file in Node.js projects?", options: ["To manage environment variables", "To define constants", "To store file paths", "To store sensitive code"], ans: "To manage environment variables" },
    { q: "Which of the following is a best practice when dealing with untrusted data in Node.js applications?", options: ["Always sanitize input to prevent security vulnerabilities", "Ignore potential security threats from untrusted data", "Store sensitive data like passwords in plain text", "Validate data only on the client side"], ans: "Always sanitize input to prevent security vulnerabilities" },
    { q: "Which logging library is often used in Node.js applications for structured logging?", options: ["Winston", "log4js", "morgan", "All of the above"], ans: "All of the above" },
    { q: "Which event is triggered when a WebSocket connection is established?", options: ["Open", "Connect", "Start", "Ready"], ans: "Open" },
    { q: "How do you send data from a WebSocket server to the client?", options: ["ws.send(data)", "ws.emit(data)", "ws.push(data)", "ws.broadcast(data)"], ans: "ws.send(data)" },
    { q: "What is the purpose of WebSocket's ping and pong messages?", options: ["To maintain the connection alive and measure latency", "To send binary data", "To exchange authentication tokens", "To compress the message payload"], ans: "To maintain the connection alive and measure latency" },
    { q: "What does the next() function do in middleware for handling requests in Express.js?", options: ["It proceeds to the next middleware or route handler", "It closes the connection to the client", "It terminates the request-response cycle", "It suspends the request"], ans: "It proceeds to the next middleware or route handler" },
    { q: "Which type of middleware is executed before route handling middleware in Express?", options: ["Application-level middleware", "Route-level middleware", "Error-handling middleware", "Built-in middleware"], ans: "Application-level middleware" },
    { q: "How can you limit the number of requests made by the client in a certain period?", options: ["By using rate-limiting middleware", "By applying custom logic to each route", "By using app.use() for validation", "By setting cookies in the response"], ans: "By using rate-limiting middleware" },
    { q: "Which method is used to read data from a readable stream?", options: ["stream.read()", "stream.pipe()", "stream.output()", "stream.get()"], ans: "stream.read()" },
    { q: "What is the advantage of using streams over loading a file entirely into memory?", options: ["Streams allow reading and writing data as it is being processed, reducing memory usage", "Streams store data in memory and thus are faster", "Streams process files more slowly", "Streams require less CPU usage"], ans: "Streams allow reading and writing data as it is being processed, reducing memory usage" },
    { q: "How can you pause a readable stream?", options: ["stream.pause()", "stream.stop()", "stream.close()", "stream.suspend()"], ans: "stream.pause()" },
    { q: "Which of the following is the primary reason Node.js is preferred for I/O-heavy applications?", options: ["It uses a synchronous execution model", "It uses non-blocking, event-driven architecture", "It is easy to implement multi-threading", "It runs on multiple processors concurrently"], ans: "It uses non-blocking, event-driven architecture" },
    { q: "Which of the following is true about Node.js?", options: ["Node.js is used for frontend development only", "Node.js is a multi-threaded framework", "Node.js is a runtime environment that runs JavaScript code outside of the browser", "Node.js is used only for building web pages"], ans: "Node.js is a runtime environment that runs JavaScript code outside of the browser" },
    { q: "Which built-in Node.js module helps you work with paths and file system operations?", options: ["http", "path", "events", "fs"], ans: "path" },
    { q: "How would you require a JSON file in Node.js?", options: ["require('./data.json')", "import('./data.json')", "require('./data.json') (but only if it contains JavaScript code)", "require('./data')"], ans: "require('./data.json')" },
    { q: "Which command can you use to create a custom module in Node.js?", options: ["node module.create", "require('./myModule')", "module.exports", "Custom modules are not allowed in Node.js"], ans: "module.exports" },
    { q: "What is the purpose of exports in Node.js?", options: ["It is used to define global variables", "It is used to import external libraries", "It is used to export functions or objects from a module", "It initializes Node.js built-in modules"], ans: "It is used to export functions or objects from a module" },
    { q: "Which command installs a package globally?", options: ["npm install <package>", "npm install <package> -g", "npm add <package>", "npm global-install <package>"], ans: "npm install <package> -g" },
    { q: "How can you search for a package using NPM?", options: ["npm search <package>", "npm find <package>", "npm search --global <package>", "npm query <package>"], ans: "npm search <package>" },
    { q: "What is package-lock.json used for?", options: ["To lock the current version of Node.js", "To lock the versions of dependencies for consistency", "To specify the package manager version", "To store the list of globally installed packages"], ans: "To lock the versions of dependencies for consistency" },
    { q: "What happens when you call an asynchronous function without a callback in Node.js?", options: ["The function execution is blocked until completion", "An error is thrown", "The callback is passed automatically", "The function executes synchronously"], ans: "An error is thrown" },
    { q: "What is the main difference between callbacks and promises in Node.js?", options: ["Promises are synchronous, while callbacks are asynchronous", "Promises simplify chaining of asynchronous operations, while callbacks can lead to callback hell", "Callbacks allow more fine-grained control over I/O operations", "Promises are only useful for I/O operations, callbacks are for CPU-intensive tasks"], ans: "Promises simplify chaining of asynchronous operations, while callbacks can lead to callback hell" },
    { q: "Which of the following would you use to handle multiple asynchronous tasks and wait for them all to complete?", options: ["Promise.any()", "Promise.all()", "async.parallel()", "Promise.resolve()"], ans: "Promise.all()" },
    { q: "What is the default maximum number of listeners for each event in Node.js's EventEmitter?", options: ["10", "100", "50", "1"], ans: "10" },
    { q: "Which of the following is true about events in Node.js?", options: ["Events are used only for managing HTTP requests", "Events provide an easy way to handle asynchronous operations without blocking", "Node.js does not support event-driven programming", "Events are only used for file system operations"], ans: "Events provide an easy way to handle asynchronous operations without blocking" },
    { q: "How do you emit a custom event in Node.js?", options: ["emitter.emit('eventName')", "emitter.raise('eventName')", "emitter.dispatch('eventName')", "emitter.trigger('eventName')"], ans: "emitter.emit('eventName')" },
    { q: "What does the express.Router() method do?", options: ["Creates a new middleware function", "Creates a route handler for a specific path", "Creates a new router object for routing HTTP requests", "Sets a custom error handler"], ans: "Creates a new router object for routing HTTP requests" },
    { q: "Which of the following is true about using middleware in Express.js?", options: ["Middleware runs before the route handler", "Middleware runs after the route handler", "Middleware can only handle POST requests", "Middleware can only be used with static files"], ans: "Middleware runs before the route handler" },
    { q: "Which HTTP method should you use to handle form submissions in Express?", options: ["app.get()", "app.delete()", "app.post()", "app.head()"], ans: "app.post()" },
    { q: "Which of the following should you consider when writing scalable applications in Node.js?", options: ["Using blocking I/O calls", "Avoiding error handling", "Leveraging asynchronous code", "Writing all logic in a single function"], ans: "Leveraging asynchronous code" },
    { q: "Which of the following is a good practice when deploying a Node.js application in production?", options: ["Enabling full error logs in production", "Running Node.js as a non-root user", "Disabling clustering", "Ignoring security updates"], ans: "Running Node.js as a non-root user" },
    { q: "What is one of the most common ways to monitor a Node.js application in production?", options: ["Using console.log() for every request", "Using application performance monitoring (APM) tools like New Relic or Datadog", "Only running the application locally", "Disabling error reporting in production"], ans: "Using application performance monitoring (APM) tools like New Relic or Datadog" },
    { q: "What type of protocol does WebSocket use for communication?", options: ["HTTP", "HTTPS", "TCP", "UDP"], ans: "TCP" },
    { q: "What happens if you try to send a message over a closed WebSocket connection?", options: ["The message is queued", "The message is lost", "An error is thrown", "The message is automatically retransmitted"], ans: "An error is thrown" },
    { q: "Which of the following is a key feature of WebSocket?", options: ["One-way communication from client to server", "Persistent, full-duplex communication between the client and server", "Only supports binary data", "Uses request-response model like HTTP"], ans: "Persistent, full-duplex communication between the client and server" },
    { q: "How can you create a custom error-handling middleware in Express.js?", options: ["By using app.use() with four arguments", "By using app.error()", "By using app.custom()", "By defining an error event listener"], ans: "By using app.use() with four arguments" },
    { q: "Which middleware in Express helps in parsing incoming JSON data?", options: ["express.json()", "express.bodyParser()", "express.parseJSON()", "express.body()"], ans: "express.json()" },
    { q: "How would you prevent a specific route in Express from being accessed by unauthorized users?", options: ["Using middleware for authentication and authorization checks", "Redirecting users to the homepage", "Disabling routing for that path", "Allowing all routes to handle authentication"], ans: "Using middleware for authentication and authorization checks" },
    { q: "Which of the following methods can be used to pipe a readable stream to a writable stream?", options: ["stream.pipe(destination)", "stream.writeTo(destination)", "stream.transfer(destination)", "stream.send(destination)"], ans: "stream.pipe(destination)" },
    { q: "What type of stream is used for reading data from a file in Node.js?", options: ["Readable stream", "Writable stream", "Duplex stream", "Transform stream"], ans: "Readable stream" },
    { q: "What method would you use to end a writable stream after writing data?", options: ["stream.close()", "stream.end()", "stream.stop()", "stream.closeWrite()"], ans: "stream.end()" },
    { q: "Which Node.js function is used to get the current working directory?", options: ["process.cwd()", "os.cwd()", "path.cwd()", "process.getcwd()"], ans: "process.cwd()" },
    { q: "What is the primary role of Node.js in the MEAN stack?", options: ["It provides the database interface", "It is used for backend server-side logic", "It is used for client-side rendering", "It handles the routing of HTTP requests"], ans: "It is used for backend server-side logic" },
    { q: "Which of the following is NOT a common use case for Node.js?", options: ["Real-time web applications", "APIs for single-page applications", "Heavy computational tasks", "Microservices"], ans: "Heavy computational tasks" },
    { q: "How would you load a local module in Node.js?", options: ["require('moduleName')", "require('./moduleName')", "import('./moduleName')", "module.import('./moduleName')"], ans: "require('./moduleName')" },
    { q: "Which of the following is the correct way to export a single function from a module in Node.js?", options: ["module.exports = function() { ... };", "exports = function() { ... };", "module.export = function() { ... };", "export function() { ... };"], ans: "module.exports = function() { ... };" },
    { q: "Which Node.js module can be used to interact with the operating system and retrieve system information?", options: ["Path", "Os", "http", "fs"], ans: "Os" },
    { q: "How would you view the details of a specific package installed via NPM?", options: ["npm show <package>", "npm info <package>", "npm details <package>", "Both a and b"], ans: "Both a and b" },
    { q: "Which of the following NPM commands creates a package-lock.json file?", options: ["npm install", "npm init", "npm update", "npm config set"], ans: "npm install" },
    { q: "What command is used to install a package as a development dependency in NPM?", options: ["npm install --dev <package>", "npm install <package> --save-dev", "npm dev-install <package>", "npm install <package> -d"], ans: "npm install <package> --save-dev" },
    { q: "Which function is used to handle the result of an asynchronous operation in a promise chain?", options: [".catch()", ".then()", ".finally()", ".complete()"], ans: ".then()" },
    { q: "What does the async keyword do in an asynchronous function?", options: ["It allows the function to be executed synchronously", "It signals the function to return a promise", "It automatically catches all errors in the function", "It delays the execution of the function"], ans: "It signals the function to return a promise" },
    { q: "What happens if you throw an error inside an async function?", options: ["It is caught automatically by the catch() method", "It is thrown immediately", "It creates a promise rejection", "It logs the error to the console"], ans: "It creates a promise rejection" },
    { q: "Which of the following is true about event-driven architecture in Node.js?", options: ["It relies on synchronous execution of events", "It uses callbacks and event emitters to handle multiple operations concurrently", "It is used only for web servers", "It does not support asynchronous programming"], ans: "It uses callbacks and event emitters to handle multiple operations concurrently" },
    { q: "How can you modify the maximum number of listeners for an event in Node.js?", options: ["emitter.setMaxListeners(20)", "emitter.maxListeners(20)", "emitter.changeMaxListeners(20)", "emitter.setListeners(20)"], ans: "emitter.setMaxListeners(20)" },
    { q: "Which method would you use to listen for custom events in Node.js?", options: ["emitter.on('eventName', callback)", "emitter.addListener('eventName', callback)", "Both a and b", "emitter.listen('eventName', callback)"], ans: "Both a and b" },
    { q: "Which middleware function is commonly used to log HTTP requests in Express.js?", options: ["Morgan", "body-parser", "cookie-parser", "express-log"], ans: "Morgan" },
    { q: "How would you add a route that listens for PUT requests at the /update path in Express?", options: ["app.put('/update', (req, res) => {...})", "app.patch('/update', (req, res) => {...})", "app.put('/update', (req) => {...})", "app.post('/update', (req, res) => {...})"], ans: "app.put('/update', (req, res) => {...})" },
    { q: "Which of the following is the correct way to handle static files in Express?", options: ["app.use(express.static('public'))", "app.static('public')", "app.useStatic('public')", "app.staticFiles('public')"], ans: "app.use(express.static('public'))" },
    { q: "Which of the following is a best practice for handling errors in Node.js applications?", options: ["Throwing errors without logging them", "Using try/catch for synchronous code and .catch() for promises", "Letting errors propagate to the top level", "Ignoring errors to prevent performance issues"], ans: "Using try/catch for synchronous code and .catch() for promises" },
    { q: "Which of the following is the best approach for managing a large Node.js application?", options: ["Writing all the code in a single file", "Using modules to break down the application into smaller components", "Only using a single routing file for simplicity", "Avoiding the use of external libraries"], ans: "Using modules to break down the application into smaller components" },
    { q: "What should you do to handle uncaught exceptions in a Node.js application?", options: ["Let the process exit and restart it manually", "Use process.on('uncaughtException', callback) to handle them", "Ignore the error, Node.js will automatically handle it", "Exit the process and do not restart it"], ans: "Use process.on('uncaughtException', callback) to handle them" },
    { q: "Which WebSocket method would you use to send a message from the server to the client?", options: ["ws.send()", "ws.emit()", "ws.sendMessage()", "ws.push()"], ans: "ws.send()" },
    { q: "Which of the following is the correct way to close a WebSocket connection from the server?", options: ["ws.close()", "ws.disconnect()", "ws.terminate()", "ws.end()"], ans: "ws.close()" },
    { q: "How do you handle WebSocket message events in the client?", options: ["socket.on('message', (data) => {...})", "socket.receive('message', (data) => {...})", "socket.message('message', (data) => {...})", "socket.listen('message', (data) => {...})"], ans: "socket.on('message', (data) => {...})" },
    { q: "How would you add a middleware that runs only for specific HTTP methods in Express?", options: ["app.use(method, middleware)", "app.use('/path', method, middleware)", "app[method]('/path', middleware)", "app.method('/path', middleware)"], ans: "app[method]('/path', middleware)" },
    { q: "Which of the following is used to serve static files in Express?", options: ["app.use(express.static(path))", "app.serve(path)", "app.staticFiles(path)", "app.serveStatic(path)"], ans: "app.use(express.static(path))" },
    { q: "How would you add a middleware for handling JSON payloads in Express.js?", options: ["app.use(express.json())", "app.json(express())", "app.bodyParser()", "app.use(express.payload())"], ans: "app.use(express.json())" },
    { q: "Which of the following streams can be used to transform data before passing it to the next stream?", options: ["Readable stream", "Writable stream", "Transform stream", "Duplex stream"], ans: "Transform stream" },
    { q: "Which method is used to pause a writable stream?", options: ["stream.pause()", "stream.stop()", "stream.end()", "stream.suspend()"], ans: "stream.pause()" },
    { q: "What is the purpose of the stream.finished() method in Node.js?", options: ["To check if the stream is currently active", "To check if the stream has completed processing", "To stop all ongoing operations", "To close the stream immediately"], ans: "To check if the stream has completed processing" },
    { q: "What is the output of console.log(process.argv) in a Node.js program?", options: ["Array of command-line arguments passed to the program", "Path of the current script", "The Node.js version", "List of dependencies in package.json"], ans: "Array of command-line arguments passed to the program" },
    { q: "Which of the following would be the best way to ensure your Node.js application handles a large number of concurrent users?", options: ["Use synchronous I/O operations", "Use asynchronous I/O operations with callbacks or promises", "Run Node.js in a single-threaded environment", "Ignore error handling to improve performance"], ans: "Use asynchronous I/O operations with callbacks or promises" },
    { q: "Which command would you use to check the version of Node.js installed on your system?", options: ["node –version", "node –v", "node version", "Both a and b"], ans: "Both a and b" },
    { q: "What does require() do in Node.js?", options: ["Loads a file and evaluates it, returning the exported module", "Loads a library into the global namespace", "Executes the entire Node.js program", "Imports a module from another server"], ans: "Loads a file and evaluates it, returning the exported module" },
    { q: "How do you export an object from a Node.js module?", options: ["module.export = object", "exports = object", "module.exports = object", "object.export()"], ans: "module.exports = object" },
    { q: "Which of the following will correctly import the fs module in Node.js?", options: ["import fs from 'fs'", "require('fs')", "import * as fs from 'fs'", "import module from 'fs'"], ans: "require('fs')" }, // Both A and B are correct depending on module type, but B is standard CommonJS in Node.js
    { q: "What does the command npm uninstall <package> do?", options: ["Removes the package and its dependencies from the project", "Removes the package from the global package registry", "Removes the package only from the node_modules directory", "Uninstalls the global NPM package"], ans: "Removes the package and its dependencies from the project" },
    { q: "What does the npm outdated command do?", options: ["Lists all outdated packages that need updating", "Displays the status of the current project", "Lists all installed global packages", "Updates packages to the latest version"], ans: "Lists all outdated packages that need updating" },
    { q: "What is the purpose of the npm update command?", options: ["It updates the project's dependencies to the latest versions specified in package.json", "It updates Node.js itself", "It upgrades NPM to the latest version", "It only updates the dependencies in package-lock.json"], ans: "It updates the project's dependencies to the latest versions specified in package.json" },
    { q: "Which of the following is a method used to handle multiple promises concurrently and return a single promise?", options: ["Promise.all()", "Promise.race()", "Promise.finally()", "Promise.any()"], ans: "Promise.all()" },
    { q: "What does await do in JavaScript?", options: ["It pauses the execution of the async function until the promise is resolved or rejected", "It starts a promise-based function", "It handles promise rejections", "It waits for a setTimeout to finish"], ans: "It pauses the execution of the async function until the promise is resolved or rejected" },
    { q: "Which function is used to handle promise rejections in Node.js?", options: [".catch()", ".then()", ".finally()", ".reject()"], ans: ".catch()" },
    { q: "What is an event loop in Node.js?", options: ["A mechanism that schedules and processes events asynchronously in a non-blocking way", "A loop that listens to events in real-time", "A function that processes events sequentially", "A framework for handling multiple clients"], ans: "A mechanism that schedules and processes events asynchronously in a non-blocking way" },
    { q: "How can you remove all listeners for a specific event from an EventEmitter instance?", options: ["emitter.removeListener('eventName')", "emitter.removeAllListeners('eventName')", "emitter.off('eventName')", "emitter.clearListeners('eventName')"], ans: "emitter.removeAllListeners('eventName')" },
    { q: "What is the purpose of the once() method in Node.js EventEmitter?", options: ["To listen for events that should be triggered only once", "To fire an event only once during program execution", "To reset all events to be triggered once", "To delay an event execution until a condition is met"], ans: "To listen for events that should be triggered only once" },
    { q: "Which method is used to send an HTTP response with a specific HTTP status code in Express?", options: ["res.statusCode(404)", "res.sendStatus(404)", "res.send(404)", "res.status(404).send('Not Found')"], ans: "res.status(404).send('Not Found')" },
    { q: "Which of the following is used to parse incoming requests with JSON payloads in Express?", options: ["app.use(express.json())", "app.use(bodyParser.json())", "app.use(express.bodyParser())", "app.bodyParser()"], ans: "app.use(express.json())" },
    { q: "How can you chain route handlers in Express.js?", options: ["Using app.route()", "Using app.all()", "Using app.handle()", "Using app.middleware()"], ans: "Using app.route()" },
    { q: "Which of the following is a common practice for optimizing performance in Node.js?", options: ["Avoid using asynchronous code", "Use global variables extensively to speed up access", "Avoid using console.log() in production", "Ignore error handling to avoid overhead"], ans: "Avoid using console.log() in production" },
    { q: "When should you use environment variables in a Node.js application?", options: ["To store sensitive configuration data like API keys and database credentials", "To store application logic", "To store client-side data for use in templates", "Only to store temporary data"], ans: "To store sensitive configuration data like API keys and database credentials" },
    { q: "What is the recommended way to handle long-running operations in a Node.js application?", options: ["Perform them synchronously to ensure they are completed before continuing", "Use child processes or worker threads for CPU-intensive operations", "Store them in the database and process them later", "Always run them inside an event listener"], ans: "Use child processes or worker threads for CPU-intensive operations" },
    { q: "Which event is triggered when the WebSocket connection is closed?", options: ["ws.disconnect", "ws.close", "ws.end", "ws.onclose"], ans: "ws.close" },
    { q: "How can you broadcast a message to all connected WebSocket clients from the server?", options: ["Send the message to each client individually using ws.send()", "Use ws.broadcast()", "Use ws.sendToAll()", "Node.js does not support broadcasting natively"], ans: "Send the message to each client individually using ws.send()" },
    { q: "Which protocol is WebSocket built upon?", options: ["HTTP", "HTTPS", "TCP", "UDP"], ans: "TCP" },
    { q: "Which of the following is the purpose of express.static() middleware?", options: ["To handle static file serving", "To parse incoming JSON payloads", "To manage authentication", "To log HTTP requests"], ans: "To handle static file serving" },
    { q: "How would you use middleware to handle errors in Express.js?", options: ["app.use(errorHandler)", "app.all('/error', errorHandler)", "app.error(errorHandler)", "app.use('/error', errorHandler)"], ans: "app.use(errorHandler)" },
    { q: "What is the purpose of the next parameter in Express middleware?", options: ["It is used to pass control to the next middleware function in the stack", "It is used to delay the execution of middleware", "It stores a reference to the next middleware function", "It signals the end of a middleware chain"], ans: "It is used to pass control to the next middleware function in the stack" },
    { q: "Which of the following is used to run a Node.js application?", options: ["node <filename>", "node run <filename>", "node execute <filename>", "node start <filename>"], ans: "node <filename>" },
    { q: "What is the default port number for a Node.js server?", options: ["3000", "8080", "80", "5000"], ans: "3000" },
    { q: "Which method is used to listen for incoming requests on a specific port in Node.js?", options: ["server.listen(port)", "server.start(port)", "server.open(port)", "server.bind(port)"], ans: "server.listen(port)" },
    { q: "What happens if a module is required multiple times in Node.js?", options: ["It is loaded and executed again each time", "It is cached after the first require and does not execute again", "It throws an error", "It is treated as a new module each time"], ans: "It is cached after the first require and does not execute again" },
    { q: "Which of the following is true about CommonJS modules in Node.js?", options: ["They use the import statement for importing modules", "They use require() for importing modules", "They only support synchronous loading", "They do not support module exports"], ans: "They use require() for importing modules" },
    { q: "How would you export multiple functions or variables from a Node.js module?", options: ["module.exports = [function1, function2]", "module.exports = { function1, function2 }", "exports = { function1, function2 }", "module.exportMultiple = { function1, function2 }"], ans: "module.exports = { function1, function2 }" },
    { q: "How would you install a package globally using npm?", options: ["npm global install <package>", "npm install --global <package>", "npm add -g <package>", "npm global <package>"], ans: "npm install --global <package>" },
    { q: "What does the npm audit command do?", options: ["Scans your dependencies for security vulnerabilities", "Displays the outdated packages in your project", "Installs missing dependencies", "Provides an overview of the project's structure"], ans: "Scans your dependencies for security vulnerabilities" },
    { q: "What command is used to create a package.json file for a Node.js project?", options: ["npm create", "npm init", "npm setup", "npm package"], ans: "npm init" },
    { q: "Which of the following is true about setTimeout() in Node.js?", options: ["It immediately executes the function synchronously", "It executes the function asynchronously after a specified delay", "It executes the function only once per event loop", "It blocks the event loop until the delay has passed"], ans: "It executes the function asynchronously after a specified delay" },
    { q: "What does Promise.all() return when all promises are resolved successfully?", options: ["An array of the resolved values", "A single resolved value", "A resolved promise containing the first resolved value", "A rejected promise"], ans: "An array of the resolved values" },
    { q: "What does the finally() method do in a promise chain?", options: ["It catches any errors in the promise chain", "It executes after the promise is settled (resolved or rejected)", "It prevents further promise chaining", "It cancels the promise execution"], ans: "It executes after the promise is settled (resolved or rejected)" },
    { q: "Which of the following is the best description of an event-driven architecture in Node.js?", options: ["A system where events (such as button clicks) trigger specific actions", "A system where everything runs in a sequential, blocking order", "A system where each action is triggered by time-based intervals", "A system where events are polled in a loop for each iteration"], ans: "A system where events (such as button clicks) trigger specific actions" },
    { q: "How can you emit a custom event in Node.js using an EventEmitter?", options: ["emitter.emit('eventName', data)", "emitter.trigger('eventName', data)", "emitter.raise('eventName', data)", "emitter.dispatch('eventName', data)"], ans: "emitter.emit('eventName', data)" },
    { q: "What is the purpose of the process.on('uncaughtException', callback) method?", options: ["It listens for and handles uncaught exceptions in the Node.js application", "It processes all exceptions and prevents them from terminating the application", "It generates uncaught exceptions deliberately for testing", "It logs uncaught exceptions to the console"], ans: "It listens for and handles uncaught exceptions in the Node.js application" },
    { q: "Which of the following is used to handle 404 errors in Express.js?", options: ["app.use((req, res, next) => { res.status(404).send('Not Found'); });", "app.error(404, (req, res) => { ... });", "app.useError(404, handler)", "app.handle(404, (req, res) => { ... });"], ans: "app.use((req, res, next) => { res.status(404).send('Not Found'); });" },
    { q: "What is the purpose of the app.all() method in Express?", options: ["It is used to define a handler for all HTTP methods (GET, POST, etc.) for a given path", "It is used to serve all types of files from a specific directory", "It defines all routes globally for the app", "It is used to listen for incoming requests on all ports"], ans: "It is used to define a handler for all HTTP methods (GET, POST, etc.) for a given path" },
    { q: "How would you use Express to parse a URL-encoded body (as submitted by a form)?", options: ["app.use(express.urlencoded({ extended: true }))", "app.use(bodyParser.urlencoded({ extended: true }))", "app.use(express.bodyParser({ extended: true }))", "app.urlencoded()"], ans: "app.use(express.urlencoded({ extended: true }))" },
    { q: "Which of the following best practices should be followed when deploying a Node.js application in production?", options: ["Using synchronous file reads to improve performance", "Enabling console.log() for debugging", "Using environment variables to store sensitive information", "Ignoring unhandled promise rejections"], ans: "Using environment variables to store sensitive information" },
    { q: "What is the recommended method for error handling in an asynchronous function in Node.js?", options: ["Ignoring the errors for better performance", "Using a try/catch block inside an async function", "Writing custom error handling functions for every operation", "Using the error event in Node.js"], ans: "Using a try/catch block inside an async function" },
    { q: "What is the advantage of using worker threads in Node.js?", options: ["They allow for concurrent I/O operations in a single thread", "They allow Node.js to execute CPU-intensive operations without blocking the event loop", "They speed up event-driven asynchronous programming", "They reduce memory usage by executing in the background"], ans: "They allow Node.js to execute CPU-intensive operations without blocking the event loop" },
    { q: "Which of the following would you use to send a message to all clients connected to the WebSocket server?", options: ["ws.broadcast('message')", "ws.sendToAll('message')", "You would need to manually iterate over each connected WebSocket instance and send the message", "ws.emit('message')"], ans: "You would need to manually iterate over each connected WebSocket instance and send the message" },
    { q: "Which event is fired when a message is received from the client in a WebSocket connection?", options: ["Message", "Data", "Receive", "onmessage"], ans: "Message" },
    { q: "How do you handle a WebSocket error in the client?", options: ["socket.on('error', callback)", "socket.error(callback)", "socket.onerror(callback)", "socket.catch(callback)"], ans: "socket.on('error', callback)" },
    { q: "Which of the following middleware functions is used to parse cookies in an Express.js app?", options: ["cookieParser()", "express.cookie()", "cookieParserMiddleware()", "app.cookies()"], ans: "cookieParser()" },
    { q: "What is the default status code returned by Express when no status code is specified?", options: ["200 (OK)", "404 (Not Found)", "500 (Internal Server Error)", "301 (Moved Permanently)"], ans: "200 (OK)" },
    { q: "Which of the following is used to prevent Cross-Origin Resource Sharing (CORS) issues in Express.js?", options: ["express-cors", "cors middleware", "app.enableCORS()", "app.allowCrossOrigin()"], ans: "cors middleware" },
    { q: "Which of the following is a core module of Node.js?", options: ["Fs", "Path", "http", "All of the above"], ans: "All of the above" },
    { q: "Which command is used to run a Node.js file directly from the terminal?", options: ["node run <filename>", "node start <filename>", "node <filename>", "node execute <filename>"], ans: "node <filename>" },
    { q: "In Node.js, which method can you use to read a file asynchronously?", options: ["fs.readFileSync()", "fs.readFile()", "fs.read()", "fs.loadFile()"], ans: "fs.readFile()" },
    { q: "How would you require a built-in Node.js module in your project?", options: ["import fs from 'fs'", "require('fs')", "import * as fs from 'fs'", "load('fs')"], ans: "require('fs')" },
    { q: "Which method would you use to dynamically load a module in Node.js?", options: ["require()", "import()", "load()", "module.import()"], ans: "import()" },
    { q: "What does module.exports do in a Node.js module?", options: ["Exports the module’s public API", "Import the module’s public API", "Imports functions from other modules", "Defines the entire module inside a file"], ans: "Exports the module’s public API" },
    { q: "What does the command npm run <script> do?", options: ["Executes a script defined in the package.json file", "Installs a new package", "Compiles JavaScript code", "Runs the app in production mode"], ans: "Executes a script defined in the package.json file" },
    { q: "What does the npm install command do when run in an existing project?", options: ["Installs all dependencies listed in the package.json file", "Updates the package.json file", "Removes the node_modules directory", "Installs a new dependency into the project"], ans: "Installs all dependencies listed in the package.json file" },
    { q: "What is the purpose of the npm start command in a Node.js project?", options: ["It starts the server defined in the scripts section of package.json", "It installs all project dependencies", "It initializes a new Node.js application", "It starts the app in debug mode"], ans: "It starts the server defined in the scripts section of package.json" },
    { q: "What does the setImmediate() function do in Node.js?", options: ["Executes a callback function after the current event loop completes", "Executes a callback function after a specified delay", "Executes a callback function asynchronously after a specified interval", "Executes a callback function synchronously before the next event loop"], ans: "Executes a callback function after the current event loop completes" },
    { q: "What is the result of calling Promise.reject('error')?", options: ["It creates a resolved promise with the value 'error'", "It immediately rejects the promise with the error message 'error'", "It throws an error in the synchronous code", "It creates a pending promise"], ans: "It immediately rejects the promise with the error message 'error'" },
    { q: "What is a key difference between setTimeout() and setImmediate()?", options: ["setTimeout() executes a callback after the specified delay, while setImmediate() runs the callback on the next iteration of the event loop", "setTimeout() always runs synchronously, while setImmediate() is asynchronous", "setTimeout() is used to handle errors, while setImmediate() handles regular tasks", "setTimeout() executes in the next event loop, while setImmediate() waits until the script is finished"], ans: "setTimeout() executes a callback after the specified delay, while setImmediate() runs the callback on the next iteration of the event loop" },
    { q: "Which of the following is true about the EventEmitter class in Node.js?", options: ["It is used to handle HTTP requests in Node.js", "It is used to manage file system operations", "It allows an object to emit named events that listeners can respond to", "It only supports one listener per event"], ans: "It allows an object to emit named events that listeners can respond to" },
    { q: "Which of the following is the correct syntax to add an event listener to an EventEmitter instance?", options: ["emitter.addListener('event', callback)", "emitter.on('event', callback)", "emitter.subscribe('event', callback)", "emitter.event(callback)"], ans: "emitter.on('event', callback)" }, // Both A and B are correct
    { q: "What does the process.nextTick() function do in Node.js?", options: ["Executes a callback after the current operation completes, before the event loop continues", "Executes a callback after the current event loop iteration", "Schedules a task to be performed immediately", "Immediately terminates the process and logs errors"], ans: "Executes a callback after the current operation completes, before the event loop continues" },
    { q: "Which of the following is the correct way to define a GET route in Express?", options: ["app.route('/path').get((req, res) => { ... })", "app.get('/path', (req, res) => { ... })", "app.define('/path').get((req, res) => { ... })", "app.post('/path').get((req, res) => { ... })"], ans: "app.get('/path', (req, res) => { ... })" }, // Both A and B are correct
    { q: "Which middleware function would you use to parse incoming form data in Express?", options: ["express.bodyParser()", "express.json()", "express.urlencoded()", "bodyParser()"], ans: "express.urlencoded()" },
    { q: "What is the primary purpose of the next() function in Express middleware?", options: ["To terminate the request-response cycle", "To send a response to the client", "To pass control to the next middleware function", "To execute the current middleware again"], ans: "To pass control to the next middleware function" },
    { q: "Which of the following is a best practice for handling errors in Node.js applications?", options: ["Always log errors to the console and allow the application to continue running", "Return detailed error messages to the client to help debug", "Use try/catch blocks and reject unhandled promise rejections", "Let errors go unhandled to improve performance"], ans: "Use try/catch blocks and reject unhandled promise rejections" },
    { q: "What is the best way to scale a Node.js application?", options: ["Run the application on multiple threads in a single process", "Use multiple instances of Node.js behind a load balancer", "Use a single thread for handling multiple requests", "Increase the number of synchronous I/O operations"], ans: "Use multiple instances of Node.js behind a load balancer" },
    { q: "What is the purpose of using dotenv in a Node.js application?", options: ["It helps to parse cookies from incoming HTTP requests", "It allows you to manage environment variables easily in a .env file", "It is used to run Node.js applications in production mode", "It is a tool for managing API requests and responses"], ans: "It allows you to manage environment variables easily in a .env file" },
    { q: "Which of the following is true about WebSocket communication in Node.js?", options: ["WebSockets require HTTP/2 for communication", "WebSocket is a one-way communication protocol", "WebSockets provide full-duplex communication between client and server", "WebSockets can only be used with static websites"], ans: "WebSockets provide full-duplex communication between client and server" },
    { q: "How would you close a WebSocket connection from the server side?", options: ["ws.close()", "ws.disconnect()", "ws.terminate()", "ws.end()"], ans: "ws.close()" },
    { q: "How can you handle errors when using WebSocket in a Node.js client?", options: ["socket.onerror = function(event) { ... }", "socket.onError(function(event) { ... })", "socket.catchError(function(event) { ... })", "socket.handleError(function(event) { ... })"], ans: "socket.onerror = function(event) { ... }" },
    { q: "Which of the following middleware functions would you use to serve static files in an Express.js application?", options: ["app.static()", "express.static()", "app.serveStatic()", "serve.static()"], ans: "express.static()" },
    { q: "What is the primary function of middleware in an Express.js application?", options: ["To execute HTTP requests synchronously", "To handle routing for each HTTP method", "To process requests, modify responses, and pass control to the next middleware", "To handle error handling and responses"], ans: "To process requests, modify responses, and pass control to the next middleware" },
    { q: "Which middleware function is used to parse incoming JSON payloads in Express?", options: ["express.json()", "express.bodyParser()", "express.parseJson()", "jsonParser()"], ans: "express.json()" },
    { q: "What does process.env in Node.js represent?", options: ["The current file directory", "An object containing environment variables", "The version of Node.js", "A list of installed modules"], ans: "An object containing environment variables" },
    { q: "How does Node.js handle multiple requests?", options: ["Using multithreading", "Using a single-threaded, non-blocking I/O model", "By creating multiple instances of the app", "Using synchronous functions only"], ans: "Using a single-threaded, non-blocking I/O model" },
    { q: "What is the purpose of exports in Node.js?", options: ["To import modules", "To export objects and functions from a module", "To read external files", "To handle events"], ans: "To export objects and functions from a module" },
    { q: "How do you make only specific functions or variables accessible from a Node.js module?", options: ["Use exports.specificFunction = function() { ... }", "Use export default specificFunction", "Use require.specificFunction", "Place the function at the top of the file"], ans: "Use exports.specificFunction = function() { ... }" },
    { q: "Which of the following statements is false regarding module.exports and exports?", options: ["Both module.exports and exports are references to the same object initially", "You can reassign exports directly to export an object", "exports is a shorthand for module.exports", "Using module.exports allows exporting a single function or object"], ans: "You can reassign exports directly to export an object" },
    { q: "What file is used by npm to determine the dependencies of a project?", options: ["package.json", "npm-config.json", "dependencies.json", "module.json"], ans: "package.json" },
    { q: "What command updates all packages to their latest versions in an npm project?", options: ["npm update", "npm upgrade", "npm latest", "npm all-update"], ans: "npm update" },
    { q: "What does the ^ symbol in package.json version numbers represent?", options: ["Updates to any version above the current", "Updates to the latest major version", "Updates to compatible minor versions", "Updates to only the latest patch version"], ans: "Updates to compatible minor versions" },
    { q: "Which of the following functions does not return a promise?", options: ["setTimeout()", "fetch()", "fs.promises.readFile()", "Promise.resolve()"], ans: "setTimeout()" },
    { q: "How do you convert a callback-based function into a promise-based function in Node.js?", options: ["Using async/await", "Using Promise.wrap()", "Using Promise.promisify()", "Using Promise.create()"], ans: "Using Promise.promisify()" },
    { q: "What will Promise.race([p1, p2, p3]) return if p2 resolves first?", options: ["It returns the value from p2", "It returns the values from all resolved promises", "It waits for all promises to settle", "It waits for the longest promise to resolve"], ans: "It returns the value from p2" },
    { q: "Which method is used to remove a specific listener from an event in EventEmitter?", options: ["emitter.removeListener(event, listener)", "emitter.off(event, listener)", "emitter.removeEvent(event)", "emitter(event, listener)"], ans: "emitter.removeListener(event, listener)" }, // Both A and B are correct
    { q: "What event is emitted when an error occurs in Node.js?", options: ["Error", "Exception", "Crash", "uncaughtException"], ans: "Error" },
    { q: "How can you prevent an application from crashing when an unhandled error occurs in an EventEmitter?", options: ["Listen to the error event on the emitter", "Use try/catch in synchronous functions", "Wrap the EventEmitter in a promise", "Ignore all errors in the application"], ans: "Listen to the error event on the emitter" },
    { q: "How would you configure Express to serve static files from a directory?", options: ["app.use(express.static('public'))", "app.static('public')", "app.serve('public')", "app.serveStatic('public')"], ans: "app.use(express.static('public'))" },
    { q: "What is the role of the app.listen() function in an Express application?", options: ["It defines the application’s routes", "It binds the application to a network port for incoming connections", "It starts the application in debug mode", "It logs server requests"], ans: "It binds the application to a network port for incoming connections" },
    { q: "Which of the following methods defines middleware for handling JSON payloads in Express?", options: ["app.use(express.json())", "app.use(express.bodyParser())", "app.json()", "app.bodyParser()"], ans: "app.use(express.json())" },
    { q: "What is the recommended way to secure environment variables in a Node.js project?", options: ["Storing them directly in the code", "Using .env files and keeping them out of version control", "Hard-coding them in package.json", "Sharing them openly for all developers"], ans: "Using .env files and keeping them out of version control" },
    { q: "What is a common way to improve application performance in Node.js?", options: ["Using synchronous file operations", "Using asynchronous non-blocking methods", "Blocking the event loop for heavy tasks", "Using multiple single-threaded processes"], ans: "Using asynchronous non-blocking methods" },
    { q: "Which tool is commonly used for logging in production-grade Node.js applications?", options: ["console.log()", "fs.appendFile()", "Winston", "logger.debug()"], ans: "Winston" },
    { q: "Which protocol upgrade does WebSocket use to establish a connection over HTTP?", options: ["HTTP/2", "WebSocket handshake", "TCP/IP upgrade", "HTTP upgrade"], ans: "HTTP upgrade" },
    { q: "Which event listener would you use to detect when a WebSocket connection is closed?", options: ["socket.on('disconnect')", "socket.on('close')", "socket.on('end')", "socket.on('exit')"], ans: "socket.on('close')" },
    { q: "What is the purpose of ws.send() in a WebSocket server?", options: ["To send a message to a specific client", "To send a message to all connected clients", "To broadcast to all clients and servers", "To close the connection"], ans: "To send a message to a specific client" },
    { q: "In Express, which method is typically used to handle errors across the application?", options: ["app.error()", "app.use((err, req, res, next) => { ... })", "app.catch((err) => { ... })", "app.handleError((err) => { ... })"], ans: "app.use((err, req, res, next) => { ... })" },
    { q: "What is the order of middleware execution in Express.js?", options: ["Alphabetical order", "In the order they are defined in the code", "Based on middleware priority level", "Random order"], ans: "In the order they are defined in the code" },
    { q: "Which type of middleware can modify the request object in Express.js before it reaches the route handler?", options: ["Error-handling middleware", "Application-level middleware", "Request-modifying middleware", "Route handler middleware"], ans: "Application-level middleware" },
    { q: "Which of the following is an example of a readable stream in Node.js?", options: ["fs.createReadStream()", "fs.writeFile()", "fs.appendFile()", "http.get()"], ans: "fs.createReadStream()" },
    { q: "Which event is emitted by writable streams when they are ready to accept more data?", options: ["Data", "Drain", "Ready", "open"], ans: "Drain" },
    { q: "What is the purpose of a for...of loop in JavaScript?", options: ["Iterates over each property of an object", "Iterates over each character in a string", "Iterates over iterable objects like arrays, strings, and sets", "Iterates in reverse order"], ans: "Iterates over iterable objects like arrays, strings, and sets" },
    { q: "What is the output of the following code? javascript const arr = [1, 2, 3]; for (let i = 0; i < arr.length; i++) { if (i === 1) break; console.log(arr[i]); }", options: ["1, 2, 3", "2", "1", "1, 2"], ans: "1" },
    { q: "Which loop would you use when the number of iterations is unknown but depends on a condition?", options: ["for loop", "while loop", "do...while loop", "none of the above"], ans: "while loop" }, // Both B and C are correct, but B is a common, basic example.
    { q: "What is the main difference between for...in and for...of loops?", options: ["for...in loops through array elements, and for...of loops through object properties", "for...in loops through object properties, and for...of loops through iterable elements", "Both loops function identically", "for...in is used only for arrays"], ans: "for...in loops through object properties, and for...of loops through iterable elements" },
    { q: "How many times will the following loop execute? javascript let count = 0; while (count < 5) { count++; }", options: ["0", "4", "5", "Infinite"], ans: "5" },
    { q: "Which of the following is an ordered, indexed data structure in JavaScript?", options: ["Object", "Array", "Set", "Map"], ans: "Array" },
    { q: "Which of these statements about Set in JavaScript is true?", options: ["Set only stores unique values", "Set stores key-value pairs", "Set maintains insertion order of items", "Both a and c"], ans: "Both a and c" },
    { q: "How can you access the value for a specific key in a Map?", options: ["map[key]", "map.get(key)", "map[key].value", "map.getValue(key)"], ans: "map.get(key)" },
    { q: "What is the result of Array.from(new Set([1, 2, 2, 3, 4]))?", options: ["[1, 2, 2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4]", "[1, 3, 4]"], ans: "[1, 2, 3, 4]" },
    { q: "Which of these data structures does not allow duplicate values by default?", options: ["Array", "Object", "Set", "Map"], ans: "Set" },
    { q: "What is a callback function in JavaScript?", options: ["A function that is called automatically at the end of every function", "A function passed as an argument to another function and executed later", "A function that executes immediately upon definition", "A synchronous function that runs after another function completes"], ans: "A function passed as an argument to another function and executed later" },
    { q: "Which of the following correctly demonstrates a callback function? javascript function greet(name, callback) { console.log('Hello ' + name); callback(); } greet('Alice', function() { console.log('Callback executed'); });", options: ["Only logs \"Hello Alice\"", "Only logs \"Callback executed\"", "Logs \"Hello Alice\" and then \"Callback executed\"", "Throws an error"], ans: "Logs \"Hello Alice\" and then \"Callback executed\"" },
    { q: "What is the main advantage of using callbacks in JavaScript?", options: ["They allow synchronous code to execute faster", "They allow for more readable code", "They enable asynchronous execution, allowing code to continue running while waiting for another process to complete", "They prevent errors from occurring in code"], ans: "They enable asynchronous execution, allowing code to continue running while waiting for another process to complete" },
    { q: "What is an example of a built-in JavaScript method that uses a callback function?", options: ["forEach()", "map()", "setTimeout()", "All of the above"], ans: "All of the above" },
    { q: "What is a common issue when using callbacks in JavaScript, especially when nesting multiple callbacks?", options: ["Callback rejection", "Callback rejection", "Callback hell", "Callback cycle"], ans: "Callback hell" },
    { q: "Which of the following is a correct syntax for defining a function in JavaScript?", options: ["function myFunc { ... }", "let myFunc() = { ... }", "function myFunc() { ... }", "let myFunc[] = { ... }"], ans: "function myFunc() { ... }" },
    { q: "What is the output of the following code? javascript function add(a, b) { return a + b; } console.log(add (2, 3));", options: ["Undefined", "23", "5", "NaN"], ans: "5" },
    { q: "What keyword is used to define an arrow function in JavaScript?", options: ["=>", "->", ":", "None of the above"], ans: "=>" },
    { q: "Which of these functions immediately invokes itself upon definition?", options: ["Anonymous function", "Named function", "IIFE (Immediately Invoked Function Expression)", "Callback function"], ans: "IIFE (Immediately Invoked Function Expression)" },
    { q: "What is the default return value of a function in JavaScript if no return statement is specified?", options: ["Null", "Undefined", "NaN", "false"], ans: "Undefined" },
    { q: "Which of the following is a valid way to create an object in JavaScript?", options: ["let obj = { }", "let obj = Object.create()", "let obj = new Object({ })"], ans: "let obj = { }" }, // Both A and C are valid, but A is the common literal syntax.
    { q: "What is the result of the following code? javascript const person = { name: 'Alice', greet: function() { return 'Hello ' + this.name; } }; console.log(person.greet());", options: ["Hello Alice", "Hello undefined", "Undefined", "Throws an error"], ans: "Hello Alice" },
    { q: "Which method is used to get an array of keys in an object?", options: ["Object.values()", "Object.keys()", "Object.entries()", "Object.list()"], ans: "Object.keys()" },
    { q: "How can you prevent modifications to an object in JavaScript?", options: ["Object.lock()", "Object.preventExtensions()", "Object.seal()", "Object.freeze()"], ans: "Object.freeze()" },
    { q: "What will Object.assign() do when used on an object?", options: ["It merges properties from one or more source objects into a target object", "It prevents extensions on the object", "It deep clones the object", "It deletes all properties in the object"], ans: "It merges properties from one or more source objects into a target object" },
    { q: "What is the purpose of semicolons in JavaScript?", options: ["To separate HTML from JavaScript", "To end statements (optional in most cases)", "To enclose a function", "To indicate variable declarations"], ans: "To end statements (optional in most cases)" },
    { q: "What are reserved keywords in JavaScript?", options: ["Words that can be used as variables", "Words that have a predefined meaning and cannot be used as identifiers", "Words only used in comments", "Any English word"], ans: "Words that have a predefined meaning and cannot be used as identifiers" },
    { q: "Which of the following is a correct variable name in JavaScript?", options: ["var 1name", "var name@", "var $name", "var name%"], ans: "var $name" },
    { q: "What is an expression in JavaScript?", options: ["value-producing piece of code", "Only a variable declaration", "Only a function call", "A line of code that does not produce a value"], ans: "value-producing piece of code" },
    { q: "What is the output of console.log(2 + '3');?", options: ["5", "23", "NaN", "undefined"], ans: "23" },
    { q: "What does the expression 5 == '5' return in JavaScript?", options: ["true", "false", "undefined", "Throws an error"], ans: "true" },
    { q: "Which of the following is not a primitive data type in JavaScript?", options: ["String", "Boolean", "Object", "Undefined"], ans: "Object" },
    { q: "What will typeof NaN return in JavaScript?", options: ["'undefined'", "'number'", "'NaN'", "'null'"], ans: "'number'" },
    { q: "What does null represent in JavaScript?", options: ["The absence of any value or object", "A number", "A data type", "Undefined"], ans: "The absence of any value or object" },
    { q: "Which keyword is used to define a class in JavaScript?", options: ["define", "class", "constructor", "object"], ans: "class" },
    { q: "What is a constructor in a JavaScript class?", options: ["A method for initializing class properties", "A method for deleting properties", "A method only used to define functions", "A variable inside a class"], ans: "A method for initializing class properties" },
    { q: "How would you create an instance of a class Person in JavaScript?", options: ["Person.create()", "let p = new Person()", "let p = Person()", "let p = Person.new()"], ans: "let p = new Person()" },
    { q: "Which keyword declares a block-scoped variable in JavaScript?", options: ["var", "let", "const", "Both b and c"], ans: "Both b and c" },
    { q: "What will happen if you try to reassign a const variable?", options: ["It will change the value", "It will throw an error", "It will create a new variable", "t will be ignored"], ans: "It will throw an error" },
    { q: "Which of the following is the correct way to define a global variable?", options: ["Using const within a function", "Using let within a function", "Using var outside of any function or block", "Using const outside of any function or block"], ans: "Using var outside of any function or block" }, // While possible, global var should be avoided. The other options describe non-global or block-scoped declarations.
    { q: "What is the default return value of a function that does not explicitly return a value?", options: ["undefined", "null", "0", "false"], ans: "undefined" },
    { q: "How do you define a function expression in JavaScript?", options: ["function add() { ... }", "let add = function() { ... }", "function = add() { ... }", "let add() { ... }"], ans: "let add = function() { ... }" },
    { q: "Which is an example of a higher-order function?", options: ["function myFunction() { ... }", "setTimeout(() => { ... }, 1000)", "function(a, b) { return a + b; }", "const add = 5 + 3;"], ans: "setTimeout(() => { ... }, 1000)" },
    { q: "In JavaScript, what does the this keyword refer to in a global context?", options: ["window object in the browser", "document object in the browser", "Current function", "Undefined"], ans: "window object in the browser" },
    { q: "What does this refer to in a regular function?", options: ["The global object", "The function itself", "The caller of the function", "The last object created"], ans: "The global object" },
    { q: "Which of the following is a correct arrow function syntax?", options: ["(a, b) => { return a + b; }", "function => (a, b) { return a + b; }", "(a, b) => return a + b;", "let add = a, b => { return a + b; }"], ans: "(a, b) => { return a + b; }" },
    { q: "How does this behave differently in arrow functions compared to regular functions?", options: ["this refers to the global object in arrow functions", "this is lexically bound, meaning it uses this from the enclosing context", "this always refers to the function itself in arrow functions", "this does not exist in arrow functions"], ans: "this is lexically bound, meaning it uses this from the enclosing context" },
    { q: "Which of the following statements about arrow functions is true?", options: ["Arrow functions cannot be used as methods in an object", "Arrow functions automatically bind this to the global scope", "Arrow functions can be used with arguments object", "Arrow functions are syntactically similar to const functions"], ans: "Arrow functions cannot be used as methods in an object" },
    { q: "What is block scope in JavaScript?", options: ["Scope of variables defined within a single line", "Scope of variables defined within a block { }", "Scope of variables defined globally", "Scope of variables within functions only"], ans: "Scope of variables defined within a block { }" },
    { q: "Which variables are accessible within a function’s scope?", options: ["Only the variables declared within the function", "Only global variables", "Variables defined in the function and any parent scopes", "None of the above"], ans: "Variables defined in the function and any parent scopes" },
    { q: "What will array.push(4) do if array = [1, 2, 3]?", options: ["Returns [1, 2, 3]", "Adds 4 to the beginning", "Adds 4 to the end of the array", "Throws an error"], ans: "Adds 4 to the end of the array" },
    { q: "How do you create a copy of an array in JavaScript?", options: ["let newArray = array.copy()", "let newArray = array.map()", "let newArray = [...array]", "let newArray = array.slice(1)"], ans: "let newArray = [...array]" }
];

// Expose the questions to the browser global so other scripts (or the page) can use them.
if (typeof window !== 'undefined') {
    window.allQuestions = allQuestions;
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = allQuestions;
}

// Helpful debug output when script is loaded in a browser or Node environment.
try {
    console.log('Loaded', allQuestions.length, 'questions');
} catch (e) {
    // ignore logging errors in restricted environments
}

// Browser quiz controller (only run when loaded into a page)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    (function () {
        // Cached DOM nodes
        const startBtn = document.getElementById('start-quiz-btn');
        const restartBtn = document.getElementById('restart-quiz-btn');
        const submitBtn = document.getElementById('submit-answer-btn');
        const numQuestionsInput = document.getElementById('num-questions');
        const noteEl = document.querySelector('.note');
        const quizStartScreen = document.getElementById('quiz-start-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultsScreen = document.getElementById('quiz-results-screen');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const currentQuestionNumber = document.getElementById('current-question-number');
        const totalQuestionsEl = document.getElementById('total-questions');
        const scoreText = document.getElementById('score-text');
        const totalAnswered = document.getElementById('total-answered');
        const percentageScore = document.getElementById('percentage-score');
        const timeLeftEl = document.getElementById('time-left');

        // State
        let questions = [];
        let totalQuestions = 10;
        let currentIndex = 0;
        let selectedIndex = null;
        let score = 0;
        let timerInterval = null;
        const QUESTION_TIME = 60; // seconds per question
        let timeLeft = QUESTION_TIME;

        // Show accurate question count in the start note
        if (noteEl) {
            noteEl.textContent = `There are ${allQuestions.length} available questions from the provided text.`;
            // ensure max attribute matches available questions
            if (numQuestionsInput) numQuestionsInput.max = allQuestions.length;
        }

        function shuffleArray(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        function showScreen(screenEl) {
            [quizStartScreen, quizScreen, resultsScreen].forEach(s => s && s.classList.remove('active'));
            if (screenEl) screenEl.classList.add('active');
        }

        function startQuiz() {
            const requested = parseInt(numQuestionsInput && numQuestionsInput.value, 10) || 10;
            totalQuestions = Math.max(1, Math.min(allQuestions.length, requested));
            questions = shuffleArray(allQuestions).slice(0, totalQuestions);
            currentIndex = 0;
            score = 0;
            totalQuestionsEl.textContent = totalQuestions;
            scoreText.textContent = '0';
            showScreen(quizScreen);
            renderQuestion();
        }

        function startTimer() {
            clearInterval(timerInterval);
            timeLeft = QUESTION_TIME;
            timeLeftEl.textContent = timeLeft;
            timerInterval = setInterval(() => {
                timeLeft -= 1;
                timeLeftEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    // auto-submit as incorrect
                    revealAnswer(null);
                }
            }, 1000);
        }

        function renderQuestion() {
            selectedIndex = null;
            submitBtn.disabled = true;
            optionsContainer.innerHTML = '';
            const q = questions[currentIndex];
            if (!q) return endQuiz();
            currentQuestionNumber.textContent = currentIndex + 1;
            questionText.textContent = q.q;

            q.options.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'option-btn';
                btn.textContent = opt;
                btn.dataset.index = i;
                btn.addEventListener('click', () => selectOption(i, btn));
                optionsContainer.appendChild(btn);
            });

            startTimer();
        }

        function selectOption(i, btn) {
            // clear previous selection
            const prev = optionsContainer.querySelector('.option-btn.selected');
            if (prev) prev.classList.remove('selected');
            btn.classList.add('selected');
            selectedIndex = i;
            submitBtn.disabled = false;
        }

        function revealAnswer(chosenIndex) {
            clearInterval(timerInterval);
            const q = questions[currentIndex];
            const optionButtons = Array.from(optionsContainer.querySelectorAll('.option-btn'));
            optionButtons.forEach((btn, idx) => {
                btn.disabled = true;
                const text = btn.textContent;
                if (text === q.ans) {
                    btn.classList.add('correct');
                }
                if (chosenIndex !== null && idx === chosenIndex && text !== q.ans) {
                    btn.classList.add('incorrect');
                }
            });

            // update score if correct
            if (chosenIndex !== null) {
                const chosenText = optionButtons[chosenIndex] && optionButtons[chosenIndex].textContent;
                if (chosenText === q.ans) {
                    score += 1;
                    scoreText.textContent = String(score);
                }
            }

            // move to next after a short delay
            setTimeout(() => {
                currentIndex += 1;
                if (currentIndex < totalQuestions) {
                    renderQuestion();
                } else {
                    endQuiz();
                }
            }, 900);
        }

        function submitAnswer() {
            if (selectedIndex === null) return;
            revealAnswer(selectedIndex);
            submitBtn.disabled = true;
        }

        function endQuiz() {
            clearInterval(timerInterval);
            showScreen(resultsScreen);
            totalAnswered.textContent = totalQuestions;
            scoreText.textContent = String(score);
            const percent = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;
            percentageScore.textContent = percent + '%';
        }

        // Wire up events
        if (startBtn) startBtn.addEventListener('click', startQuiz);
        if (submitBtn) submitBtn.addEventListener('click', submitAnswer);
        if (restartBtn) restartBtn.addEventListener('click', () => showScreen(quizStartScreen));

        // accessibility: allow Enter key to submit when an option is selected
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && quizScreen.classList.contains('active') && !submitBtn.disabled) {
                submitAnswer();
            }
        });
    })();
}