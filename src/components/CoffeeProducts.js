import React, {Component} from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,CardSubtitle, CardBody, Container } from 'reactstrap';

const CoffeeProducts = (props) => {
    return (
        <>
     <Container>
            <CardGroup>
                <Card>
                <CardImg top width="100%" src="../assets/images/Bolivian.jpeg" alt="Bolivian coffee beans" />
                <CardBody>
                    <CardTitle tag="h5">Bolivian Coffee</CardTitle>
                    <CardText>Great tasting Bolivian coffee.  Good to the last drop.</CardText>
                    <Button color="warning">Button</Button>
                </CardBody>
                </Card>
                <Card>
                <CardImg top width="100%" src="../assets/images/arabica.jpg" alt="Dark roast coffee" />
                <CardBody>
                    <CardTitle tag="h5">Arabica</CardTitle>
                    <CardText>This is good coffee.</CardText>
                    <Button color="warning">Button</Button>
                </CardBody>
                </Card>
                <Card>
                <CardImg top width="100%" src="../assets/images/Colombian.jpeg" alt="Colombian coffee beans" />
                <CardBody>
                    <CardTitle tag="h5">Colombian</CardTitle>
                    <CardText>I can really use a good cup of Colombian coffee</CardText>
                    <Button color="warning">Button</Button>
                </CardBody>
                </Card>
            </CardGroup>
        </Container>  
        <Container>
        <CardGroup>
            <Card>
            <CardImg top width="100%" src="../assets/images/Guatemalan 2.jpg" alt="Argentine coffee beans" />
            <CardBody>
                <CardTitle tag="h5">Argentina</CardTitle>
                <CardText>Great tasting Argentine coffee.  Good to the last drop.</CardText>
                <Button color="warning">Button</Button>
            </CardBody>
            </Card>
            <Card>
            <CardImg top width="100%" src="../assets/images/Honduran 2.jpeg" alt="Honduran coffee beans" />
            <CardBody>
                <CardTitle tag="h5">Honduran</CardTitle>
                <CardText>Have you ever wondered who thought of making a drink out of a bean?  Aren't you glad they did?</CardText>
                <Button color="warning">Button</Button>
            </CardBody>
            </Card>
            <Card>
            <CardImg top width="100%" src="../assets/images/genericCoffeeBag.png" alt="French roast beans" />
            <CardBody>
                <CardTitle tag="h5">French Roast</CardTitle>
                <CardText>What if the French had nothing to do with this roast?</CardText>
                <Button color="warning">Button</Button>
            </CardBody>
            </Card>
        </CardGroup>
    </Container>    
    </>
          
    );
  };
  
export default CoffeeProducts;