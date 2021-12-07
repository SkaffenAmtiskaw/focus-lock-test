import React from 'react';
import styled from 'styled-components';
import { FocusOn } from 'react-focus-on';
import color from '@wedgekit/color';

const Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(FocusOn)`
  border-radius: 4px;
  background: ${color.N050};
  box-shadow: 0 4px 12px ${color.N200};
  max-height: calc(100vh - 64px);
  max-width: calc(100vw - 128px);
`;

export default (props) => (
  <Position>
    <Wrapper {...props} />
  </Position>
);