const handleImage = async (req,res, db) => {
  try {
    const { id } =  req.body;
    const response = await db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    res.json(response[0])
  }
  catch(err) {
    res.status(400).json('unable to get entries')
  }
}

module.exports = {
  handleImage: handleImage
}