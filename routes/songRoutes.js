const express = require("express");
const router = express.Router();
const {
  getSongs,
  createSong,
  toggleSongStatus,
  deleteSong,
} = require("../controllers/songController");

router.route("/").get(getSongs).post(createSong);

router.route("/:id").delete(deleteSong);

router.patch("/:id/status", toggleSongStatus);

module.exports = router;
