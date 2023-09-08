import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = ({ testTitle }) => {
  return (
    <div>
      <h2>{testTitle}</h2>
    </div>
  );
};
TestComponent.propTypes = {
  testTitle: PropTypes.string,
};
export default TestComponent;
