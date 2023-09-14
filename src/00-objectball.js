/* Function that when called, returns an object of data */
function gameObject() {
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 8,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSanga Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

/* Function that takes a player's name when called and returns the amount of points scored by that player */
function numPointsScored(playerName) {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Checks to see if the player exists in the 'home' property of 'obj' */
    if (obj["home"]["players"][playerName]) {
        /* Returns points in the player's stats */
        return obj["home"]["players"][playerName]["points"]
    }
    /* Looks in 'away' property of 'obj' and returns points in the player's stats */
    return obj["away"]["players"][playerName]["points"];
}

/* Function that takes a player's name when called and returns the player's shoe size */
function shoeSize(playerName) {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Checks to see if the player exists in the 'home' property of 'obj' */
    if (obj["home"]["players"][playerName]) {
        /* Returns points in the player's shoe size */
        return obj["home"]["players"][playerName]["shoe"]
    }
    /* Looks in 'away' property of 'obj' and returns points in the player's shoe size */
    return obj["away"]["players"][playerName]["shoe"];
}

/* Function that takes the name of a team and returns an array of the team's colors */
function teamColors(tName) {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Ternary that checks if the team is in the 'home' property of the 'obj'. If so, return the 'home' team's colors. If not, return the 'away' team's colors */
    return  obj["home"]["teamName"] === tName ? obj["home"]["colors"] : obj["away"]["colors"];
}

/* Function that returns the name of both teams in the data */
function teamNames() {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Creates an empty array to store the team names */
    let arr = [];
    /* Iterates through 'obj' */
    for (let team in obj) {
        /* Pushes the name of each team into 'arr' */
        arr.push(obj[team]["teamName"])
    }
    /* Returns 'arr' with the team names */
    return arr;
}

/* Function that takes the name of a team when called and returns an array of all the jersey numbers of the players on the team */
function playerNumbers(tName) {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Creates an empty array to store the team names */
    let arr = [];
    /* Ternary that checks if the team is the 'home' team or 'away' then grabs the 'players' property of 'obj' for that team and stores it in a variable */
    let playerList = obj["home"]["teamName"] === tName ? obj["home"]["players"] : obj["away"]["players"];
    /* Iterates through 'playerList' */
    for (let player in playerList) {
        /* Pushes the numbers for each player into 'arr' */
        arr.push(playerList[player]["number"]);
    }
    /* Returns 'arr' with the team jersey numbers */
    return arr;
}

/* Function that takes a player's name when called and returns that player's stats */
function playerStats(playerName) {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Ternary that checks if the player is in the 'home' or 'away' property of 'obj''. Then returns the player's stats */
    return obj["home"]["players"][playerName] || obj["away"]["players"][playerName];
}

/* Function that finds the player in the data with the biggest shoe size and returns the amount of rebounds that player has */
function bigShoeRebounds() {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Assign a value to a variable that will represent the biggest shoe size found in 'obj' and that will be overwritten by any result to ensure the function works */
    let shoeSize = -1;
    /* Assign a value to a variable that will represent the amount of rebounds the player with the biggest shoe size has */
    let mostRebounds = 0;
    /* Iterate through 'obj' */
    for (let team in obj) {
        /* Iterate through the 'players' property of each property of 'obj' */
        for (let player in obj[team]["players"]) {
            /* Checks if each player's shoe size is bigger than 'shoeSize' */
            if (obj[team]["players"][player]["shoe"] > shoeSize) {
                /* If so, replace 'shoeSize' value with the player's shoe size */
                shoeSize = obj[team]["players"][player]["shoe"];
                /* Replace the value of 'mostRebounds' with the amount of rebounds the player has */
                mostRebounds = obj[team]["players"][player]["rebounds"];
            }
        }
    }
    /* Return the amount of rebounds the player with the biggest shoe size has */
    return mostRebounds;
}

/* Function that returns the most points scored by a player in the data */
function mostPointsScored() {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Assign a value to a variable that will represent the most points by a player found in 'obj' and that will be overwritten by any result to ensure the function works */
    let mostPoints = -1;
    /* Assign an empty string to a variable that will store the name of the player with the most points */
    let playerWithMostPoints = "";
    /* Iterate through 'obj' */
    for (let team in obj) {
        /* Iterate through the 'players' property of each property of 'obj' */
        for (let player in obj[team]["players"]) {
            /* Checks if each player's points is more than 'mostPoints' */
            if (obj[team]["players"][player]["points"] > mostPoints) {
                /* If so, replace 'mostPoints' value with the player's points */
                mostPoints = obj[team]["players"][player]["points"];
                /* Replace the value 'playerWithMostPoints' with player */
                playerWithMostPoints = player;
            }
        }
    }
    /* Return the name of the player with the most points */
    return playerWithMostPoints;
}

/* Function that totals the points of both teams and returns the team with the most points */
function winningTeam() {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Assigns an object to a variable that stores the scores of each team */
    let results = {
        "home": 0,
        "away": 0
    }
    /* Helper function that takes a string to access a property in 'obj' */
    function getPoints(team) {
        /* Iterate through the 'players' property of the 'team' property of 'obj' */
        for (let player in obj[team]["players"]) {
            /* Adds the points scored by each player to the corresponding 'team' property of 'results' */
            results[team] += obj[team]["players"][player]["points"];
        }
    }
    /* Calls helper function on each team */
    getPoints("home");
    getPoints("away");
    /* Ternary that checks if 'home' property of 'results' is more than the 'away' property of 'results'. If so, returns */
    return results["home"] > results["away"] ? obj["home"]["teamName"] : obj["away"]["teamName"];

}

/* Function that returns the player with the longest name */
function playerWithLongestName() {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Assign a value to a variable that will represent the longest length of a name among the players found in 'obj' and that will be overwritten by any result to ensure the function works */
    let result = -1;
    /* Assign an empty string to a variable that will store the name of the player with the longest name */
    let longestName = "";
    /* Iterate through 'obj' */
    for (let team in obj) {
        /* Iterate through the 'players' property of each property of 'obj' */
        for (let player in obj[team]["players"]) {
            /* Checks if the player's name is longer than 'result' */
            if (player.length > result) {
                /* If so, replace 'result' with the length of the player's name */
                result = player.length;
                /* Replace 'longestName' with 'player' */
                longestName = player;
            }
        }
    }
    /* Return the player with the longest name */
    return longestName;
}

/* Function that checks if the player with the longest name has the most steals */
function doesLongNameStealATon() {
    /* Stores object return from 'gameObject' in a variable */
    let obj = gameObject();
    /* Reuses previously created function and assigns the player with the longest name in a variable */
    let longestName = playerWithLongestName();
    /* Assigns the value of true to a variable */
    let bool = true;
    /* Declares a variable */
    let steals;
    /* If statement that checks if 'longestName' is in the 'home' property of 'obj' */
    if (obj["home"]["players"][longestName]) {
        /* If so, assign the number of steals 'longestName' has to 'steals' */
        steals = obj["home"]["players"][longestName]["steals"];
    } else {
        /* Else look in the 'away' property for 'longestName' and assign the number of steals he has to 'steals' */
        steals = obj["away"]["players"][longestName]["steals"]
    }
    /* Helper function that takes a string and iterates through the 'players' properties nested in 'obj' to check if 'longestName' has the most steals */
    function checkSteals(team) {
        /* Iterate through the 'players' property of the 'team' property of 'obj' */
        for (let player in obj[team]["players"]) {
            /* If a player has more steals than 'longestName' */
            if (obj[team]["players"][player]["steals"] > steals) {
                /* Replace the value of 'bool' with false and break out of the iteration */
                bool = false;
                break;
            }
        }
    }
    /* Call 'checkSteals' on the 'home' property of 'obj' */
    checkSteals("home");
    /* If 'bool' still has the value of true, call 'checkSteals' on the 'away' property of 'obj'. Only one player needs to have more steals than 'longestName' to make 'doesLongNameStealATon' return false */
    if (bool) {
        checkSteals("away");
    }
    /* Return the value of 'bool' */
    return bool
}