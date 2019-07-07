class Model {
  constructor() {

  }

  getRandomNum(num = 100) {
    return Math.floor(Math.random() * num) + 1;
  }
}

export default Model;
