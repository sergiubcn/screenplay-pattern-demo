const { usernameField, passwordField, loginButton, loginForm } = require('../pageObjects/loginPage');
const { postsLink } = require('../pageObjects/sideNav');

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
        // This dynamic wait is necessary when running multiple tests
        // one after the other.
        loginForm().waitForVisible();
        usernameField().setValue(username);
        passwordField().setValue(password);
        loginButton().click();
    },

    /*** Navigates to the Posts page by clicking the Posts link in the sideNav.*/
    navigateToPostsPageViaSideNav: function() {
        postsLink().click();
    }
}