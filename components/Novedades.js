import { Col, Row } from 'react-bootstrap'
import MultiCarousel from './MultiCarousel'

function Novedades(){

    return(
        <section id="services" className="pt-60p bg-section-1">
          <div className="container">
            <div className="section-header">
              <h2>Novedades del día</h2>              
            </div>
            <Row>
                <Col>
                    <MultiCarousel />
                </Col>
            </Row>
          </div>
        </section>
    )
}

export default Novedades