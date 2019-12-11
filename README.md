# cypress_test
Cypress Test for client

### For running demo with UI:
- Download Cypress for Desktop https://download.cypress.io/desktop
- To install, just extract the downloaded Zip file to a folder of choice
- After installation, open/run Cypress for Desktop (Cypress.exe) and add the `cypress_test` as a project
- To add `cypress_test` as a project, drag the folder to Cypress for Desktop or click on the "select manually" link
- Click on `cypress_test` after adding it as a project
- The `signup_spec.js` file should now be displayed, click on the file
- Cypress for Desktop will now run a version of the Google Chrome/Electron browser and run the chosen spec file

### command.js
Added a custom function `visitSignup()` to be called before every test.

### index.js
Exceptions have been disabled through this file to prevent Cypress from failing some of the tests and completely stopping the spec file from continuing due to multiple errors by the website.

### cypress.env.json
This file is only included in the repo for reference. This file includes the emails and passwords for student and instructor. This should be added to the `.gitignore` file as this is intended to be customized for each machine/user for security purposes.

### signup_spec.js
This is the main spec/test file.
