import { Container, SpaceBetween, TextContent, Button } from '@awsui/components-react';
import React from 'react';

export default function Home() {

  return(
    <div>
      <SpaceBetween size="l" direction="vertical">
      <Container>
      <TextContent>
      <h2>Welcome to the Alexa Waitress App</h2>
      </TextContent>
      </Container>

      <Container>
      <SpaceBetween size="xl" direction="horizontal">
      <Button variant="primary">Click on "Add Menu Items To Insert new custom items"</Button>
      <Button variant="primary">Click on Pull Order Info to view all the pending orders.</Button>
      </SpaceBetween>
      </Container>
      </SpaceBetween>
    </div>
  ); 
}