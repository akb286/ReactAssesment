import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image, Card, Icon, Button, Form } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import beer2 from '../images/beer2.jpg';

class Home extends Component {
  state = { assignmentMarkdown: '' };

  componentDidMount() {
    axios.get('/api/assignment_details')
      .then(res => {
        this.setState({ assignmentMarkdown: res.data.file })
      })
      .catch( error => {
        console.log(error.response);
    });
  }

  // componentDidMount() {
  //     //TODO make a call to our rails server to get Items
  //   }
  //
  //   addItem = (name) => {
  //     //TODO make api call to rails server to add item
  //     //TODO update state
  //   }
  //
  //   updateTodo = (id) => {
  //     //TODO make api call to update todo
  //     //TODO update state
  //   }
  //
  //   deleteTodo = (id) => {
  //     //TODO make api call to delete todo
  //     //TODO remove it from state
  //   }
  //
  //   render() {
  //     return (
  //       <div className="container">
  //         <TodoForm addItem={this.addItem} />
  //         <TodoList
  //           todos={this.state.todos}
  //           updateTodo={this.updateTodo}
  //           deleteTodo={this.deleteTodo}
  //         />
  //       </div>
  //     );
  //   }
  // }









  render() {
    return(
      <div>
      <Segment basic>
        <Segment basic textAlign='center'>
          <Header as='h1' style={styles.header}>Alicia's Brewery</Header>
        </Segment>
        <Grid>
          <Grid.Column>
            <Segment inverted>
              <Header
                as='h2'
                textAlign='center'
                style={styles.header}>
                  Search for Beer!
              </Header>
              <Divider />
                <Form>
                  <Form.Field>
                    <input placeholder='Pour me a Beer!' />
                  </Form.Field>
                  <Button type='submit' color='yellow'>Submit</Button>
                </Form>
              <ReactMarkDown source={this.state.assignmentMarkdown} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>

      <Card centered color='yellow'>
        <Image src={beer2} />
        <Card.Content>
          <Card.Header>
            IPA
          </Card.Header>
          <Card.Meta>
            <span className='beer'>
              Hopulent IPA
            </span>
          </Card.Meta>
          <Card.Description>
            Bitter yet Flavorful
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='beer' />
          4 Stars
          </a>
        </Card.Content>
      </Card>
    </div>
    );
  }
}





const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#f7db07'
  }
}

export default Home;
