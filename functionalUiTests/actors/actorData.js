export default [
    {
        username: "scrplayusr",
        password: process.env.WP_ADMIN_PASS,
        role: "admin"
    },
    {
        username: "scrplayusrbasic",
        password: process.env.WP_BASICUSER_PASS,
        role: "subscriber"
    }
];