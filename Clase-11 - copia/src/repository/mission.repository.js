import Mission from "../models/mission.model.js";
class MissionRepository {
    async create(title, id_user) {
        await Mission.create({
            title: title,
            fk_id_user: id_user
        })
    }
    async actualizarEstatusPorId(mission_id, new_status) {
        return await Mission.findByIdAndUpdate(mission_id, { status: new_status }, { new: true })
    }
}
const missionRepository = new MissionRepository()
export default missionRepository