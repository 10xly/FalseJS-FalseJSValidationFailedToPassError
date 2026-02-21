let FalseJSValidationFailedToPassError = class extends Error {
  constructor(...stuff) {
    super(...stuff)
    this.name = "FalseJSValidationFailedToPassError"
  }
}

module.exports = FalseJSValidationFailedToPassError
