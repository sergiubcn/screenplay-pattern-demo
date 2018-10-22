export default {
    path() { return "wp-login.php"; },

    loginForm() { return browser.element("#loginform"); },

    usernameField() { return browser.element("#user_login"); },

    passwordField() { return browser.element("#user_pass"); },

    loginButton() { return browser.element("#wp-submit"); }
}
