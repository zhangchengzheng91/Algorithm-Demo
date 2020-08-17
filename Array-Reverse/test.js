const reverse = require('./index')

test('reverse({ 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 })', () => {
  const array1 = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }
  expect(reverse(array1))
})

const evenArray = []
const oddArray = []

for (let i = 0; i < 10; i++) {
  evenArray.push(i)
}

for (let i = 0; i < 9; i++) {
  oddArray.push(i)
}

test(`reverse([${evenArray}])`, () => {
  expect(reverse(evenArray))
})

test(`reverse([${oddArray}])`, () => {
  expect(reverse(oddArray))
})

test(`reverse([${evenArray}], 0, 5)`, () => {
  expect(reverse(evenArray, 0, 5))
})

test(`reverse([${oddArray}], 0, 5)`, () => {
  expect(reverse(oddArray, 0, 5))
})

test(`reverse([${evenArray}], 5, 9)`, () => {
  expect(reverse(evenArray, 5, 9))
})

test(`reverse([${oddArray}], 5, 9)`, () => {
  expect(reverse(oddArray, 5, 9))
})

