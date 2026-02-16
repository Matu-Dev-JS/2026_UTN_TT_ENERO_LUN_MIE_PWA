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
        const members = await WorkspaceMember.find({ fk_id_workspace: fk_id_workspace })
        console.log(members)
        return members
    }
}
const workspaceMemberRepository = new WorkspaceMemberRepository()
export default workspaceMemberRepository