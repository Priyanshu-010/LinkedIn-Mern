import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      author: req.user._id,
    });
    res.status(201).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
    console.log(error, "Error in createPost controller");
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
    console.log(error, "Error in getAllPosts controller");
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.id }).sort({
      createdAt: -1,
    });
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user posts", error: error.message });
    console.log(error, "Error in getUserPosts controller");
  }
};
