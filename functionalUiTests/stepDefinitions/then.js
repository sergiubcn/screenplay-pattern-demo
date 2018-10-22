import { Then } from 'cucumber';
import expect from 'expect';
import interrogations from '../actions/interrogations';

Then(/^the Posts page is displayed$/, () => {
    expect(interrogations.checkExistenceOfPostsPageTitle()).toBeTruthy();
});

Then(/^the Posts link is not available$/, () => {
    expect(interrogations.checkExistenceOfPostsLinkInSideNav()).toBeFalsy();
});