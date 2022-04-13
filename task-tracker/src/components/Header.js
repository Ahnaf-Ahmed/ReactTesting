import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation, Link } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
  <header className='header'>
    <h1>{title}</h1>
    {location.pathname === '/' 
      ? <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}
        />
      : <Link className='btn' style={{backgroundColor: "green"}} to='/'>Home</Link>
    }
  </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string
}

//CSS in js
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }

export default Header