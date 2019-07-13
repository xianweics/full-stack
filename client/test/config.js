const path = require('path');

const join = (dir) => path.join(__dirname, dir);

module.exports = {
  rootDir: '../src',
  setupFiles: [join('setup.js')],
  displayName: 'CLIENT',
  collectCoverage: true,
  coverageDirectory: join('../coverage'),
  testPathIgnorePatterns: [],
  collectCoverageFrom: ['**/*.{js,jsx}'],
  testRegex: '\\.(test|spec)\\.jsx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': join(
      'fileMock.js'),
    '\\.(c|le|sa|sc)ss$': 'identity-obj-proxy',
    '^@root(.*)$': '<rootDir>$1',
    '^@public(.*)$': '<rootDir>public$1',
    '^@redux(.*)$': '<rootDir>redux$1',
    '^@utils(.*)$': '<rootDir>utils$1',
    '^@components(.*)$': '<rootDir>components$1',
    '^@services(.*)$': '<rootDir>services$1',
    '^@containers(.*)$': '<rootDir>containers$1',
    '^@history$': '<rootDir>history$',
  }
};
