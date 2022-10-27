import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("auth") === true) {
      router.push("/");
    }
  }, [router]);

  return (
    <div>
      Admin
      <h1>this is proceted route</h1>
      <button
        onClick={() => {
          localStorage.removeItem("auth");
          router.push("/about");
        }}
      >
        log out{" "}
      </button>
    </div>
  );
};

export default Admin;
