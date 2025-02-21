/* *************************************
* Account routes
*Unit 4, deliver login view activity
*  *********************************** */
// Needed Resources 
const express = require("express");
const router = new express.Router();
const accController = require("../controllers/accController");
const utilities = require("../utilities");

/* *************************************
* Deliver Login View
*Unit 4, deliver login view activity
*  *********************************** */
router.get("/login", utilities.handleErrors(accController.buildLogin));

// Export the router
module.exports = router;