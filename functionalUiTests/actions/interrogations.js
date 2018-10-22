import postsPageTitle  from '../pageObjects/postsPage';
import sideNav from '../pageObjects/sideNav';

export default {
    checkExistenceOfPostsPageTitle() {
        return postsPageTitle().isExisting();
    },

    checkExistenceOfPostsLinkInSideNav() {
        return sideNav.postsLink().isExisting();
    },

    checkExistenceOfSideNavMenu() {
        return sideNav.sideNavContainer().isExisting();
    }
}
