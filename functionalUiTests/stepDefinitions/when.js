import { When } from 'cucumber';

When(/^the user clicks the Posts link in the nav menu$/, () => {
    browser.params.scenarioContext.currentUser.navigateToPostsPageViaSideNav();
});