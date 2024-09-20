"use client";

import { useState } from "react";
import userLogin from "./action";

export default function LoginPage() {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    const { error } = (await userLogin(email.value, password.value)) || {};

    if (error) {
      setLoginError(error);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-dark-gray">
      <div className="w-96 p-10 bg-white rounded">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-3xl text-center">Login</h1>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="h-12 p-2 border border-dark-gray rounded"
            />{" "}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="h-12 p-2 border border-dark-gray rounded"
            />{" "}
          </div>
          <div>
            {loginError && (
              <p className="text-red-500 font-semibold">
                Login failed. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="h-12 bg-dark-gray text-white rounded w-full"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
