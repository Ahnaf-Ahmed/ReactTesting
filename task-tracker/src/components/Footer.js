import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
      
    </footer>
  )
}

export default Footer