import React from 'react';
import styled from 'styled-components';
import { FocusOn } from 'react-focus-on';
import color from '@wedgekit/color';

const Wrapper = styled(FocusOn)`
  background: white;
  padding: 16px;
  box-shadow: 0 4px 12px ${color.N200};
  position: absolute;
  height: max-content;
  width: max-content;
`;

export default Wrapper;