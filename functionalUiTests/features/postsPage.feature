Feature: Access to Posts page
     As a Wordpress admin user
     I want to be able to access the Posts page
     So that I can manage my Posts

Background: The login page is loaded
    Given the login page is loaded

Scenario: Admin user can access the Posts page
     Given scrplayusr user with admin role authenticates into WP-Admin
     When the user clicks the Posts link in the nav menu
     Then the Posts page is displayed

Scenario: Subscriber user cannot access the Posts page
    Given scrplayusrbasic user with subscriber role authenticates into WP-Admin
    Then the Posts link is not available