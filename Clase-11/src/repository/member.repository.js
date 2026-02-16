/* 
WorkspaceMemberRepository
    - create (fk_id_user, fk_id_workspace, role)
    - updateRole(id_member, role)
    - delete(id_member)
    - getMemberList(workspace_id) //Obtiene lista de miembros relacionados a ese espacio de trabajo
*/


import WorkspaceMember from "../models/workspaceMember.model.js"
class WorkspaceMemberRepository {
    async create(fk_id_workspace, fk_id_user, role) {
        await WorkspaceMember.create({
            fk_id_workspace: fk_id_workspace,
            fk_id_user: fk_id_user,
            role: role
        })
    }
    async deleteById(workspace_member_id) {
        await WorkspaceMember.findByIdAndDelete(workspace_member_id)
    }
    async getById(workspace_member_id) {
        await WorkspaceMember.findById(workspace_member_id)
    }
    async updateRoleById(member_id, role) {
        const new_workspace_member = await WorkspaceMember.findByIdAndUpdate(
            member_id,
            {role: role},
            { new: true }
        )
        return new_workspace_member
    }
    async getAll() {
        await WorkspaceMember.find()
    }
    async getMemberList(fk_id_workspace) {

        /* 
        con el metodo populate podemos traer los datos relacionados a las referencias que tenemos en el modelo, en este caso fk_id_user y fk_id_workspace.
        Entonces si quiero traer el nombre de usuario de cada miembro podria hacer un populate de fk_id_user y seleccionar solo el campo name, quedando asi:
        */

        const members = await WorkspaceMember.find({ fk_id_workspace: fk_id_workspace })
        .populate('fk_id_user', 'name email')
        .populate('fk_id_workspace', 'title description')
        console.log(members)
        return members
    }
}
const workspaceMemberRepository = new WorkspaceMemberRepository()
export default workspaceMemberRepository