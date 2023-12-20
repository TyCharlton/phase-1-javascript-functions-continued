// code your solution here
function saturdayFun(satFun = "roller-skate") {
    return `This Saturday, I want to ${satFun}!`
}
saturdayFun()

function mondayWork(monWork = "go to the office"){
    return `This Monday, I will ${monWork}.`
}
mondayWork()

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }

}

