import Image from "next/image";
import Navbar from './components/Navbar.js';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My App!</h1>
        <p>This is the home page content.</p>
      </main>
    </div>
  );
}