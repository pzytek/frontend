import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Page does not exist</h2>
      <Link href="/">Go to Home page</Link>
    </div>
  );
};

export default NotFound;
