const url = "http://localhost:8081/v1/auth/login";

export default async function userLoginRequest(
  email: string,
  password: string
) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const status = response.status;
    const data = await response.json();
    return { data, status };
  } catch (error) {
    console.error(error);
  }
}
