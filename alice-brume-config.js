/*const jwt = require("jsonwebtoken")

module.exports = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNjA5MjA0MDUyfQ.VjajpsJ64mUv-r2izAyrYccHv5LibJux-1qV8706SHE"
  , username: jwt.decode(token).username
  , groupInfo: {group2: { members: ["bob"] }}
  , baseDir: "./BrumeFiles-" + username + '/'
}*/


const jwt = require("jsonwebtoken")

// Token for username == "alice"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWNlIiwiaWF0IjoxNjA5MjA0MDUyfQ.VjajpsJ64mUv-r2izAyrYccHv5LibJux-1qV8706SHE"
      , username =  jwt.decode(token).username

groupInfo = {
  sender: {
    group2: {members: ["bob"]}
  }

  ,receiver: {
    bob: {groups: ["group10"]}
  }
}
module.exports = {
   token: token
  , username: username
  , groupInfo: groupInfo //{} //{group2: { members: ["bob"] }}
  , baseDir: "./BrumeFiles-" + username + '/'
}

groupInfo = {
  sender: {
    group2: {members: ["bob"]}
  }

  ,receiver: {
    bob: {groups: ["group1"]}
  }
}
