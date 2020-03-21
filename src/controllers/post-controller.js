import postService from 'services/post-service';

const list = async (req, res) => {
    try {
        const objects = await postService.list();
        res.json(objects)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}

const register = async (req, res) => {
  const {content} = req.body;
  try{
      const object = await postService.register(content, req.token);
      res.status(201).json(object);
  }catch (err) {
      res.status(400).json({ message: err.message })
  }
}

const deleteItem = async (req, res) => {
  const id = req.params.id;
  try{
    await postService.deleteItem(id);
    res.status(201).json({message: 'ok'});
}catch (err) {
    res.status(400).json({ message: err.message })
}
}

export default { list, register, deleteItem };