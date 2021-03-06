import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup"
import { ListGroupItem } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Origins extends Component {
  componentDidMount = () => {
    window.scrollTo(0,0)
  }

    render () {
       
      const beerOrigins = this.props.beers.map((origin) => {
            return (
              <div key={origin.style}>
                  <ListGroup>
                    <ListGroup.Item className="substyle">
                      <h2> <Link to= {"/substyle/" + origin.id} className = "styleLink"> <FontAwesomeIcon icon="beer" fixedWidth/>
                      {origin.style} - {origin.origin}
                      </Link></h2> 
                    </ListGroup.Item>
                    <ListGroupItem>
                      <p>{origin.description}</p>
                      </ListGroupItem>
                  </ListGroup>
                  <br></br>
              </div>
            )
          })

        return (
            <div className="origins">
                <h1 className="subTitle"> Where was your favorite beer created? </h1>
                <h5>A beer style is a label given to a beer that describes its overall character and often, its place of origin. Click on any of the Beer Styles below to learn more.</h5>
                {beerOrigins}
                <a href="#top">
                  <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
                {this.wrap}
            </div>
            
        )
    }
}

export default Origins;