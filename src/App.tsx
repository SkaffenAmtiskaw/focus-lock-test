import React, { useRef, useState } from 'react';
import Button from '@wedgekit/button';

import Modal from './modal';
import Popover from './popover'

import { Content, Wrapper } from './styled';

const App = () => {
  const [open, setOpen] = useState(false);
  const [popover, setPopover] = useState(false);

  const ref = useRef(null);

  return (
    <Wrapper>
      <Button domain="primary" label="Open Modal" onClick={() => setOpen(true)}>Press Me</Button>
      <Button domain="secondary" label="Test Button" onClick={() => console.log('button clicked')}>Test Button</Button>
      {open && (
        <Modal onExit={() => setOpen(false)}>
          <Content>
            I am a modal
            <Button domain="danger" label="Close Modal" onClick={() => setOpen(false)}>Close Modal</Button>
            <Button domain="primary" label="Open Popover" ref={ref} onClick={() => setPopover(true)}>Open Popover</Button>
            {popover && (
              <Popover node={ref.current} onExit={() => setPopover(false)}>
                I am a popover
              </Popover>
            )}
          </Content>
        </Modal>
      )}
    </Wrapper>
  );
}

export default App;
