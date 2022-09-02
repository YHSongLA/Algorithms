// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }

// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false

// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false

// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

function compareVersions(version1, version2) {
    let v1 = version1.split(".")
    let v2 = version2.split(".")

    for (let i = 0; i < v1.length; i++) {
        if (+v1[i] > +v2[i]) {
            return true
        }
        if (+v1[i] < +v2[i]) {
            return false
        }
    }
    if (v1.length >= v2.length) {
        return true
    }
    else {
        return false
    }
}

const {assert} = require("chai");

describe("Sample tests", () => {
  it("Testing versions without subversion", () =>
     assert.isTrue(compareVersions("11", "10")));
  
  it("Test equal versions", () =>
    assert.isTrue(compareVersions("11", "11")));
  
  it("Adding a subversion should make this version \"larger\"", () =>
    assert.isTrue(compareVersions("10.4.6", "10.4")));
  
  it("Subversion precedence is smaller than Version", () =>
    assert.isFalse(compareVersions("10.4", "11")));
  
  it("Version value is not the same as its decimal value", () =>
    assert.isFalse(compareVersions("10.4", "10.10")));
  
  it("Adding subversion does not make it larger than a greater version", () =>
    assert.isFalse(compareVersions("10.4.9", "10.5")));
});