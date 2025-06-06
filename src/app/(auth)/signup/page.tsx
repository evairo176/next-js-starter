import { Suspense } from "react";
import SignUp from "./_signup";

const Page = () => {
  return (
    <Suspense>
      <SignUp />;
    </Suspense>
  );
};

export default Page;
