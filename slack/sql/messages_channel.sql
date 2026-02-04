CREATE TABLE messages_channel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_member INT NOT NULL,
    fk_id_channel INT NOT NULL,
    content TEXT(5000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_membersWorkspace_id_messagesChannel
        FOREIGN KEY (fk_id_member)
        REFERENCES members_workspace(id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,

    CONSTRAINT fk_workspaceChannels_id_messagesChannel
        FOREIGN KEY (fk_id_channel)
        REFERENCES channels_workspaces(id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);