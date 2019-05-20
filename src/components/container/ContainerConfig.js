import React from 'react'
import { Container, Input, Divider, Checkbox } from 'semantic-ui-react'

const ContainerConfig = () => (
    <div>
        <Container textAlign='justified'>
            <b>Markov Chain</b>
            <Divider />
            <Input label='Order' placeholder='Please, insert the amount of word that defines one prefix.' />
            <br/><br/>
            <Input label='Output size' placeholder='Please, insert the number of words you want to generate.' />
            <br/><br/>
            <Checkbox toggle label={{ children: 'Clean text before process Markov Chain. This feature can greatly improve algorithm performance and prediction of your text.' }} />
        </Container>
    </div>
)

export default ContainerConfig
