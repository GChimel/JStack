import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <Link href="/auth/signup" className="underline">
        Sign up
      </Link>
    </div>
  );
}
