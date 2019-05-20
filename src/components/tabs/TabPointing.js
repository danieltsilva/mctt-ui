import React, { Component, Fragment } from 'react'
import { Tab } from 'semantic-ui-react'

import Upload from '../upload/Upload'
import ContainerIntro from '../container/ContainerIntro'
import ContainerConfig from '../container/ContainerConfig'
import ResultSegment from '../segment/ResultSegment'

class TabPointing extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isFileUploaded: true,
      fileName: "sample.txt",
      order: 2,
      outputSize: 20,
      cleanText: true
    };
  }

  render() {
    return (
      <Fragment>
        <Tab 
          menu={{ pointing: true }} 
          panes={[
            { menuItem: 'Markov Chain Task', render: () =>  <Tab.Pane attached={false}>
                                                                <ContainerIntro />
                                                            </Tab.Pane> },
            { menuItem: 'Upload File', render: () =>  <Tab.Pane attached={false}>
                                                          <Upload />
                                                      </Tab.Pane> },
            { menuItem: 'Configuration', render: () =>  <Tab.Pane disabled={this.state.isFileUploaded} 
                                                                  attached={false}>
                                                            <ContainerConfig />
                                                        </Tab.Pane> },
            { menuItem: 'Generate Text', render: () =>  <Tab.Pane attached={false}>
                                                            <ResultSegment  isFileUploaded={this.state.isFileUploaded}
                                                                            fileName={this.state.fileName}
                                                                            order={this.state.order}
                                                                            outputSize={this.state.outputSize}
                                                                            cleanText={this.state.cleanText}  />
                                                        </Tab.Pane> },

          ]} 
        />
      </Fragment>
    );
  }
}


export default TabPointing