class UnauthorizedError extends Error {
  constructor(message = "Email ou senha incorretos") {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
