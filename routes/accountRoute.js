/* *************************************
* Account routes
*Unit 4, deliver login view activity
*  *********************************** */
// Needed Resources 
const express = require("express");
const router = new express.Router();
const accController = require("../controllers/accountController");
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

// Export the router
module.exports = router;