import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Page content below navbar */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit">
            <div className="rounded-2xl border p-6">
              <img
                src="/profile.jpeg"
                alt="Tobin Richards"
                className="h-32 w-32 rounded-full object-cover border mx-auto"
              />

              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">Tobin Richards</h2>
                <p className="mt-1 text-sm text-black/60">
                  Grand Valley State University
                </p>
                <p className="text-sm text-black/60">Michigan, US</p>
              </div>

              {/* Contact links */}
              <div className="mt-6 space-y-2 text-sm">
                <a
                  href="mailto:richarto@mail.gvsu.edu"
                  className="block text-blue-600 hover:underline"
                >
                  Email
                </a>
                <a
                  href="https://github.com/richarto1183"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/toby_richards83/#"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </aside>

          {/* Main page content */}
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
