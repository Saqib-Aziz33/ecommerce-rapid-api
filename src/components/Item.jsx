import {Card, CardMedia, CardContent, Typography, Button, Stack, IconButton} from '@mui/material'
import {AddShoppingCart} from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {add} from '../app/features/cartSlice'
import { useDispatch } from 'react-redux';

const Item = ({product}) => {
  const dispatch = useDispatch()
  const name = product.name.split(' ')[1] + " " + product.name.split(' ')[2]

  return (
    <Card component='article' sx={{maxWidth: '250px'}}>
      <CardMedia component='img' height={200} image={`https://${product.imageUrl}`} alt={product.name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">{name}</Typography>
        <Typography gutterBottom variant="body2" component="p">{product.name}</Typography>
        <Stack direction='row' justifyContent='space-around' alignItems='center'>
          <Typography variant="body1" color="text.secondary">Price: {product.price.current.text}</Typography>
          <IconButton color='error' aria-label='fav-icon'><FavoriteBorderIcon /></IconButton>
        </Stack>
        <Button onClick={() => dispatch(add({id: product.id, name, img: `https://${product.imageUrl}`, price: product.price.current.value}))} startIcon={<AddShoppingCart />} variant='contained' color='primary' sx={{marginTop: '1rem'}} fullWidth>Add to Cart</Button>
      </CardContent>
    </Card>
  )
}
export default Item