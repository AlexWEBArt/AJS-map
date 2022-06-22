export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
  }

  set(codeError, description) {
    this.repository.set(Number(codeError), String(description));
  }

  translate(code) {
    if (!this.repository.has(code)) {
      return 'Unknown error';
    }
    return this.repository.get(code);
  }
}
