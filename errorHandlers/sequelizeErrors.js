const { UniqueConstraintError } = require('sequelize');

module.exports.sequelizeErrorHandler = async (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    return res.status(409).send({
      errors: err.errors,
    });
  }
  next(err);
};
