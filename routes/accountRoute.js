// Needed Resources 
const express = require("express");
const router = new express.Router();
const accountController = require("../controllers/accountController");
const utilities = require("../utilities");

// Route for "My Account" page
router.get("/my-account", utilities.errorHandler(accountController.getMyAccount));

// Export the router
module.exports = router;