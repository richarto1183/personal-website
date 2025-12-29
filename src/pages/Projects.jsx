import Container from "../components/Container";

const projects = [
  {
    title: "Personal Website",
    description: "A responsive personal site built with Vite, React, and Tailwind.",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "QA / Testing Practice",
    description: "Practice work focused on writing and organizing automated tests.",
    tech: ["Python", "Testing"],
  },
  {
    title: "Class Projects",
    description: "A collection of programming assignments and small apps from coursework.",
    tech: ["JavaScript", "Python"],
  },
];

export default function Projects() {
  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-4 text-lg text-black/70 max-w-3xl">
        Here are a few things I’ve worked on. I’ll keep adding to this as I build more.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl border p-6 hover:bg-black/5 transition">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-black/70">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
