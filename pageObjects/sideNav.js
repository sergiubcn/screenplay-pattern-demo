module.exports = {
    postsLink: function() {
        return browser.element("//ul[@id='adminmenu']//div[text()='Posts']");
    }
}