import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => router.push("/shop");
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      Belum punya akun? registrasi <Link href={`/auth/register`}>Disini</Link>
    </div>
  );
};

export default LoginPage;
