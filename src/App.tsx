import { Routes, Route, useParams } from "react-router-dom";
import { AuthCard, UserButton, SettingsCard } from "@daveyplate/better-auth-ui";
import { authClient } from "./lib/auth-client";
import { useEffect } from "react";

function Dashboard() {
  const sessiondata = authClient.useSession();

  console.log("session", sessiondata);

  useEffect(() => {
    fetch("http://localhost:8080/rbac/roles", { credentials: "include" })
      .then((resp) => resp.json())
      .then(console.log);
  }, []);

  return (
    <header className="p-5 flex justify-end">
      <UserButton />
    </header>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth/:pathname" element={<AuthPage />} />
    </Routes>
  );
}

function AuthPage() {
  const { pathname } = useParams();
  return (
    <main className="container flex grow flex-col items-center justify-center gap-3 self-center p-4 md:p-6">
      <AuthCard pathname={pathname} />
    </main>
  );
}
