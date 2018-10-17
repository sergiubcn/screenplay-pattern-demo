const { When } = require('cucumber');
const { adminAbilities } = require('../actions/abilities');

When(/^the user clicks the Posts link in the nav menu$/, () => {
    adminAbilities.clickPostsLinkInSideNav();
});