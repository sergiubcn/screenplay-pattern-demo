const { logIntoAccount, navigateToPostsPageViaSideNav } = require('./interactions');
const { admin, subscriber } = require('./actors');

/**
 * Represents the ability of interacting with the application of each actor.
 */
module.exports = {
    adminAbilities: {
        login: function() { logIntoAccount(admin.username, admin.userPassword) },
        clickPostsLinkInSideNav: function() { navigateToPostsPageViaSideNav() }
    },
    subscriberAbilities: {
        login: function() { logIntoAccount(subscriber.username, subscriber.userPassword) }
    }
}