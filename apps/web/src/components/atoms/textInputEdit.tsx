import { useState, useRef } from 'react';
import { TextField } from '@mui/material';

export const TextInputEdit = (
  { defaultValue, setNewValue } : { defaultValue: string, setNewValue: any }
) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ?
      <TextField
      defaultValue={defaultValue}
      onChange={(ev) => setNewValue(ev.target.value)}
    />
    : {defaultValue}
  
}
