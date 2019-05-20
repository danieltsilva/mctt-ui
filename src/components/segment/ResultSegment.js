import React, { Component } from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

class ResultSegment extends Component {

  constructor(props) {
    super(props);
  }

  renderFile() {
    return <div>FILE HERE</div>;
  }

  renderPlaceHolder() {
    return (<Segment placeholder>
      <div>Hmmm: {this.props.fileName}</div>
      <div>Hmmm: {`${this.props.isFileUploaded}`} </div>
      <div>Hmmm: {this.props.order}</div>
      <div>Hmmm: {this.props.outputSize}</div>
      <div>Hmmm: {`${this.props.cleanText}`}</div>
      <Header icon>
        <Icon name='file alternate outline' />
        No documents are listed for this customer.
      </Header>
      <Button primary>Go to Upload Tab</Button>
    </Segment>)
  }

  renderFileUploaded() {
    if(this.props.isFileUploaded) {
      return this.renderFile();
    } else {
      return this.renderPlaceHolder();
    }
  }

  render() {
    return ( this.renderFileUploaded(this.props) );
  }
}

export default ResultSegment