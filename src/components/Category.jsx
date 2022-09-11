import { CircularProgress, Stack, Typography, Box } from "@mui/material/";
import { useSelector } from "react-redux";
import { CategoryAccordion } from "./";

const Category = () => {
  const { categories, status } = useSelector(
    (state) => state.categories
  );

  if (status === "success")
    return (
      <Stack sx={{borderRight: '1px solid rgba(0,0,0,0.1)'}}>
        {/* <Typography variant="h4">Category</Typography> */}
        <Box sx={{
          height: '80vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {categories.brands.map((category) => (
            <CategoryAccordion category={category} key={category.id} />
          ))}
        </Box>
      </Stack>
    );
  return <CircularProgress />;
};
export default Category;
