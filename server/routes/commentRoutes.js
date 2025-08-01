const express = require("express");

const router = express.Router();

const commentController = require("../controllers/commentController");
const verifyJWT = require("../middleware/verifyJWT");

router.post(
  "/:slug/comments",
  verifyJWT,
  commentController.addCommentsToArticle
);

router.get(
  "/:slug/comments",

  commentController.getCommentsFromArticle
);

router.delete(
  "/:slug/comments/:id",

  commentController.deleteComment
);

module.exports = router;
