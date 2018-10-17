const { Then } = require('cucumber');
const { checkThatPostsPageTitleExists } = require('../actions/interrogations');

Then(/^the Posts page is displayed$/, () => {
    checkThatPostsPageTitleExists();
});