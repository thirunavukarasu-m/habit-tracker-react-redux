
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habit-slice";

function AddHabitForm() {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit({
        name:name,
        frequency: frequency
      }))
    }
    setName("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <FormControl fullWidth>
            <InputLabel fullWidth>Frequency</InputLabel>
            <Select value={frequency} onChange={(e) => {
              setFrequency(e.target.value)
            }}>
              <MenuItem value = {'daily'}>Daily</MenuItem>
              <MenuItem value = {'weekly'}>Weekly</MenuItem>
              
            </Select>
          </FormControl>
          <Button type="submit" varient="contained" color="primary">Add Habit</Button>
        </Box>
      </form>
    </>
  )
}

export default AddHabitForm