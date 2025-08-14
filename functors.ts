class Maybe {
  constructor(value) { this.value = value }
  static just(v) { return new Maybe(v) }
  static nothing() { return new Maybe(null) }

  map(fn) {
    return this.value == null ? Maybe.nothing() : Maybe.just(fn(this.value))
  }
}
