import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      {/* <Suspense fallback={<p>Loading page...</p>}>{children}</Suspense> */}
    </>
  );
}
