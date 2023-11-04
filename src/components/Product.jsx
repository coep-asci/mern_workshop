import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";

function Product({name, quantity, category, price, details, seller}) {
    const [num, setNum] = useState(0);
    // if num is 0, add to cart | else - num +

    function handleOnAdd(asdsa) {
        setNum(num+1);
    }

    function handleOnSub() {
        setNum(num-1);
    }

    return (
        <>
            <Card className="product-details" sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {seller}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {category}
                    </Typography>
                    <Typography variant="h4">
                        {price}₹
                    </Typography>
                    <Typography variant="body2">
                        {details}
                    </Typography>
                </CardContent>
                <CardActions>
                    {num === 0 ? <Button size="large" className="full-flex" onClick={handleOnAdd}>Add to Cart</Button> : 
                    <>
                        <Button size="large" className="full-flex" onClick={handleOnSub}>-</Button>
                        <Typography variant="h6" className="full-flex">{num}</Typography>
                        <Button size="large" className="full-flex" onClick={handleOnAdd}>+</Button>
                    </>}
                </CardActions>
            </Card>
        </>
    )
}

export default Product;
