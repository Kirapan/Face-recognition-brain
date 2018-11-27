const handleSignin = async (req, res, db, bcrypt) => {
  try {
    const response = await db.select('email', 'hash').from('login')
    .where('email','=',req.body.email)
    const isValid = bcrypt.compareSync(req.body.password, response[0].hash)
    if(isValid) {
      const user = await db.select('*').from('users').where('email', '=', req.body.email)
      res.json(user)
    } else {
      res.status(404).json('wrong credentials')
    }
  } catch (err) {
    res.status(404).json('wrong credentials')
  }
}

module.exports = {
  handleSignin: handleSignin
}