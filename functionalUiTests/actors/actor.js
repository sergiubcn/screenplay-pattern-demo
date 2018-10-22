import _ from 'lodash';
import Interactions from '../actions/interactions';
import actorData from './actorData';

export default class Actor {
    constructor(username) {
        this.username = username;
        let actor = this.getActorData(username);
        this.password = actor.password;
        this.role = actor.role;
    }

    getActorData(username) {
        return _.find(actorData, {username});
    }

    login() {
        Interactions.logIntoAccount(this.username, this.password);
    }
}