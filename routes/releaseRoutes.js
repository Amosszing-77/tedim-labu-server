const express = require("express");
const router = express.Router();
const {
  getReleases,
  createRelease,
  updateRelease,
  toggleReleaseStatus,
  deleteRelease,
} = require("../controllers/releaseController");

router.route("/").get(getReleases).post(createRelease);

router.route("/:id").put(updateRelease).delete(deleteRelease);

router.patch("/:id/status", toggleReleaseStatus);

module.exports = router;
