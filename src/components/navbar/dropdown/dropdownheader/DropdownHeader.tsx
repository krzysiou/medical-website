import "./DropdownHeader.css"

type Props = {
  state: boolean,
  source: string,
  onPress: () => void,
  children: JSX.Element
}

export function DropdownHeader({state, onPress, children, source}:Props): JSX.Element {
  return (
    <div className="dropdown-container">
      <img src={source} alt="home" width='30px' className='navbar-menu-icon' style={{filter: state ? 'invert(56%) sepia(98%) saturate(320%) hue-rotate(114deg) brightness(89%) contrast(92%)' : ''}} onClick={ onPress }/>
      { state && children }
    </div>
  );
}