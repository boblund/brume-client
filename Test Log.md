# Test Log
## Ran
1. Member with empty owner/group synced by owner
1. Add/change/delete file
1. Various permutations of user/group changing file while off-line
1. Various permutations of add/deleting while off-line
1. Bring up new group and add member
1. Remove member at owner
1. Remove member at member
1. Rename member field in cmd to dest
    1. eventQueueProcessor
    1. receiver: 99, 105, 111, 116, 119
    1. global: 74, 82, 137, 293
1. Change doCommand member arg to dest
1. Change offerProcessor username arg to src
1. Clean up sync and .members handling to reflect current owner/member relationship

## To Do
1. Clean up all group operations in groupInfo
1. Clean up fields in sync cmd
1. Clean up ENOTMEMBER handling and message
1. Replaced conflict processing in eventQueueProcessor with message saying it's not handled. Remove after some testing
