import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function HabitList() {
  const habits = useSelector((state) => {
    return state.habits.habits
  })
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        mt: 4,
        gap: 2
      }}>
        {
          habits.map((habit) => {
            return (
              <Paper key = {habit.id} elevation={2} sx={{
                p: 2
              }}>
                <Grid container alignItems={"center"}>
                  <Grid>
                    <Typography variant='h6'>{habit.name}</Typography>
                    <Typography variant='body2' color='text.secondary'>{habit.frequency}</Typography>
                    
                  </Grid>
                </Grid>
              </Paper>
            )
          })
        }
      </Box>
    </>
  )
}
export default HabitList;