export default {
    sideNavContainer() { return browser.element("#adminmenu"); },

    postsLink() { return browser.element("//ul[@id='adminmenu']//div[text()='Posts']"); }
}