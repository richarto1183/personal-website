import Container from "../components/Container";

export default function About() {
  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <p className="mt-4 text-lg text-black/70 max-w-3xl leading-relaxed">
        I’m a student at Grand Valley State University interested in software development and
        quality engineering. I have been interested in pursuing a career in computer science since I 
	learned to code in elementary school. This was later solidified during my career exploration 
	with engineering and computer science classes in high school. Throughout my time thus far at 
	GVSU, I have enjoyed learning different aspects of the computer science field. During the 
	summer of 2025, I interned with Galileo Insights, where I was testing code and working on 
	various projects.

      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">What I’m working on</h2>
          <ul className="mt-3 list-disc pl-5 text-black/70 space-y-2">
            <li>Personal website with React + Tailwind</li>
            <li>Improving testing / QA skills</li>
            <li>Building small projects to learn by doing</li>
          </ul>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["JavaScript", "React", "Tailwind", "Python", "Git"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
