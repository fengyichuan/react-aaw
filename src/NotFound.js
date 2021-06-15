import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, SpaceBetween, TextContent } from '@awsui/components-react';

export default function NotFound() {
  return (
    <div>
      <SpaceBetween size='m'>
        <Header variant='h1'>Looking for something?</Header>
        <div>
          <TextContent>
            <p>We're sorry. The web address you entered is not a functioning page on our site.</p>
            <p>
              <Link to='/'>Visit our home page</Link> to find what you're looking for.
            </p>
          </TextContent>
        </div>
      </SpaceBetween>
    </div>
  );
}
