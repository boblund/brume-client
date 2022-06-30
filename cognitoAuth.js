"use strict";

const AWS = require('aws-sdk');
const {CognitoIdentityServiceProvider} = AWS;
AWS.config.region = 'us-east-1';
const CISP = new CognitoIdentityServiceProvider();
//const CLIENTID = '6dspdoqn9q00f0v42c12qvkh5l';

const refreshTokenAuth = (ClientId, REFRESH_TOKEN) =>
    new Promise((resolve, reject) => {
        //const CISP = new CognitoIdentityServiceProvider();

        CISP.initiateAuth(
            {
                ClientId, // Cognito App Client Id
                AuthFlow: 'REFRESH_TOKEN_AUTH',
                AuthParameters: {REFRESH_TOKEN}
            },
            (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data.AuthenticationResult);
            }
        );
    });

module.exports = {refreshTokenAuth};
