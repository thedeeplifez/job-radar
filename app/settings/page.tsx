import { AppShell } from "@/components/app-shell";

export default function SettingsPage() {
  return (
    <AppShell>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
        <p className="mt-2 text-sm text-slate-600">Configure your preferred locations, jobs, and freshness thresholds for future alerts.</p>
      </section>
    </AppShell>
  );
}
