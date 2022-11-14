import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
          <Figure>
          <Figure.Image
            alt="171x180"
            src=""
          />
          <Figure.Caption className="float-left">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
    );
  }
  
export default ControlledCarousel;
