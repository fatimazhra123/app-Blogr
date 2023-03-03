const Post = require("../model/post")
//create post
const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    try {
      const savePost = await newPost.save()
      res.status(200).json(savePost)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  /* 
  {
      "username":"admin",
      "title":"test5",
      "desc":"loreme2"
  } */
  
  // update post
  const updatePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      if (post.username === req.body.username) {
        try {
          const updatePost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          )
          res.status(200).json(updatePost)
        } catch (error) {
          res.status(500).json(error)
        }
      } else {
        res.status(401).json("You can update only your post!")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  // delete
  const deletePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      if (post.username === req.body.username) {
        try {
          await post.delete()
          res.status(200).json("Post Has been delete!")
        } catch (error) {
          res.status(500).json(error)
        }
      } else {
        res.status(401).json("You can delete only your post!")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  // get post
  const getOnepost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      res.status(200).json(post)
    } catch (error) {
      res.status(404).json(error)
    }
  }
  
  // get all post
  const getAllPost = async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    try {
      let posts
      if (username) {
        posts = await Post.find({ username: username })
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        })
      } else {
        posts = await Post.find()
      }
      res.status(200).json(posts)
    } catch (error) {
      res.status(404).json(error)
    }
  }
  

  module.exports = {
    createPost,
    updatePost,
    deletePost,
    getOnepost,
    getAllPost,
    // verifierEmail,
    // logout,
  };
  
  //localhost:/posts?user=ram
  