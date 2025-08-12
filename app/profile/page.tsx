import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Genbaneco",
  description: "Genbaneco / Genbaneco のプロフィールページ",
  openGraph: {
    title: "Profile | Genbaneco",
    description: "Genbaneco / Genbaneco のプロフィールページ",
    url: "https://genbaneco3.vercel.app/profile",
    siteName: "Genbaneco",
    type: "profile",
  },
};

// ====== Editable profile data ======
const profile = {
  name: "Genbaneco",
  born: "1998",
  role: "Aerospace QA / Enjoy Music",
  skills: ["Special aviation radio operator"],
  tools: ["macOS"],
  experience: [
    {
      title: "Heavy Industry",
      role: "QA",
    },
  ],
  challenge: [
    {
      title: "The Second Class Electric Works Specialist",
    },
  ],
  education: [
    { Bachelor: "Science" },
  ],
};
// ================================================

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Header */}
      <section className="mb-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow">
            <Image
              src={profile.avatarSrc}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
            <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
              {profile.role}
            </p>
            <p className="mt-1 text-sm text-gray-500">{profile.location}</p>
            <p className="mt-1 text-sm text-gray-500">Born: {profile.born}</p>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mb-10 grid gap-6 sm:grid-cols-2">
        <Card title="Skills">
          <TagList items={profile.skills} />
        </Card>
        <Card title="Tools">
          <TagList items={profile.tools} />
        </Card>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Experience</h2>
        <div className="space-y-5">
          {profile.experience.map((exp) => (
            <div key={exp.title} className="rounded-2xl border p-4 dark:border-gray-800">
              <h3 className="text-base font-semibold">{exp.title}</h3>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{exp.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Challenge</h2>
        <ul className="space-y-2 text-[15px] text-gray-800 dark:text-gray-200">
          {profile.challenge.map((c) => (
            <li key={c.title} className="rounded-2xl border p-4 dark:border-gray-800">
              {c.title}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Education</h2>
        <ul className="space-y-2 text-[15px] text-gray-800 dark:text-gray-200">
          {profile.education.map((e, index) => (
            <li key={index} className="rounded-2xl border p-4 dark:border-gray-800">
              <p className="font-medium">{e.Bachelor}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            url: "https://genbaneco3.vercel.app/profile",
            jobTitle: profile.role,
            address: { "@type": "PostalAddress", addressLocality: profile.location },
          }),
        }}
      />
    </main>
  );
}

// ===== UI helpers =====
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4 dark:border-gray-800">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-full border px-3 py-1 text-sm dark:border-gray-800"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}
