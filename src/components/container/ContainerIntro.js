import React from 'react'
import { Container, Divider, Segment, List } from 'semantic-ui-react'

const ContainerIntro = () => (
  <div>
    <Container textAlign='justified'>
      <b>Markov Chain</b>
      <Divider />
      <p>
        A Markov chain is a mathematical system that experiences transitions from one state to 
        another according to certain probabilistic rules. The defining characteristic of a Markov 
        chain is that no matter how the process arrived at its present state, the possible future 
        states are fixed. In other words, the probability of transitioning to any particular state 
        is dependent solely on the current state and time elapsed.
      </p>
      <br/>
      <b>Animal Logic Task</b>
      <Divider />
      <Segment raised>
      "Implement a Java application to allow a user to transform the contents of a text file using 
      a Markov chain algorithm. The application should allow the selection of a source text file, 
      and input parameters for the algorithm (typically prefix/suffix parameters)."
      </Segment>
      <p>The approach chosen for that task was develop an web application that input some information
        to training the Markov Chain Algorithm and create a transitional matrix (a dictionary with 
        possibles prefixes and suffixes, according the input parameters) after used to generate a 
        random text.
      </p>
      <p>
          The inputs will be:
          <List as='ul'>
            <List.Item as='li'><b>Text file:</b> a plain text file with maximum size of 200 MB which 
            will be used as a base text to create the transitional matrix through Markov Chain Algorithm;
            </List.Item>
            <List.Item as='li'><b>Order:</b> a number of words to compose the prefix. i.e. order=3 means 
            the prefixes will have three words and these words need to be found in together in the base 
            text. The suffix will be the fourth word of the base text.</List.Item>
            <List.Item as='li'><b>Output size:</b> the number of words the final generated text will 
            have. Note: the <i>output size</i> will be, in fact, the maximum number of words, as 
            there is a possibility of the process choose the final state (the <i>order-th last words</i>
             of the base text) of the chain before reach the output size requeted. </List.Item>
          </List>
      </p>

      <br/>
      <b>Solution Architecture</b>
      <Divider />

        <List>
            <List.Item>
            <List.Icon name='folder' />
            <List.Content>
                <List.Header>markov-chain-text-transformer</List.Header>
                <List.Description>Project root repository</List.Description>
                <List.List>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                    <List.Header>mctt-framework</List.Header>
                    <List.Description>Spring Boot Rest API as back-end</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                    <List.Header>mctt-ui</List.Header>
                    <List.Description>React project as a fron-end</List.Description>
                    </List.Content>
                </List.Item>
                </List.List>
            </List.Content>
            </List.Item>
        </List>

    </Container>
  </div>
)

export default ContainerIntro
