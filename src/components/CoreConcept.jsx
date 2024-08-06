/*function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}*/
{/* Another way of getting the props values by using object destructuring */}
export default function CoreConcept({image, title, description}){
    return(
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }