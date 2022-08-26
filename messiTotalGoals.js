// Messi goals function

// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let sum = 0

    if (laLigaGoals === 0 && copaDelReyGoals === 0 && championsLeagueGoals === 0) {
        return 0
    } else {
        return sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals
    }
}

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(goals(0,0,0), 0)
  Test.assertEquals(goals(43, 10, 5), 58)
    });
  });