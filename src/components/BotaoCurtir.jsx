import { useState } from 'react';

export default function BotaoCurtir() {
  const [curtir, setCurtir] = useState(false);

  return (
    <div>
      <button onClick={() => setCurtir(!curtir)}>
        {curtir ? "Descurtir" : "Curtir"}
      </button>
    </div>
    
  );
}