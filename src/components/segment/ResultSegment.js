import React, { Component, Fragment } from 'react'
import { Button, Header, Icon, Segment, Divider } from 'semantic-ui-react'

import mcttFramework from '../../apis/mcttFramework'

class ResultSegment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isResponseSucceed: false,
      textGenerated: "",
    }
  }

  renderFile() {
    return <Fragment>
                    <div>File Name: {this.props.fileName}</div>
                    <div>Order: {this.props.order}</div>
                    <div>Output Size: {this.props.outputSize}</div>
                    <div>Clean Text: {`${this.props.cleanText}`}</div>
              <Button  primary onClick={this.handleMarkovSubmit}>
                Generate text
              </Button>
            </Fragment>;
  }

  renderResponseResult() {
    return <Fragment>
                    <div>File Name: {this.props.fileName}</div>
                    <div>Order: {this.props.order}</div>
                    <div>Output Size: {this.props.outputSize}</div>
                    <div>Clean Text: {`${this.props.cleanText}`}</div>
              <Divider/>
              <h2>Text generated:</h2>
              <p>
                {this.state.textGenerated}
              </p>
            </Fragment>;
  }

  renderPlaceHolder() {
    return (<Segment placeholder>
              <Header icon>
                <Icon name='file alternate outline' />
                No document is uploaded to Markov Chain algorithm process.
              </Header>
              <Button primary>Go to Upload Tab</Button>
            </Segment>)
  }

  renderFileUploaded() {
    if(this.props.isFileUploaded && !this.state.isResponseSucceed) {
      return this.renderFile();
    } else if (this.state.isResponseSucceed) {
      return this.renderResponseResult();
    } else {
      return this.renderPlaceHolder();
    }
  }

  handleMarkovSubmit = () => {
    mcttFramework.get('/file/download/teste.txt').then(response => {
      console.log(response);
      this.setState({ textGenerated: response.data });
      this.setState({ isResponseSucceed: true });
    });
  }

  render() {

    return ( this.renderFileUploaded(this.props) );
  }
}

export default ResultSegment