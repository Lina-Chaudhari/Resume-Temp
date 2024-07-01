// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Temp20';
import './temp20.css';

// Sample data
const Temp20 = {
  photo: './profile.png',
  phone: '+123456789',
  website: 'www.website.com',
  email: 'emailaddress@gmail.com',
  social: {
    Twitter: 'twitter.com/profile',
    LinkedIn: 'linkedin.com/profile',
    Facebook: 'facebook.com/profile',
    Instagram: 'instagram.com/profile',
  },
  name: 'Name Surname',
  position: 'Job Position',
  profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa.',
  experience: [
    {
      year: '2020',
      period: '2020-Present',
      position: 'Job Position',
      company: 'Company Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      year: '2018',
      period: '2018-2019',
      position: 'Job Position',
      company: 'Company Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      year: '2016',
      period: '2016-2018',
      position: 'Job Position',
      company: 'Company Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
};

// Render Resume
ReactDOM.render(
  <Resume data={Temp20} />,
  document.getElementById('root')
);
