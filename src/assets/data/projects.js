import { v4 as uuidv4 } from 'uuid';
import Letsatsing from '../images/LetsatsingLodge.jpg';
import childish from '../images/childish.jpg';
import schoolMedia from '../images/SchoolMedia.jpg';
import systemiclogic from '../images/systemiclogic.jpg';
import Netflix from '../images/netflix.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'LetsatsingLodge',
    desc: 'A website show casting the beauty of the lodge and also booking',
    img: Letsatsing,
  },
  {
    id: uuidv4(),
    name: 'SchoolMedia',
    desc: 'A Marketing agency for schools',
    img: schoolMedia,
  },
  {
    id: uuidv4(),
    name: 'Systemiclogic',
    desc: 'A Consulting company in the field of fintech',
    img: systemiclogic,
  },
  {
    id: uuidv4(),
    name: 'Netflix',
    desc: 'A clone of netflix completed with React',
    img: Netflix,
  },
  {
    id: uuidv4(),
    name: 'illustrator',
    desc: 'One of my favorite artist,in an artwork that I made from scratch',
    img: childish,
  },
];

export default projects;
