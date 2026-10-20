class BadRequestError extends Error {
  constructor(message = "Dados invalidos") {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
