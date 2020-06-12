import {ROLES,STATUS,COLOR} from "../communs/variables";

export const tasks= [{"employee":"Luis Dominguez", "roles":[ROLES.DEVELOPER], "status":STATUS.DONE},
    {"employee":"Manuel Arias", "roles":[ROLES.DEVELOPER], "status":{"status":STATUS.TO_DO,"color":COLOR.GREEN}},
    {"employee":"Junior Pablo", "roles":[ROLES.ANALIST,ROLES.DESIGNER], "status":STATUS.DONE}
]
