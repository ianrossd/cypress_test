# cypress_test
Cypress Test for client

### command.js
Added a custom function `visitSignup()` to be called before every test.

### index.js
Exceptions have been disabled through this file to prevent Cypress from failing some of the tests and completely stopping the spec file from continuing due to multiple errors by the website.

### cypress.env.json
This file is only included in the repo for reference. This file includes the emails and passwords for student and instructor. This should be added to the `.gitignore` file as this is intended to be customized for each machine/user for security purposes.

### signup_spec.js
This is the main spec/test file.
