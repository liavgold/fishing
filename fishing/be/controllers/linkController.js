const { generateLink } = require('../services/email');

const linkGenerator = async (req, res, next) => {
  const { email } = req.body;
  next(await generateLink({ email }).catch(next));
};

module.exports = { linkGenerator };
