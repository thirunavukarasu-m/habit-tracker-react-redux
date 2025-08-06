
import { Box, TextField } from "@mui/material";
import { useState } from "react"

function AddHabitForm() {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');
  
  return (
    <>
      <form>
        <Box sx = {{
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}>
          <TextField 
            value = {name}
            label = {"Habit Name"}
            placeholder="Enter Habit Name"
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Box>
      </form>
    </>
  )
}

export default AddHabitForm