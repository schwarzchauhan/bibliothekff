import { findByLabelText } from '@testing-library/react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react'

function CustomDropdown(props) {
    const [flagsOnSearch, setFlagsOnSearch] = useState([]);

    useEffect(() => {
        const flgs = props.flagsOnSearch;
        console.error('flgs', flgs, flgs.length);
        setFlagsOnSearch(flgs);
    }, [flagsOnSearch]);

  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
     {flagsOnSearch.map((flg, index) => (
          <Dropdown.Item href="" key={index}>{flg.country}</Dropdown.Item>
      ))}
   </DropdownButton>
  );
}

export default CustomDropdown;