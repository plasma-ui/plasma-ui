import React from 'react';
import styled from '@emotion/styled';
import propTypes from '@styled-system/prop-types';
import { margin } from 'styled-system';

const StyledDiv = styled.div(margin);

const Spacer = ({ ...props }) => (
  <StyledDiv role='none presentation' {...props} />
);

StyledDiv.propTypes = {
  ...propTypes.margin
};

export default Spacer;
