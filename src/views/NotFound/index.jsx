import React from 'react';
// Components
import BackHome from '../../components/BackHome';
import Body from '../../components/Body';
import Message from '../../components/Message';

const NotFound = () => {
  return (
    <Body>
      <BackHome />
      <Message text="Page not found" />
    </Body>
  )
}

export default NotFound;
