import { Container, Typography } from '@mui/material'
import './App.css'
import AddHabitForm from './components/AddHabitForm'

function App() {

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h1" variant='h2' align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
      </Container>
    </>
  )
}

export default App
