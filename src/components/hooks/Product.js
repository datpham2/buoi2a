import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'

export default function Product(props) {
    const { product } = props
    return (
        <div>
            <Col sm="3">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Add to cart</Button>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
