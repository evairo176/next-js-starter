import { Suspense } from "react";
import ComfirmAccount from "./_confirm-account";

const Page = () => {
  return (
    <Suspense>
      <ComfirmAccount />;
    </Suspense>
  );
};

export default Page;
