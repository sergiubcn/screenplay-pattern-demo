import loginPage from '../pageObjects/loginPage';
import sideNav from '../pageObjects/sideNav';

/**
 * Possible interactions with the applications.
 * The level of detail expressed here depends on the project needs.
 */
export default new class Interactions {
    /**
     * Logs the user into his account based on user's credentials.
     * @param {string} username The user's account username.
     * @param {string} password The user's account password.
     */
    logIntoAccount(username, password) {
        // This dynamic wait is necessary when running multiple tests
        // one after the other.
        loginPage.loginForm().waitForVisible();
        loginPage.usernameField().setValue(username);
        loginPage.passwordField().setValue(password);
        loginPage.loginButton().click();
    }

    /*** Navigates to the Posts page by clicking the Posts link in the sideNav. */
    navigateToPostsPageViaSideNav() {
        sideNav.postsLink().click();
    }
}