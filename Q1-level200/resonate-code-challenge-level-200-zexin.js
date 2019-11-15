// TODO: Modify this function

//secret is for anti-frauding
const secret = 5;

function generateShortCode(storeId, transactionId) {
  //dateArray is for storing the date after coding
  const dateArray = [];
  for (i = 1; i < 31; i++) {
    dateArray[i] = "D" + (i + secret).toString(36);
  }

  //storeArray is for storing the storeid after coding
  const storeArray = [];
  for (i = 1; i <= 200; i++) {
    storeArray[i] = "S" + (i + secret).toString(36);
  }

  //transactionNumberArray is for storing transaction number after coding
  const transactionNumberArray = [];
  for (i = 1; i <= 10000; i++) {
    transactionNumberArray[i] = "N" + (i + secret).toString(36);
  }

  //define a date object
  let date = new Date();

  //the storeid should not larger than 200
  if (storeId > 200) {
    console.log("the storeId cannot larger than 200");
  }

  //the transaction number cannot larger than 10000
  if (transactionId > 10000) {
    console.log("the transaction number cannot larger than 10000");
  }

  let dateIndex = parseInt(date.getDate());

  let storeIndex = storeId;
  let transactionNumbereIndex = transactionId;

  let generateCode =
    storeArray[storeIndex] +
    transactionNumberArray[transactionNumbereIndex] +
    dateArray[dateIndex];

  console.log(generateCode);
  return generateCode;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  // Logic goes here

  let date = new Date();

  let store_id = parseInt(shortCode.match(/S(\S*)N/)[1], 36) - secret;
  let transaction_id = parseInt(shortCode.match(/N(\S*)D/)[1], 36) - secret;
  let shopDate_id = parseInt(shortCode.match(/D(\S*)/)[1], 32) - secret;
  let currentDate_id = parseInt(date.getDate().toString());

  let dateVarience = currentDate_id - shopDate_id;

  shopDate = new Date(date.setDate(date.getDate() - dateVarience));
  today = new Date();
  console.log(
    store_id.toString() + " " + transaction_id.toString() + " " + shopDate
  );
  return {
    storeId: store_id, // store id goes here,
    shopDate: shopDate, // the date the customer shopped,
    transactionId: transaction_id // transaction id goes here
  };
}

generateShortCode(2, 9);
decodeShortCode("S7NeDh");

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {
  var storeIds = [175, 42, 0, 9];
  var transactionIds = [9675, 23, 123, 7];

  storeIds.forEach(function(storeId) {
    transactionIds.forEach(function(transactionId) {
      var shortCode = generateShortCode(storeId, transactionId);
      var decodeResult = decodeShortCode(shortCode);
      $("#test-results").append(
        "<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>"
      );
      AddTestResult("Length <= 9", shortCode.length <= 9);
      AddTestResult("Is String", typeof shortCode === "string");
      AddTestResult("Is Today", IsToday(decodeResult.shopDate));
      AddTestResult("StoreId", storeId === decodeResult.storeId);
      AddTestResult("TransId", transactionId === decodeResult.transactionId);
    });
  });
}

function IsToday(inputDate) {
  // Get today's date
  var todaysDate = new Date();
  // call setHours to take the time out of the comparison
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
}

function AddTestResult(testName, testResult) {
  var div = $("#test-results").append(
    "<div class='" +
      (testResult ? "pass" : "fail") +
      "'><span class='tname'>- " +
      testName +
      "</span><span class='tresult'>" +
      testResult +
      "</span></div>"
  );
}
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
//https://codepen.io/tanzeytang/pen/MWWqWxB?editors=1010
