const {usernameField, passwordField, loginButton} = require('../pageObjects/loginPage');

/**
 * Possible interactions with the applications.
 * The level of detail expressed here depends on the project needs.
 */
module.exports = {
    /**
     * Logs the user into his account based on user's credentials.
     * @param {string} username The user's account username.
     * @param {string} password The user's account password.
     */
    logIntoAccount: function(username, password) {
        usernameField().setValue(username);
        passwordField().setValue(password);
        loginButton().click();
    }
}