const express = require("express");
const datasetController = require("../controllers/datasetController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(datasetController.getAllData).post(
  // authController.protect,
  // authController.restrictTo("admin", "lead-guide"),
  datasetController.createData
);

router
  .route("/getOne/:id")
  .get(datasetController.getData)
  .patch(datasetController.updateData)
  .delete(datasetController.deleteData);

router
    .route("/allSummery")
    .get(datasetController.getDatasetSalaryStatistics);

router
  .route("/summery/:departmentName")
  .get(datasetController.getDepartmentSalaryStatistics);

router
  .route("/onContractSummary")
  .get(datasetController.getOnContractStatistics)
module.exports = router;
