import { auth, signIn } from "../_lib/auth";

async function login() {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          // redirecting logged in user to main page AFTER log in
          "use server";
          await signIn("google", { redirectTo: "/main-page" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.2rem",
        }}
      >
        <img
          src={session?.user?.image}
          style={{ height: 50, width: 50, borderRadius: "50%" }}
        />
        <span>{session?.user?.name}</span>
      </div>
    </div>
  );
}

export default login;
