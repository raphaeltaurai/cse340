// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")
const validate = require("../utilities/inventory-validation")

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

// Route to build vehicle detail view
router.get("/detail/:vehicleId", utilities.handleErrors(invController.buildByVehicleId));

// Route to build add classification view
router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification))

// Route to process add classification
router.post(
  "/add-classification",
  validate.classificationRules(),
  validate.checkClassificationData,
  utilities.handleErrors(invController.addClassification)
)

// Route to build add inventory view
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory))

// Route to process add inventory
router.post(
  "/add-inventory",
  validate.inventoryRules(),
  validate.checkInventoryData,
  utilities.handleErrors(invController.addInventory)
)

// Route to inventory management view
router.get("/", 
  utilities.checkJWTToken,
  utilities.checkInventoryAuth,
  utilities.handleErrors(invController.buildManagement)
)

// Route to build edit inventory view
router.get("/edit/:inv_id", 
  utilities.checkJWTToken,
  utilities.checkInventoryAuth,
  utilities.handleErrors(invController.buildEditInventory)
)

// trigger route
router.get("/triggerError", utilities.handleErrors(invController.triggerError));

// Get inventory by classification id for management view
router.get("/getInventory/:classification_id", utilities.handleErrors(invController.getInventoryJSON))

// Route to handle inventory update
router.post("/update", 
  utilities.checkJWTToken,
  utilities.checkInventoryAuth,
  validate.inventoryRules(),
  validate.checkUpdateData,
  utilities.handleErrors(invController.updateInventory)
)

// Classification routes
// router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification))
// router.post("/add-classification", 
//   validate.classificationRules(),
//   validate.checkClassificationData,
//   utilities.handleErrors(invController.addClassification))

// Inventory routes  
// router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory))
// router.post("/add-inventory",
//   validate.inventoryRules(),
//   validate.checkInventoryData, 
//   utilities.handleErrors(invController.addInventory))

module.exports = router