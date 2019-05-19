import React from 'react'
import { Tab } from 'semantic-ui-react'

import Upload from '../upload/Upload'
import ContainerIntro from '../container/ContainerIntro'

const panes = [
  { menuItem: 'Markov Chain Task', render: () => <Tab.Pane attached={false}><ContainerIntro /></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}><Upload /></Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

const TabPointing = () => <Tab menu={{ pointing: true }} panes={panes} />

export default TabPointing