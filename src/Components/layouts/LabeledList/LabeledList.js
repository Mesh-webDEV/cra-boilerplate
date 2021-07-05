import React from 'react';
import LabeledItem from './LabeledItem';

const LabeledList = ({ isArray, count, items, labels, isNumbered }) => {
  if (!isArray) {
    return (
      <div>
        {/* TODO: loop over the count  */}
        {/* {items.map((item, index) => {
            return <LabeledItem key={index} label='label' />;
          })} */}
      </div>
    );
  }

  return (
    <div>
      {items.map((item, index) => {
        return <LabeledItem key={index} label='label' />;
      })}
    </div>
  );
};

export default LabeledList;
