const expect = require('expect');
const { postsPageTitle } = require('../pageObjects/postsPage');
const { sideNavContainer, postsLink } = require('../pageObjects/sideNav');

/** Represents the possible interrogations about the application's state. */
module.exports = {
    checkThatPostsPageTitleExists: function() {
        expect(postsPageTitle().value).toBeTruthy();
    },

    checkThatThePostsLinkDoesNotExistInSideNav: function() {
        expect(postsLink().value).toBeFalsy();
    },

    checkThatTheSideNavMenuIsLoaded: function() {
        expect(sideNavContainer().value).toBeTruthy();
    }
}