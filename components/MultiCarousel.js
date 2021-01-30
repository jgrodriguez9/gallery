import { Button, Card, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MultiCarousel(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
      };

    return(
        <Carousel 
            responsive={responsive}
            ssr={true}
            partialVisible={true}
            itemClass="image-item-20-px"
        >
            <Card className="shadow-sm">
                <Card.Img className="card-img-item" variant="top" src="https://firebasestorage.googleapis.com/v0/b/linkme-0.appspot.com/o/linkcardempresarial%2F85eaf0e7-4f17-4329-bdea-32bb2587e404_Banner-Minerva_desktop.png1611595836066?alt=media&token=a01e0136-14c6-4913-a715-87d6eea53a2f"></Card.Img>
                <Card.Body className="pt-2">
                    <div className="d-flex justify-content-between">
                        <div className="ft-0-8-rem text-dark">Pintura</div>
                        <div className="ft-0-8-rem text-black">30 x 40 cm</div>
                    </div>
                    
                    <Row className="mt-2">
                        <Col>
                            <h6 className="ft-0-9-rem font-weight-bold text-black mb-2">Calm seated figure</h6>
                        </Col>
                    </Row>
                    <hr className="m-0"/>
                    <div className="d-flex justify-content-end mt-2">
                        <h5 className="text-price">$300.00 MXN</h5>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-primary" className="btn-price">Obtener</Button>
                    </div>                    
                </Card.Body>
            </Card>
            <Card className="shadow-sm">
                <Card.Img className="card-img-item" variant="top" src="https://artelista.s3.amazonaws.com/obras/thumbs/0/0/7/1204696.jpg"></Card.Img>
                <Card.Body className="pt-2">
                    <div className="d-flex justify-content-between">
                        <div className="ft-0-8-rem text-dark">Pintura</div>
                        <div className="ft-0-8-rem text-black">30 x 40 cm</div>
                    </div>
                    
                    <Row className="mt-2">
                        <Col>
                            <h6 className="ft-0-9-rem font-weight-bold text-black mb-2">Calm seated figure</h6>
                        </Col>
                    </Row>
                    <hr className="m-0"/>
                    <div className="d-flex justify-content-end mt-2">
                        <h5 className="text-price">$300.00 MXN</h5>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-primary" className="btn-price">Obtener</Button>
                    </div>                    
                </Card.Body>
            </Card>
            <Card className="shadow-sm">
                <Card.Img className="card-img-item" variant="top" src="https://firebasestorage.googleapis.com/v0/b/linkme-0.appspot.com/o/linkcardempresarial%2F85eaf0e7-4f17-4329-bdea-32bb2587e404_Banner-Minerva_desktop.png1611595836066?alt=media&token=a01e0136-14c6-4913-a715-87d6eea53a2f"></Card.Img>
                <Card.Body className="pt-2">
                    <div className="d-flex justify-content-between">
                        <div className="ft-0-8-rem text-dark">Pintura</div>
                        <div className="ft-0-8-rem text-black">30 x 40 cm</div>
                    </div>
                    
                    <Row className="mt-2">
                        <Col>
                            <h6 className="ft-0-9-rem font-weight-bold text-black mb-2">Calm seated figure</h6>
                        </Col>
                    </Row>
                    <hr className="m-0"/>
                    <div className="d-flex justify-content-end mt-2">
                        <h5 className="text-price">$300.00 MXN</h5>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-primary" className="btn-price">Obtener</Button>
                    </div>                    
                </Card.Body>
            </Card>
            <Card className="shadow-sm">
                <Card.Img className="card-img-item" variant="top" src="https://artelista.s3.amazonaws.com/obras/thumbs/1/9/5/1204655.jpg"></Card.Img>
                <Card.Body className="pt-2">
                    <div className="d-flex justify-content-between">
                        <div className="ft-0-8-rem text-dark">Pintura</div>
                        <div className="ft-0-8-rem text-black">30 x 40 cm</div>
                    </div>
                    
                    <Row className="mt-2">
                        <Col>
                            <h6 className="ft-0-9-rem font-weight-bold text-black mb-2">Calm seated figure</h6>
                        </Col>
                    </Row>
                    <hr className="m-0"/>
                    <div className="d-flex justify-content-end mt-2">
                        <h5 className="text-price">$300.00 MXN</h5>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-primary" className="btn-price">Obtener</Button>
                    </div>                    
                </Card.Body>
            </Card>
        </Carousel>
    )

}

export default MultiCarousel