import Post from 'models/posts';
import userService from './user-service';
import User from 'models/users';

const register = async (content, token) => {
    const user = await userService.userFromToken(token);
    const post = new Post({
        content,
        user: user._id
    });
    try {
        let newPost = await post.save();
        return await Post.findById(newPost._id).populate('user');;
      } catch (err) {
        throw err;
      }
}

const list = async () => {
  try {
    const posts = await Post.find().populate(['user', 'likes']);
    return posts;
  } catch (err) {
    throw err;
  }
}

const deleteItem = async(id) => {
  try {
    await Post.deleteOne({_id:id});
    return true;
  } catch (err) {
    throw err;
  }
}

const softDeletePost = async (id) => {
  try {
    const post = await getOne(id);
    post.active = !post.active;
    await post.save();
    return post;
  } catch (error) {
    throw error;
  }
}

const getOne = async (id) => {
  try {
    const post = await Post.findById(id).populate(['user', 'likes']);
    return post;
  } catch (err) {
    throw err;
  }
}

export default { register, list, deleteItem, getOne, softDeletePost };