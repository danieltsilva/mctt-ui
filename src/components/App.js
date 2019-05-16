import React from 'react';
import { 
    Form,
    TextArea,
    Container,
    Divider 
    } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
        <div>
            <Container textAlign='left'>
                Text to train your Markov Chain
                <Divider />
                <Form>
                    <TextArea placeholder='Past your text here' />
                </Form>
            </Container>
        </div>
    );
  }
}

export default App;