import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <>
    <h1>404</h1>
    <Link className="btn btn-dark" to="/">Inicio</Link>
    </>
    
  )
}

export default NotFound