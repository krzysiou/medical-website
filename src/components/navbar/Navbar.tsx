import React from 'react';
import NavOption from './navoption/NavOption';
import { DropdownItem } from './dropdown/dropdownitem/DropdownItem';
import { DropdownHeader } from './dropdown/dropdownheader/DropdownHeader';
import { Dropdown } from './dropdown/Dropdown';
import redirect from '../../functions/redirect';
import { useState } from 'react';

import './Navbar.css';

import homeSymbol from '../../assets/home.svg'
import menuSymbol from '../../assets/menu.svg'

function changeOpen(setOpen:(open: boolean)=>void, open: boolean) {
  return () => setOpen(!open);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className='navbar-logo-box'>
        <p>logo</p>
      </div>
      <div className='navbar-right-visible'>
        <div className='navbar-list-box'>
          <ul className='navbar-list'>
            <NavOption label="Kontakt" onPress={redirect("/contact")}/>
            <NavOption label="O nas" onPress={redirect("/about")}/>
            <NavOption label="Cennik" onPress={redirect("/prices")}/>
          </ul>
        </div>
        <div className='navbar-symbol'></div>
        <div className='navbar-separator'>
          <img src={homeSymbol} alt="home" width='20px' className='navbar-home-icon' onClick={redirect("/")}/>
        </div>
      </div>
      <div className='navbar-right-invisible'>
          <img src={homeSymbol} alt="home" width='20px' className='navbar-home-icon' onClick={redirect("/")}/>
          <DropdownHeader source={menuSymbol} onPress={changeOpen(setOpen, open)} state={open}>
        <Dropdown>
          <>
          <DropdownItem label="Kontakt" onPress={redirect("/contact")} />
          <DropdownItem label="O nas" onPress={redirect("/about")} />
          <DropdownItem label="Cennik" onPress={redirect("/prices")} />
          </>
        </Dropdown>
      </DropdownHeader>
      </div>
    </div>
  );
}