const { v1: uuidv1 } = require('uuid');

const generateLink = async () => {
  const randomID = uuidv1();
  const link = `www.google.com/${randomID}`;
  return link;
};

module.exports = {
  generateLink,
};
