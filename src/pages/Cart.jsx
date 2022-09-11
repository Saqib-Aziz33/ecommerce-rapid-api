import { useSelector, useDispatch } from "react-redux"
import { TableContainer,Table, TableHead, TableRow, TableBody, TableCell, Stack, Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()
  
  if(cart.length === 0) return (<Box sx={{margin: '5rem auto', textAlign: 'center'}}>
    <Typography variant="h4">Cart is Empty</Typography>
    <Button variant='outlined' onClick={() => navigate('/')} sx={{marginTop: '1rem'}}>Back to Home</Button>
  </Box>)
  return (
    <Stack>
      <TableContainer sx={{width: '80%', margin: '4rem auto'}}>
      <Table>
      <TableBody>
        <TableRow>
          <TableCell>Items</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </TableContainer>

    <Box>
      <Typography>Total Items: {cart.length}</Typography>
      <Typography>Total: </Typography>
    </Box>

    </Stack>
  )
}
export default Cart