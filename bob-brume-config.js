const jwt = require("jsonwebtoken")

// Token for username == "bob"
const token = //expired 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYxMDU2NjI4MiwiZXhwIjoxNjEwNTY2MjgzfQ.Fvb5mIjIdUQYdU-7FOVZ3JcmtI_eHxP4oqUbqoJS55E'
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTYwOTEwNTg0M30.eVi9TTefK_FJhU8jfJZcBnErTpF8sWrMQWFLIlqNDpg"
      , username =  jwt.decode(token).username

groupInfo = {
  sender: {
    group1: {members: ["alice"]}
  }

  ,receiver: {
    alice: {groups: ["group2"]}
  }
}

/*
groupInfo = {
  myGroups: {
    'g1': ['alice']
  }

  ,memberOf: {
    'alice': ['g2']
  }
}
*/

module.exports = {
   token: token
  , username: username
  , groupInfo: groupInfo //{group1: { members: ["alice"] }}
  , baseDir: "BrumeFiles-" + username + '/'
}

    