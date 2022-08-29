// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    const myTower = []

    for (let i = 0; i < nFloors; i++) {
        myTower.push(' '.repeat(nFloors - i - 1)
            + '*'.repeat((i * 2) + 1)
            + ' '.repeat(nFloors - i - 1));
    }
    return myTower
}

describe("Tests", () => {
    it("test", () => {
  Test.assertDeepEquals(towerBuilder(1), ["*"]);
  Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
  Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
    });
  });
  