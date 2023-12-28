const express = require('express');
const router = express.Router();




// JSON PlaceHolder API
const { posts, comments, albums, photos, todos, users } = require('../../jsonplaceholder/controllers/jsonPlaceHolderAPI');

router.get("/posts", posts);
router.get("/comments", comments);
router.get("/albums", albums);
router.get("/photos", photos);
router.get("/todos", todos);
router.get("/users", users);

module.exports = router;