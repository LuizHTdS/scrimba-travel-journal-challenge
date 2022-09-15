import globe from '../images/globe.png';

export default function Header() {
  return (
    <header>
      <img src={globe} id='logo' alt='a small white globe' />
      <h1>my travel journal.</h1>
    </header>
  );
}
