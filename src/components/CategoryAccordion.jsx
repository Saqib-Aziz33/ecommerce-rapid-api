import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
 import { useDispatch } from "react-redux";
  
  const CategoryAccordion = ({category}) => {
    const dispatch = useDispatch()
    const e = false
    if(e) dispatch()
    return (
      <Accordion elevation={0} sx={{width: '300px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{category.content.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            category.children.map(item => (
                <Button sx={{display: 'block', width: '100%'}} key={item.link.categoryId} variant="text" onClick={() => console.log(item.link.categoryId)}>{item.content.title}</Button>
            ))
          }
        </AccordionDetails>
      </Accordion>
    );
  };
  export default CategoryAccordion;
  