let heathsTeamScore =[89,120,103]
let zanesTeamScore =[116,94,123]

let heathsAvg= (heathsTeamScore[0] + heathsTeamScore[1] + heathsTeamScore[2]) / 3

console.log(`average score for Heath's team is ${heathsAvg}`)

let zanesAvg= (zanesTeamScore[0] + zanesTeamScore[1] + zanesTeamScore[2]) / 3

console.log(`average score for Zane's team is ${zanesAvg}`)

zanesAvg>=heathsAvg ? console.log(`Winner is Zane's Team with average score of ${zanesAvg}`) : console.log(`Winner is Heath's Team with average score of ${heathsAvg}`)

 heathsTeamScore =[116,94,193]
 zanesTeamScore =[89,120,100]

 let heathsNewAvg= (heathsTeamScore[0] + heathsTeamScore[1] + heathsTeamScore[2]) / 3

console.log(`average score for Heath's team is ${heathsNewAvg}`)

let zanesNewAvg= (zanesTeamScore[0] + zanesTeamScore[1] + zanesTeamScore[2]) / 3

console.log(`average score for Zane's team is ${zanesNewAvg}`)

zanesNewAvg>=heathsNewAvg ? console.log(`Winner is Zane's Team with average score of ${zanesNewAvg}`) : console.log(`Winner is Heath's Team with average score of ${heathsNewAvg}`)


let mariahsTeamScore =[97,134,105]

let mariahsAvg= (mariahsTeamScore[0]+mariahsTeamScore[1]+mariahsTeamScore[2]) / 3

console.log(`average score for Mariah's team is ${mariahsAvg}`)

if (zanesNewAvg>= heathsNewAvg && mariahsAvg){
    console.log(`Winner is Zane's Team with average score of ${zanesNewAvg}`)

}else{
    if(heathsNewAvg>=mariahsAvg){
        console.log(`Winner is Heath's Team with average score of ${heathsNewAvg}`)
    }else{
    console.log(`Winner is Mariah's Team with average score of ${mariahsAvg}`)
}
}
