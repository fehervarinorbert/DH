# DH Technical Task tests repository

This repository contains all UI tests for this project.

You can find the test.js file under cypress/integration/DH_TechTask-tests/
You can find the DH_TechTask-tests.feature file under cypress/integration/

## Cypress test and open

In order to run the tests with the latest chrome browser you need to:

1. Install node.js and cypress - https://docs.cypress.io/guides/getting-started/installing-cypress.html
2. Clone the repository to your computer.
3. Run the tests:

    a) in Command Line:
    
            - Navigate into the cloned folder on your computer.
            - npx cypress run --browser chrome
            
    b) in cypress application with desired browser:
    
            - in Command line Navigate into the cloned folder on your computer.
            - npx cypress open
            
            
            
## [Cypress](https://github.com/cypress-io/cypress)

See [Cypress Introduction](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html) and [Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
It comes fully baked, batteries included. Here is a list of things it can do that no other testing framework can:

- **Time Travel:** Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
- **Debuggability:** Stop guessing why your tests are failing. Debug directly from familiar tools like Developer Tools. Our readable errors and stack traces make debugging lightning fast.
- **Automatic Waiting:** Never add waits or sleeps to your tests. Cypress automatically waits for commands and assertions before moving on. No more async hell.
- **Spies, Stubs, and Clocks:** Verify and control the behavior of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips.
- **Network Traffic Control:** Easily control, stub, and test edge cases without involving your server. You can stub network traffic however you like.
- **Consistent Results:** Our architecture doesn’t use Selenium or WebDriver. Say hello to fast, consistent and reliable tests that are flake-free.
- **Screenshots and Videos:** View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.
