import {Card, CardMedia, CardContent, Typography, Button, Stack, IconButton} from '@mui/material'
import {AddShoppingCart} from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = ({product}) => {
  return (
    <Card sx={{maxWidth: '300px'}}>
      <CardMedia component='img' height={200} image={`https://${product.imageUrl}`} alt={product.name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack direction='row' justifyContent='space-around' alignItems='center'>
          <Typography variant="body1" color="text.secondary">{product.price.current.text}</Typography>
          {/* <Button><FavoriteOutlined /></Button> */}
          <IconButton aria-label='fav-icon'><FavoriteBorderIcon /></IconButton>
        </Stack>
        <Button startIcon={<AddShoppingCart />} variant='contained' color='primary' sx={{marginTop: '1rem'}} fullWidth>Add to Cart</Button>
      </CardContent>
    </Card>
  )
}
export default Item