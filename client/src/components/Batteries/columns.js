import React from 'react';
import BatteryInfo from './components/Fields/BatteryInfo';

const columns = [
  {
    title: 'Battery Info',
    key: 'serialOne',
    format: (row) => <BatteryInfo row={row}/>
  },
  {
    title: 'Transfer Info',
    key: 'arrived'
  },
  {
    title: 'Arrived Date',
    key: 'arrived'
  },
  {
    title: 'Invoice',
    key: 'invoice'
  },
  {
    title: 'CCD',
    key: 'ccd'
  },
  {
    title: 'Location',
    key: 'location'
  },
  {
    title: 'Container',
    key: 'container'
  }
];

export default columns;