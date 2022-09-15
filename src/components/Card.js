export default function Card(props) {
  console.log(props);
  return (
    <article className='card'>
      <img
        src={props.item.imgUrl}
        alt={` of ${props.item.title}`}
        className='card__img'
      />
      <div className='card__info'>
        <div className='card__info--header'>
          <img src='../images/marker.png' alt='red map marker' />
          <h3>{props.item.location}</h3>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='card__info--title'>{props.item.title}</h1>
        <h2 className='card__info--travelDate'>
          {props.item.startDate} - {props.item.endDate}
        </h2>
        <p className='card__info--desc'>{props.item.description}</p>
      </div>
    </article>
  );
}
