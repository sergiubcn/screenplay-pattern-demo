module.exports = {
    sideNavContainer: function() {
        return browser.element("#adminmenu");
    },

    postsLink: function() {
        return browser.element("//ul[@id='adminmenu']//div[text()='Posts']");
    }
}