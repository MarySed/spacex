import React from "react";

export default function MissionKey() {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Succeeded
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Failed
      </p>
    </div>
  );
}
