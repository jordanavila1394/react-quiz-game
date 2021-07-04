import React,{ useRef} from 'react'

import { Button, Overlay, Tooltip } from 'react-bootstrap';

import { IoMdBulb } from "react-icons/io";

export default function Hint({hint, show, setShow}) {
    const target = useRef(null);
    return (
        <div className="hint" >
        <Button ref={target} onClick={() => setShow(!show)}>
         Hint <IoMdBulb />
        </Button>
        <Overlay target={target.current} show={show} placement="top" rootCloseEvent={'click'}>
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {hint}
            </Tooltip>
          )}
        </Overlay>
      </div>
    )
}
