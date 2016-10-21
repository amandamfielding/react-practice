import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const tabs = [
    {title: 'tab 1', content: 'this is content'},
    {title: 'tab 2', content: 'this is more content'},
    {title: 'tab 3', content: 'this is even more content'}
  ];
  ReactDOM.render(
    <div>
      <Clock />
      <Weather />
      <Tabs tabs={tabs} />
    </div>,
  root);
});
