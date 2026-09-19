import { AppShell } from "@/components/app-shell";

export default function ApplicationsPage() {
  return (
    <AppShell>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Applications</h2>
        <p className="mt-2 text-sm text-slate-600">Track application progress and interview stages for the roles you decide to pursue.</p>
      </section>
    </AppShell>
  );
}
