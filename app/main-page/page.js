import { auth, signOut } from "../_lib/auth";

async function page() {
  const session = await auth();

  return (
    <div>
      You have successfully logged in {session?.user?.name.split(" ")[0]}! YAY
      -&gt; SHAKALA MAAMA BUKALAA DURKU TAKANANA TAKANA TAKANA
      <form
        action={async () => {
          // sign out functionality 
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button>Sign out</button>
      </form>
    </div>
  );
}

export default page;
