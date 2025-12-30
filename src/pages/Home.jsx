import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-black/70 w-fit">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Open to opportunities
      </div>

      <h1 className="text-5xl font-bold leading-tight tracking-tight">
        Hi, I’m Tobin.
      </h1>

      <p className="text-lg text-black/70 max-w-2xl leading-relaxed">
        I’m a computer science student at Grand Valley State University with a strong interest in 
	software development and AI. I enjoy building reliable software, learning new technologies, 
	and gaining hands-on experience through real-world projects.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to="/projects"
          className="rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90"
        >
          View Projects
        </Link>

        <Link
          to="/about"
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5"
        >
          About Me
        </Link>
      </div>
    </div>
  );
}
