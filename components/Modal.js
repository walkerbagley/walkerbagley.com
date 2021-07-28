import React, { useState, useEffect } from 'react';
import Entry from './Entry';

export default function Modal({ active }) {
    const [isShown, setIsShown] = useState(true);

    function openModal(){
        setIsShown(true);
    }
    const dynammicModalClass = () => (isShown ? { display: 'flex' } : '');

  // return isShown ? <h3>Modal content</h3> : null;
    return isShown ? (
        <>
            <div className="modal" style={dynammicModalClass()}>
                <div className="wrapper">
                    <Entry metadata={{ "0": "Single Shot", "1": "30mm", "2": "1/1250\"", "3": "f/2", "4": "ISO 100", "5": "17 Oct 2020", "6": "Moon Valley, AZ" }} tags={{ "0": "sunset", "1": "car" }} url="https://drive.google.com/uc?export=view&id=1NzvR57wR9Bz3uq7tS943w6q7DkqUPDUq" toggle={active} />
                </div>
            </div>
            <style jsx>{`
                .modal{
                    position: absolute;
                    width: 100vw;
                    height: 100vh;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    margin-top: -60px;
                    padding: 10vh 10vw;
                    background-color: #00000055;
                    filter: background-blur(10px);
                    z-index: 9999;
                }
                .wrapper{
                    height: 100%;
                    position: relative;
                }
            `}</style>
        </>
  ) : null;
};