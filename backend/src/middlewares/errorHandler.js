function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: statusCode === 500 ? "Erro interno no servidor" : err.message,
  });
}

module.exports = errorHandler;
