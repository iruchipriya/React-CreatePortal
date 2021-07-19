import React, { useState } from 'react';
import Modal from './Modal';

import './style.css';

function App() {
  const [openp, setOpenP] = useState(false);

  const modalChange = () => {
    setOpenP(false);
  };
  return (
    <div>
      <button onClick={() => setOpenP(true)}>Open Portal Modal</button>

      {/* <div>
        <Modal
          message="Hello Portal World!"
          isOpen={openp}
          onClose={() => setOpenP(false)}
        />
      </div> */}

      <div>
        <Modal
          message="Hello Portal World!"
          isOpen={openp}
          onClose={modalChange}
        />
      </div>
    </div>
  );
}

export default App;
