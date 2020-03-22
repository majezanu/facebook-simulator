import Like from 'models/likes';
import userService from 'services/user-service';
import postService from 'services/post-service';
const register = async (postId, token) => {
    const user = await userService.userFromToken(token);
    const post = await postService.getOne(postId);
    const like = new Like({
        post: post._id,
        user: user._id
    });
    try {
        const newLike = await like.save();
        post.likes.push(like);
        await post.save();
        return newLike;
      } catch (err) {
        throw err;
      }
}

const listByPost = async (postId) => {
  try {
    const likes = await Like.find({post:postId});
    return likes;
  } catch (err) {
    throw err;
  }
}

const countByPost = async (postId) => {
    return listByPost(postId).length;
}

const likeByUser = async (postId, token) => {
  const user = await userService.userFromToken(token);
  try {
    const like = await Like.find({post:postId, user:user._id});
    return like;
  } catch (err) {
    throw err;
  }
}

export default { register, listByPost, countByPost, likeByUser };