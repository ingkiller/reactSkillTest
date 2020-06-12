import {ROLES,STATUS,COLOR} from "../communs/variables";

export const tasks= [
    {"employee":"Luis Dominguez", "roles":[ROLES.DEVELOPER], "status":STATUS.DONE},
    {"employee":"Manuel Arias", "roles":[ROLES.DEVELOPER], "status":{"status":STATUS.TO_DO,"color":COLOR.GREEN}},
    {"employee":"Evaristo Escalona", "roles":[ROLES.DEVELOPER], "status":STATUS.DONE},
    {"employee":"Maikel Torres", "roles":[ROLES.DEVELOPER], "status":STATUS.DONE},
    {"employee":"Yisel Naranjo", "roles":[ROLES.DEVELOPER], "status":STATUS.DONE},

    {"employee":"Fernando Saldivar", "roles":[ROLES.ANALIST], "status":STATUS.DONE},
    {"employee":"Elvis Guerrero", "roles":[ROLES.ANALIST], "status":STATUS.DONE},

    {"employee":"Marlenes Pardo", "roles":[ROLES.TEAM_LEADER], "status":STATUS.DONE},


    {"employee":"Camila Aguilera", "roles":[ROLES.DESIGNER], "status":STATUS.DONE},
    {"employee":"Maikel Brito", "roles":[ROLES.DESIGNER], "status":STATUS.DONE},


    {"employee":"Ariannis Rodriguez", "roles":[ROLES.PROJECT_OWNER], "status":STATUS.DONE},



    {"employee":"Felipe Fabre", "roles":[ROLES.DEVELOPER,ROLES.ANALIST], "status":STATUS.DONE},
    {"employee":"Roberto Almira", "roles":[ROLES.DEVELOPER,ROLES.DESIGNER], "status":STATUS.DONE},

    {"employee":"Yadiana Ramirez", "roles":[ROLES.PROJECT_OWNER,ROLES.TEAM_LEADER], "status":STATUS.DONE},

    {"employee":"Lidia Borjas", "roles":[ROLES.DEVELOPER,ROLES.PROJECT_OWNER], "status":STATUS.DONE},
    {"employee":"Sofia Barajo", "roles":[ROLES.DESIGNER,ROLES.ANALIST], "status":STATUS.DONE},

]
