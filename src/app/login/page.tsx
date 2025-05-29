import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
      <h1 className="text-6xl font-bold">Login</h1>
      <LoginLink>
        <Button>Login</Button>
      </LoginLink>
    </div>
  );
}