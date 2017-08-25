const request = require('request-promise');

class Request {
    sendRestRequest(URI, method) {
        const options = {
            uri: URI,
            method: method,
            resolveWithFullResponse: true
        };

        return request(options).then((response) => {
            return response;
        });

    }
}

module.exports = new Request();