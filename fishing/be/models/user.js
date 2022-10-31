module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      user_name: {
        type: String,
        required: true,
        unique: true,
        index: true,
      },
      password: {
        type: String,
        required: true,
        index: true,
      },
    },
  );

  return mongoose.model(
    'kit',
    schema,
  );
};
