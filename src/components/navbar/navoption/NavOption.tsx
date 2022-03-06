import React from 'react';
import './NavOption.css';

type Props = {
  label: string,
  onPress: () => void
}

export default function NavOption({label, onPress} : Props) {
  return (
    <div className="nav-option">
      <button className="nav-option-button" type="button" onClick={onPress}>{label}</button>
    </div>
  );
}