import { v4 as uuidv4 } from 'uuid';
import Letsatsing from '../images/LetsatsingLodge.jpg';
import childish from '../images/childish.jpg';
import schoolMedia from '../images/SchoolMedia.jpg';
import systemiclogic from '../images/systemiclogic.jpg';
import Netflix from '../images/netflix.jpg';
import CarRental from '../images/carsrental.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Car Showcase',
    desc: 'A car show casing site',
    img: CarRental,
    path: 'https://car-rental-show-case.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'LetsatsingLodge',
    desc: 'A website showcasing the beauty of the lodge and also booking',
    img: Letsatsing,
    path: 'https://letsatsinglodge.co.za/',
  },
  {
    id: uuidv4(),
    name: 'SchoolMedia',
    desc: 'A Marketing agency for schools',
    img: schoolMedia,
    path: 'https://schoolmedia.co.za/',
  },
  {
    id: uuidv4(),
    name: 'Systemiclogic',
    desc: 'A Consulting company in the field of fintech',
    img: systemiclogic,
    path: 'https://systemiclogic.com/',
  },
  {
    id: uuidv4(),
    name: 'Netflix',
    desc: 'A clone of Netflix completed with React',
    img: Netflix,
    path: 'https://netflix-3d089.web.app/',
  },
  {
    id: uuidv4(),
    name: 'illustrator',
    desc: 'One of my favorite artists, in an artwork that I made from scratch',
    img: childish,
    // path: 'https://netflix-3d089.web.app/',
  },
];

export default projects;
