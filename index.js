// const record = [
//     {year: "2017", result: "W"}
// ]

function superbowlWin(record){
   const ex = record.find(r => {
       console.log(r.result)
       if (r.result === "W"){
        return r.year
       }
   })
   return ex.year

}

