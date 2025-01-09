import { useState, useRef } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import { TextField } from '@mui/material';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  const [newName, setNewName] = useState(name)
  const [newEmail, setNewEmail] = useState(email)
  const [editing, setEditing] = useState('')

  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          <Typography variant="subtitle1" lineHeight="1rem" onClick={() => setEditing('name')}>
            {editing === 'name' ?
              <TextField defaultValue={newName} onChange={(ev) => setNewName(ev.target.value)} />
              : newName
            }
          </Typography>
          <Typography variant="caption" color="text.secondary" onClick={() => setEditing('email')}>
            {editing === 'email' ?
              <TextField defaultValue={newEmail} onChange={(ev) => setNewEmail(ev.target.value)} />
              : email
            }
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
