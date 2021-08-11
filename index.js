// find the year winning supperbowl
// const = record=[]


function superbowlWin(record){
  const winningYear = record.find(ele => ele.result === "W")
  
  return winningYear ? winningYear.year : undefined

}
superbowlWin(record);

