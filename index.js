const replaceAt = (string, index, replacement) => {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

const rules = {
    "q1": {
        "0": ["q1", "0", "R"],
        "1": ["q1", "1", "R"],
        "_": ["q2", "_", "L"]
    },
    "q2": {
        "0": ["q3", "1", "L"],
        "1": ["q2", "0", "L"],
        "_": ["q3", "1", "L"]
    },
    "q3": {
        "0": ["q3", "0", "L"],
        "1": ["q3", "1", "L"],
        "_": ["Stop", "_", "R"]
    }
}

var string = "1011"
var currentState = "q1"
var currentPosition = 0
var countCount = 0

while (currentState !== "Stop") {
    // these two conditions allows us to create infinity tape 
    if (currentPosition + 1 > string.length) string += "_"
    if (currentPosition < 0) {
        string = "_" + string
        currentPosition++
    }

    countCount++
    console.log(`Action ${countCount}`)
    console.log(currentState)
    console.log(string)
    console.log(" ".repeat(currentPosition) + "↑")
    console.log("")

    const rule = rules[currentState][string[currentPosition]]
    const ruleState = rule[0]
    const ruleChange = rule[1]
    const ruleDirection = rule[2]
    currentState = ruleState
    string = replaceAt(string, currentPosition, ruleChange)

    if (ruleDirection === "R") currentPosition++ // "R" = "Right"
    else currentPosition-- // if ruleDirection === "L" = "Left"
}
console.log("Result:")
console.log(string)


