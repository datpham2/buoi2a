import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'

export default function Product(props) {
    const { prop } = props
    return (
        <div>
            <Col lg={3}>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {prop.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {prop.price}
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
