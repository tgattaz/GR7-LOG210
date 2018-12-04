module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    /*'^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',*/
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
 //il faut igiorer certain(s) module(e)
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  coveragePathIgnorePatterns: ['<rootDir>/src/api.js']
};
/* snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '<rootDir>/(scr/test/**/
/*        *.spec.(js | jsx | ts | tsx) | ** /__test__/ * .(js | jsx | ts | tsx))  
'
], */