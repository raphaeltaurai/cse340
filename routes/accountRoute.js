/* *************************************
* Account routes
*Unit 4, deliver login view activity
*  *********************************** */
// Needed Resources 
const regValidate = require('../utilities/account-validation')
const express = require("express");
const router = new express.Router();
const accountController = require("../controllers/accountController");
const utilities = require("../utilities");

/* *************************************
* Deliver Login View
*Unit 4, deliver login view activity
*  *********************************** */
router.get("/login", utilities.handleErrors(accountController.buildLogin));

/* *************************************
* Deliver Registration
*  *********************************** */
router.get("/register", utilities.handleErrors(accountController.buildRegister))

/* *********************************
*Incoming registration 
********************************* */
router.post("/register",
    regValidate.registationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount)
)

// Export the router
module.exports = router;