export default function Card(props) {
  return (
    <article className='card'>
      <img src={props.item.img} alt={props.item.alt} className='card__img' />
      <div className='card__info'>
        <div className='card__info--header'>
          <img src='../images/marker.png' alt='red map marker' />
          <h3>{props.item.locatiopn}</h3>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='card__info--title'>{props.item.title}</h1>
        <h2 className='card__info--travelDate'>
          {' '}
          {props.item.startDate} - {props.item.endDate}
        </h2>
        <p className='card__info--desc'>{props.item.description}</p>
      </div>
    </article>
  );
}
