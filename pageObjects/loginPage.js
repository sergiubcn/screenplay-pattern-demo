module.exports = {
    path: function() {
        return "wp-login.php";
    },

    usernameField: function() {
        return browser.element("#user_login");
    },

    passwordField:  function() {
        return browser.element("#user_pass");
    },

    loginButton: function() {
        return browser.element("#wp-submit");
    }
}
