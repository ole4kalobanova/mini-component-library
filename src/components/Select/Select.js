import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id='chevron-down' size="24" />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  appearance: none; 
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  opacity:0;
  /* z-index: 2; */ /* <--First solution for fix problem with arrow (<NativeSelect/> block smaller than the <PresentationalBit/> and arrow doesn't work correctly) */
`;

const Wrapper = styled.div`
  position: relative;
  /* isolation: isolate; */  /* <--First solution for fix problem with arrow */
  /* It ensures that there's nothing over here for us to click behind <PresentationalBit/> */
  width: max-content;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  color: ${COLORS.gray700};
  font-family: Roboto;
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  /* If I have <NativeSelect/> and it's focused, then the current element should receive the styles */
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    /* If this declaration is found to be invalid, it's falls back to use prev */
    outline: 5px auto -webkit-focus-ring-color; /* this's default focus style browser */
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  /* z-index: 1; */  /* <--First solution for fix problem with arrow */
  pointer-events: none; /* <--Second solution for fix problem with arrow (<NativeSelect/> block smaller than the <PresentationalBit/> and arrow doesn't work correctly) */
`;

export default Select;
