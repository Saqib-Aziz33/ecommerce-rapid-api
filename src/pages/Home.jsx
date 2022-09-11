import { Stack } from "@mui/material"
// components
import {Category, Items} from '../components'

const Home = () => {
  return (
    <Stack component='section' direction='row' spacing={4} sx={{padding: {xs: '1rem', md: '1rem 2rem'}}}>
      <Category />
      <Items />
    </Stack>
  )
}
export default Home