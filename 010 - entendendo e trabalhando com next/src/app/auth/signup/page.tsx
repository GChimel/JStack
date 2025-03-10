import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Link href="/auth/signin" className="underline">
        Sign in
      </Link>
    </div>
  );
}
