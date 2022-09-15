import Card from './Card';
import data from '../data.js';

const cardElements = data.map(item => {
  return <Card key={item.title} item={item} />;
});

export default function Main() {
  return <main>{cardElements}</main>;
}
