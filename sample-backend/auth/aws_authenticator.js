global.fetch = require('node-fetch')
var AmazonCognitoIdentity = require('amazon-cognito-identity-js')

module.exports.authenticate = function(res, req, next) {
    var authenticationData = {
        Username : 'dsluser1',
        Password : 'testing123',
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    var poolData = { UserPoolId : 'ap-southeast-1_5xnA4ss3W',
        ClientId : '10fucbr71h3j6gv2as6i10ilo'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username : 'dsluser1',
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log("[ibea] aws auth success")
            var accessToken = result.getAccessToken().getJwtToken();
            
            /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
            var idToken = result.idToken.jwtToken;
        },

        onFailure: function(err) {
            console.log("[ibea] aws auth failure " + JSON.stringify(err))
        },

    });
}