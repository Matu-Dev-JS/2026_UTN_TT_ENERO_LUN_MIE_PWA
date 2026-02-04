CREATE TABLE members_workspace (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_user INT NOT NULL,
    fk_id_workspace INT NOT NULL,
    role ENUM('admin', 'member') DEFAULT 'member',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_users_id_membersWorkspace
        FOREIGN KEY (fk_id_user)
        REFERENCES usuarios(id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,

    CONSTRAINT fk_workspaces_id_membersWorkspace
        FOREIGN KEY (fk_id_workspace)
        REFERENCES workspaces(id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);