const {expect} = require('chai')
const {reverser} = require('../reverser')

const testsCases = [
  {
    case: ["hola", "mundo"],
    expected: ["odnu", "maloh"]
  },
  {
    case: ["eat", "code", "travel", "repeat"],
    expected: ["tae", "perl", "evarte", "doctae"]
  },
  {
    case: ["erick", "vazquez"],
    expected: ["zeuqz", "avkcire"]
  },
  {
    case: ["felipe", "nevarez"],
    expected: ["zerave", "nepilef"]
  },
]

describe('Testing: Ultimate Reverser', () => {
  it('case 1',  () => {
    const result = reverser(testsCases[0].case)
    expect(testsCases[0].expected).to.deep.equal(result)
  })
  it('case 2',  () => {
    const result = reverser(testsCases[1].case)
    expect(testsCases[1].expected).to.deep.equal(result)
  })
  it('case 3',  () => {
    const result = reverser(testsCases[2].case)
    expect(testsCases[2].expected).to.deep.equal(result)
  })
  it('case 4',  () => {
    const result = reverser(testsCases[3].case)
    expect(testsCases[3].expected).to.deep.equal(result)
  })
})