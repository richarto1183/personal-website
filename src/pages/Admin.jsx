import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/admin-login");
    });
    return () => unsub();
  }, [navigate]);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const q = query(
          collection(db, "contactMessages"),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleLogout() {
    await signOut(auth);
    navigate("/admin-login");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <button
          onClick={handleLogout}
          className="rounded-md border px-4 py-2 text-sm"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-black/70">Loading...</p>
      ) : messages.length === 0 ? (
        <p className="text-black/70">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="rounded-xl border p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-black/60">
                  {m.createdAt?.toDate?.().toLocaleString?.() ?? "No timestamp"}
                </p>
              </div>
              <p className="text-sm text-black/70">{m.email}</p>
              <p className="mt-2">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

