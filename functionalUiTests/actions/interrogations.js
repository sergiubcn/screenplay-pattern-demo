import postsPage  from '../pageObjects/postsPage';
import sideNav from '../pageObjects/sideNav';

export default {
    checkExistenceOfPostsPageTitle() {
        return postsPage.postsPageTitle().isExisting();
    },

    checkExistenceOfPostsLinkInSideNav() {
        return sideNav.postsLink().isExisting();
    },

    checkExistenceOfSideNavMenu() {
        return sideNav.sideNavContainer().isExisting();
    }
}
