/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": "8px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": "12px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": "24px",
    "--padding": "4px"
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  const valueProgress = (value * 3.7);
  return (
    <WrapperBar role="progressbar" aria-valuenow={value} style={styles}>
      <Prorgess
        style={{
          "--progress": (valueProgress > 370) ? '370px' : valueProgress + 'px',
          "--height": size === "large" ? "16px" : styles["--height"],
        }}
      />
    </WrapperBar>
  );
};

const WrapperBar = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  display: inline-block;
  padding: var(--padding)
`;

const Prorgess = styled.div`
  background-color: ${COLORS.primary};
  width: var(--progress);
  height: var(--height);
  border-radius: 4px 0px 0px 4px;
`

export default ProgressBar;
