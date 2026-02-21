let FalseJSValidationFailedToPassError = class extends require("es-error-intrinsics/Error") {
  constructor(...stuff) {
    super(...stuff)
    this.name = "FalseJSValidationFailedToPassError"
  }
}

module.exports = FalseJSValidationFailedToPassError
