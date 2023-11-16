import React from "react";

import { AVATAR_SIZES, Avatar } from "./components";

function App() {
  return (
    <div className="p-10">
      <Avatar firstName="Edem" lastName="Ekeng" size={AVATAR_SIZES.xxl} />
    </div>
  );
}

export default App;
