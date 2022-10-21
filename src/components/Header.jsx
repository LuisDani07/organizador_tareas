import PropTypes from 'prop-types';
import Button from './Button';

function Header({title}) {
const onClick=()=>{
    console.log("clicked")
}


  return (
    <header className='header'>
           <h1>{title}</h1>
           <Button color='green' text='Agregar' onClick={onClick}/>
    </header>
  )
}


Header.defaultProps={
    title: 'Tareas'
}

Header.propTypes={
    title: PropTypes.string
}

export default Header