const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }
  let res = []
  let temp = ''
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] == "string") {
      temp = members[i].trim()
      res.push(temp[0].toUpperCase())
    }
  }
  return res.sort().join('')
}
