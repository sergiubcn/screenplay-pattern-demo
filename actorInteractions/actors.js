/**
 * The definition of the actors (user roles) which can interact with the application.
 */
module.exports = {
    admin: {
        username: "scrplayusr",
        userPassword: process.env.WP_ADMIN_PASS
    },
    subscriber: {
        username: "scrplayusrbasic",
        userPassword: process.env.WP_BASICUSER_PASS
    }  
}