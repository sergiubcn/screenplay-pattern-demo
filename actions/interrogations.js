const expect = require('expect');
const { postsPageTitle } = require('../pageObjects/postsPage');

/** Represents the possible interrogations about the application's state. */
module.exports = {
    checkThatPostsPageTitleExists: function() {
        expect(postsPageTitle().value).toBeTruthy();
    }
}