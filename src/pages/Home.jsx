import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-black/70 w-fit">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Open to opportunities
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Hi, I’m Tobin.
        </h1>

        <p className="text-lg text-black/70 max-w-2xl leading-relaxed">
          I’m a software developer interested in web development, QA, and building clean,
          reliable applications. I like writing clean code, testing thoroughly, and shipping
          projects that people can actually use.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/projects"
            className="rounded-md bg-black px-4 py-2 text-white text-sm font-medium"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="rounded-md border px-4 py-2 text-sm font-medium"
          >
            About Me
          </a>
        </div>
      </div>
    </Container>
  );
}
