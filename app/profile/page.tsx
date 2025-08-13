// app/profile/page.tsx
import type { Metadata } from "next";

// ---- Metadata ----
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

// ---- Types ----
type TagItem = { title: string };
type Experience = { title: string; role: string };
type ChallengeItem = { title: string };
type EducationItem = { Bachelor: string };
type MusicItem = { title: string; role: string };
type PastimeItem = { title: string; role: string };

type Profile = {
  name: string;
  born: string;
  role: string;
  location: string;
  skills: TagItem[];
  tools: TagItem[];
  occupation: Experience[];
  challenge: ChallengeItem[];
  education: EducationItem[];
  music: MusicItem[];
  Pastimes: PastimeItem[];
};

// ---- Editable profile data ----
const profile: Profile = {
  name: "Genbaneco",
  born: "1998",
  role: "Aerospace QA / Enjoy Music",
  location: "Japan",
  skills: [
  { title: "Special aviation radio operator" },
  { title: "Second-degree black belt in Karate" },
],
tools: [
  { title: "Macintosh" },
  { title: "GitHub" },
],
  occupation: [{ title: "Heavy Industry", role: "Quality Assurance" }],
  challenge: [{ title: "The Second Class Electric Works Specialist" }],
  education: [{ Bachelor: "Bachelor of Science" }],
  music: [
    {
      title: "Love",
      role:
        "The Beatles, Tetsuya Komuro, YMO; play brass instruments and am currently studying the piano",
    },
  ],
  Pastimes: [
    {
      title: "I have an appreciation for...",
      role: "gin, whisky, and cocktails based on them",
    },
  ],
};

// =============================================

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
          {profile.role}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Born: {profile.born} ・ {profile.location}
        </p>
      </section>

      {/* Skills & Tools */}
      <section className="mb-10 grid gap-6 sm:grid-cols-2">
        <Card title="Skills">
          <BadgeList items={profile.skills} />
        </Card>
        <Card title="Tools">
          <BadgeList items={profile.tools} />
        </Card>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Experience</h2>
        <div className="space-y-5">
          {profile.occupation.map((exp) => (
            <div
              key={exp.title}
              className="rounded-2xl border p-4 dark:border-gray-800"
            >
              <h3 className="text-base font-semibold">{exp.title}</h3>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                {exp.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Challenge</h2>
        <ul className="space-y-2 text-[15px] text-gray-800 dark:text-gray-200">
          {profile.challenge.map((c) => (
            <li
              key={c.title}
              className="rounded-2xl border p-4 dark:border-gray-800"
            >
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
            <li
              key={index}
              className="rounded-2xl border p-4 dark:border-gray-800"
            >
              <p className="font-medium">{e.Bachelor}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Music */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Music</h2>
        <div className="space-y-3">
          {profile.music.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border p-4 dark:border-gray-800"
            >
              <p className="font-medium">{m.title}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pastimes */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Pastimes</h2>
        <div className="space-y-3">
          {profile.Pastimes.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border p-4 dark:border-gray-800"
            >
              <p className="font-medium">{p.title}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {p.role}
              </p>
            </div>
          ))}
        </div>
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
          }),
        }}
      />
    </main>
  );
}

// ---- UI helpers ----
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border p-4 dark:border-gray-800">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function BadgeList({ items }: { items: { title: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s.title}
          className="rounded-full border px-3 py-1 text-sm dark:border-gray-800"
        >
          {s.title}
        </li>
      ))}
    </ul>
  );
}
