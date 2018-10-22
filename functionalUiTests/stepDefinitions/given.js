import expect from 'expect';
import { Given } from 'cucumber';
import loginPage from '../pageObjects/loginPage';
import accessPage from '../pageObjects/page';
import interrogations from '../actions/interrogations';
import Admin from '../actors/admin';
import Subscriber from '../actors/subscriber';

Given(/^(.*) user with (admin|subscriber) role authenticates into WP-Admin$/, (username, role) => {
    let user;
    if (role === 'admin') {
        user = new Admin(username);
        user.login();
    } else if (role === 'subscriber') {
        user = new Subscriber(username);
        user.login();
    } else {
        throw new Error("The user role does not exist.");
    }
    browser.params.scenarioContext.currentUser = user;
    // A check that the login action has actually happened is needed here.
    expect(interrogations.checkExistenceOfSideNavMenu()).toBeTruthy();
});

Given(/^the login page is loaded$/, () => {
    accessPage(loginPage.path());
});