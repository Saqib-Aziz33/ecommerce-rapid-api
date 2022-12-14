import { Stack, CircularProgress, Box, Typography } from "@mui/material";
import { Item } from "./";
import { useSelector } from "react-redux";

const Items = () => {
  const { status, products } = useSelector((state) => state.products);

  if (status !== "success")
    return (
      <Box position="relavite">
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
    );
  return (
    <Stack>
      <Typography variant="h4" sx={{marginBottom: 2}}>{products.categoryName}</Typography>
      <Stack gap={4} direction="row" flexWrap="wrap">
        {products.products.length === 0 ? (
          <Typography variant="body1" m={4}>No Items Found</Typography>
        ) : (
          products.products.map((product) => (
            <Item product={product} key={product.id} />
          ))
        )}
      </Stack>
    </Stack>
  );
};
export default Items;
