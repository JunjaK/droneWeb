import React, { ReactElement } from 'react';
import test from './test';

interface indexerType {
  [index: string]: string | number;
  length: number,
  name: string
}
interface indexerTypeArray {
  [index: number]: string;
  length: number
}

function Some():ReactElement {
  const testIndex:indexerType = {
    aa: 12,
    length: 1,
    name: '23',
  };
  const arrayTest:indexerTypeArray = ['test1', 'test2'];
  console.log(testIndex, arrayTest);
  test();

  return (
    <div />
  );
}

export default Some;
