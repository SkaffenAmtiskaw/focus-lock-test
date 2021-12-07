import React from 'react';

import { Wrapper } from './styled';

type Props = {
  children: React.ReactNode,
  onExit: () => void,
}

const Modal = ({ children, onExit }: Props) => (
  <Wrapper
    onClickOutside={onExit}
    onEscapeKey={onExit}
  >
    {children}
  </Wrapper>
)

export default Modal;