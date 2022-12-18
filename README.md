<section>
<h1 align="center">Metric-Imperial Converter</h1>
<h2>Description</h2>
<p>A full stack JavaScript app that is functionally similar to this: https://metric-imperial-converter.freecodecamp.rocks/.</p>
<h2>Purpose</h2>
  <p><a href="https://www.freecodecamp.org">freeCodeCamp</a> Quality Assurance certification</p>
<h2>Required steps</h2>
  <ol>
    <li>Complete the project.</li>
      <ul>
        <li>Complete the necessary conversion logic in /controllers/convertHandler.js</li>
        <li>Complete the necessary routes in /routes/api.js</li>
        <li>Copy the sample.env file to .env and set the variables appropriately</li>
        <li>To run the tests uncomment NODE_ENV=test in your .env file</li>
        <li>To run the tests in the console, use the command npm run test. To open the Replit, console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"</li>
      </ul>
    <li>Write the following tests in tests/1_unit-tests.js.</li>
      <ul>
        <li>convertHandler should correctly read a whole number input.</li>
        <li>convertHandler should correctly read a decimal number input.</li>
        <li>convertHandler should correctly read a fractional input.</li>
        <li>convertHandler should correctly read a fractional input with a decimal.</li>
        <li>convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).</li>
        <li>convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.</li>
        <li>convertHandler should correctly read each valid input unit.</li>
        <li>convertHandler should correctly return an error for an invalid input unit.</li>
        <li>convertHandler should return the correct return unit for each valid input unit.</li>
        <li>convertHandler should correctly return the spelled-out string unit for each valid input unit.</li>
        <li>convertHandler should correctly convert gal to L.</li>
        <li>convertHandler should correctly convert L to gal.</li>
        <li>convertHandler should correctly convert mi to km.</li>
        <li>convertHandler should correctly convert km to mi.</li>
        <li>convertHandler should correctly convert lbs to kg.</li>
        <li>convertHandler should correctly convert kg to lbs.</li>
      </ul>
    <li>Write the following tests in tests/2_functional-tests.js.</li>
      <ul>
        <li>Convert a valid input such as 10L: GET request to /api/convert.</li>
        <li>Convert an invalid input such as 32g: GET request to /api/convert.</li>
        <li>Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.</li>
        <li>Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.</li>
        <li>Convert with no number such as kg: GET request to /api/convert.</li>
      </ul>
    <li>Submit the code.</li>
      <ul>
        <li>Save all the required files into a public repository and submit the URL.</li>
      </ul>
  </ol>
<h2>Result</h2>
<div>
  <p>A user named Fabio has been added to the database</p>
  <img src="https://raw.githubusercontent.com/M1S7K/freeCodeCamp-Salon-Appointment-Scheduler/main/screenshots/Terminal.png" alt="terminal_screenshot" width="380">
</div>
<div>
  <p>All the necessary steps were completed</p>
  <img src="https://raw.githubusercontent.com/M1S7K/freeCodeCamp-Salon-Appointment-Scheduler/main/screenshots/Task.png" alt='task' width="380">
</div>
<h2>Helpful Links</h2>
<ol>
  <li><a href="https://www.chaijs.com">Chai Assertion Library</a>
  <li><a href="https://www.freecodecamp.org/learn/quality-assurance/">freeCodeCamp Quality Assurance course</a>
</ol>
 </section>
