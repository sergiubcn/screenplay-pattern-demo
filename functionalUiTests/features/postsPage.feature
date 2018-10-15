Feature: Access to Posts page
    As a Wordpress admin user
    I want to be able to access the Posts page
    So that I can manage my Posts

Scenario: Admin user can access the Posts page
    Given that an admin user logs into WP-Admin
    When the user clicks the Posts link in the nav menu
    Then the Posts page is displayed

Scenario: Subscriber user cannot access the Posts page
    Given that a subscriber user logs into WP-Admin
    When the user inspects the nav menu
    Then the Posts link is not available