import { AppShell } from "@/components/app-shell";

export default function ProfilePage() {
  return (
    <AppShell>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Profile</h2>
        <p className="mt-2 text-sm text-slate-600">Customize your target role, location preferences, and core technical profile.</p>
      </section>
    </AppShell>
  );
}
