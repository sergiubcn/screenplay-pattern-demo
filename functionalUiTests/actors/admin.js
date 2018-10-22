import Actor from './actor';
import Interactions from '../actions/interactions';

export default class Admin extends Actor {
    constructor(username) {
        super(username);
    }

    navigateToPostsPageViaSideNav() {
        Interactions.navigateToPostsPageViaSideNav();
    }
}