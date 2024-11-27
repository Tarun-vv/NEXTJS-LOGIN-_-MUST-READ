import Link from "next/link";
import { auth, signIn } from "./_lib/auth";

async function page() {
  return (
    <div>
      <Link href="/main-page">Go to our main page &rarr;</Link>
    </div>
  );
}

export default page;
