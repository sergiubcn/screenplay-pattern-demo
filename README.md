# READ ME

## Summary
The Screenplay test design pattern used in a NodeJS based test automation solution with Cucumber acting as the test runner.

## Description
This is a basic example of the Screenplay test design pattern working together with the Page Object test design pattern.
As with most programming design patterns you don't necessarily have to stick to one of them. They can be used, wisely, to complement each other. Furthermore, you don't need a certain framework to implement a design pattern. Of course, some frameworks make it really easy to implement a certain pattern but they are not tied to one another. The most commonly spread myth is that you `Cucumber` to implement BDD; this is obviously not true.

This simple solution is written in NodeJS, with WebdriverIO as a wrapper over Webdriver, `expect.js` as the assertion framework and lastly `Cucumber` as the test runner. This will run tests on the WordPress-Admin website installed locally.

This implementation is so easy to comprehend that it can be adapted to any technology stack. One important aspect to keep in mind though, is to make sure that this pattern suits the needs of your project. This implementation may not be appropriate for your situation.

## Installation
If you want to install the whole ecosystem then start by following these simple steps to install Wordpress locally:
https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP

I assume that you already have your favourite IDE installed so the next step would be to clone clone/ fork this repo and then open a terminal `cd` into the repo folder and finally enter the following command: `npm install` this should install all the necessary node modules.

The next step would be to install Chrome browser if its not already installed. Chromedriver is also necessary. This can easily be done with brew: `brew install chromedriver`.

In order to simulate a real life scenario the users's passwords have been added to environment variables. In the `.bash_profile` file add the passwords as variables like in the example below:
```
# SCREENPLAY PATTERN DEMO
export WP_ADMIN_PASS="7RMgdkw2&7DW@gTkiP"
export WP_BASICUSER_PASS="basicUser123"
export BASE_URL="http://localhost:8888/"
```

In a similar way add the application's base URL. On a real project these environment variables are probably added in the CI tools or in the `Dockerfile` if the you use Docker.

## Context variables
The `Cucumber` specific hooks have been added to the `wdio.conf.js` file. Currently, in the solution, only the `scenario context` is used, but the other ones are ready for use. At the bottom of the config file there is a declaration of the context parameters:
`params: { scenarioContext: { currentUser: {} } }`
Furthermore, in order to be accessible at test runtime these are initialised on the browser instance:
`before: function () {browser.params = this.params; }`
These objects can now be accessed at runtime. The reset mechanism is implemented in the corresponding hook function:
`afterScenario: function () { browser.params.scenarioContext.currentUser = {}; }`
The same can be done for the other contexts.

## Running tests
The tests can be executed by running the following command: `npm run test:ui`.
The script can be tweaked in the `package.json` file.

## Further reading
Keep in mind that this is an interpretation of the Screenplay pattern. A really good explanation can be found in the following blog post: https://dzone.com/articles/page-objects-refactored-solid-steps-to-the-screenp

The concept is the same but you don't need Serenity.js to implement it.