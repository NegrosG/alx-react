o develop your tests faster, you can watch them. The test suite will run for every change you make:

Add the following script to task_1/package.json: "test-watch": "jest --watch"
Run your suite using npm run test-watch
Header.test.js
Import your new Header component within the test, and write two checks:

Shallow render the Header component to verify it renders without crashing
Verify that the components render img and h1 tags
Login.test.js
Import your new Login component within the test, and write two checks:

Shallow render the Login component to verify it renders without crashing
Verify that the components renders 2 input tags and 2 label tags
Footer.test.js
Import your new Footer component within the test, and write two checks:

Shallow render the Footer component to verify it renders without crashing
Verify that the components at the very least render the text “Copyright”
App.test.js
Modify the App.test.js file, and add four checks:

It should contain the Notifications component
It should contain the Header component
It should contain the Login component
It should contain the Footer component
Requirements:

At this point, running the test suites, should show:
Test Suites: 6 passed, 6 total
Tests: 18 passed, 18 total
