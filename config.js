// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
    config;

var PUBLIC_URL = process.env.PUBLIC_URL
var PORT = process.env.PORT || '2368'
var GHOST_CONTENT = process.env.GHOST_CONTENT
var GHOST_SOURCE = process.env.GHOST_SOURCE

console.log('using this config!');
console.log('GHOST_CONTENT:', GHOST_CONTENT); //  /var/lib/ghost
console.log('GHOST_SOURCE:', GHOST_SOURCE); //  /usr/src/ghost



config = {
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://randomthings.io',
        paths: {
            contentPath: GHOST_CONTENT,
        },
        mail: {
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(GHOST_CONTENT, '/data/ghost.db'),
            },
            debug: false,
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    }
};

// Export config
module.exports = config;