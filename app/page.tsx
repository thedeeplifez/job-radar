import Link from "next/link";
import { mockJobs, mockProfile } from "@/lib/mock-data";
import { formatRelativeTime, formatSalary } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <header className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">UAE Job Hunter</p>
              <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                Fresh DevOps, SRE, Cloud & Platform jobs in UAE
              </h1>
            </div>
            <div className="flex items-center gap-3 self-start rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Mock data mode enabled
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <input
                aria-label="Search jobs"
                placeholder="Search jobs..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              />
              <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Search
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                Reset filters
              </button>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {[
                ["Location", "All UAE"],
                ["Posted", "Last 24 hours"],
                ["Experience", "5+ years"],
                ["Role", "DevOps"],
                ["Skills", "AWS"],
              ].map(([label, value]) => (
                <label key={label} className="block text-left">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">{label}</span>
                  <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500">
                    <option>{value}</option>
                  </select>
                </label>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Latest matches</h2>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
                {mockJobs.length} jobs
              </span>
            </div>

            {mockJobs.map((job) => (
              <article key={job.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                        Fresh
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                        {job.matchPercentage}% match
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">{job.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">{job.company}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>Posted {formatRelativeTime(job.postedAt)}</span>
                    </div>
                  </div>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="inline-flex items-center justify-center rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    View Job
                  </Link>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                  <div>
                    <span className="font-medium text-slate-700">Experience:</span> {job.experienceMin}–{job.experienceMax} years
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Salary:</span> {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.slice(0, 5).map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2 py-1">Source: {job.source}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1">Visa sponsorship: {job.visaSponsorship}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1">UAE exp: {job.uaeExperience}</span>
                  </div>

                  <a
                    href={job.applicationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
                  >
                    Apply
                  </a>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Profile fit</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm text-slate-500">Target role</p>
                  <p className="font-medium text-slate-900">{mockProfile.targetRole}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Experience</p>
                  <p className="font-medium text-slate-900">{mockProfile.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Primary cloud</p>
                  <p className="font-medium text-slate-900">AWS</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Skill match summary</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li><span className="font-medium text-slate-900">Strong matches:</span> AWS, Kubernetes, Terraform, GitHub Actions</li>
                <li><span className="font-medium text-slate-900">Missing/weak:</span> Azure, OpenShift</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
