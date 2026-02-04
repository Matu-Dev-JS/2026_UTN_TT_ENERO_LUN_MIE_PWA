CREATE TABLE channels_workspaces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    description TEXT(1000) NOT NULL,
    fk_id_workspace INT,
    CONSTRAINT fk_id_channels_workspaces FOREIGN KEY(fk_id_workspace) REFERENCES workspaces(id)
)