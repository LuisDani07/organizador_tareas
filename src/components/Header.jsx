import PropTypes from 'prop-types';
import Button from './Button';

function Header({title, onAddForm, showAdd}) {



  return (
    <header className='header'>
           <h1>{title}</h1>
           <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'close': 'add'}  onClick={onAddForm}/>
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