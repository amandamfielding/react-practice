import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const tabs = [
    {title: 'tab 1', content: 'this is content'},
    {title: 'tab 2', content: 'this is more content'},
    {title: 'tab 3', content: 'this is even more content'}
  ];

  const names = [
    'Barbara the Bear',
    'Zachary the Zebra',
    'Billy the Goat',
    'Reggie the Hedgie',
    'Perry the Panda',
    'Ollie the Owl'
  ];

  ReactDOM.render(
    <div>
      <Clock />
      <Weather />
      <Tabs tabs={tabs} />
      <AutoComplete names={names} />
    </div>,
  root);
});
