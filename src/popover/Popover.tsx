import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { setDOMPositionFromToggle } from '@wedgekit/utils';

import { Wrapper } from './styled';

type Props = {
  children: React.ReactNode,
  node: HTMLElement,
  onExit: () => void,
};

const Popover = ({ children, node, onExit }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    setDOMPositionFromToggle({
      align: 'left',
      offset: 230,
      popover: ref.current,
      position: 'bottom',
      toggle: node as HTMLDivElement
    });
  }, [node, ref.current])

  return (
    <Wrapper ref={ref} onClickOutside={onExit} onEscapeKey={onExit}>
      {children}
    </Wrapper>
  );
}

const Portal = (props: Props) => {
  const content = <Popover {...props} />

  return ReactDOM.createPortal(content, document.body);
}

export default Portal;