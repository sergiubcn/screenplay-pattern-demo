const { Then } = require('cucumber');
const { checkThatPostsPageTitleExists, checkThatThePostsLinkDoesNotExistInSideNav } = require('../actions/interrogations');

Then(/^the Posts page is displayed$/, () => {
    checkThatPostsPageTitleExists();
});

Then(/^the Posts link is not available$/, () => {
    checkThatThePostsLinkDoesNotExistInSideNav();
});