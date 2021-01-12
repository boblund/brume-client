const jwt = require("jsonwebtoken")

// Token for username == "bob"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwOTEwNTg0M30.eVi9TTefK_FJhU8jfJZcBnErTpF8sWrMQWFLIlqNDpg"
      , username =  jwt.decode(token).username

groupInfo = {
  sender: {
    group1: {members: ["alice"]}
  }

  ,receiver: {
    alice: {groups: ["group2"]}
  }
}
module.exports = {
   token: token
  , username: username
  , groupInfo: groupInfo //{group1: { members: ["alice"] }}
  , baseDir: "BrumeFiles-" + username + '/'
}

    