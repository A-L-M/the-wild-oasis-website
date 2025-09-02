"use client";

import { useState } from "react";

const Counter = ({ users }) => {
  const [count, setCount] = useState(users.length);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
