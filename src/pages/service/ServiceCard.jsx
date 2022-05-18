export const ServiceCard =(props)=> {
  return (
      <div>
          <div>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
          </div>
          <div>
              <img src={props.image} alt="" />
          </div>
      </div>
  )
}