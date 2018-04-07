import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Beer1 from '../images/beer1.jpg';

class NoMatch extends Component {
  render() {
    return(
      <Segment basic style={styles.fullHeight}>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='large' src={Beer1} alt='beer1' />
          <Header as='h1' style={styles.header}>Uh-oh, you already drank your beer!</Header>
        </Segment>
        <Header as='h1' textAlign='center' inverted>
          Page Not Found
          <Link to='/'> - Go Home</Link>
        </Header>
      </Segment>
    );
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  },
  fullHeight: {
    height: '100vh',
  },
}

export default NoMatch;
