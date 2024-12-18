'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as bcrypt from 'bcryptjs';
import Navbar from '../components/Navbar.js';


export default function Home() {
  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [secureWord, setSecureWord] = useState('');
  const [showPassword, setShowPassword] = useState(Boolean);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/secureWord', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setSecureWord(data);
      // router.push('/main');
      // Redirect or perform other actions
    } else {
      setError(data.error);
    }
  };

  const loginSubmit = async (e: any) => {
    e.preventDefault();

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, hashPassword }),
    });

    const data = await response.json();
    // Redirect or perform other actions
    if (response.ok) {
      if (!data) {
        alert('Wrong Password.');
      } else {
        alert('Login Successful.');
        router.push('/dashboard');
      }
    } else {
      setError(data.error);
    }
  };

  function LoginButton(e: any) {
    if (e.showPassword) {
      return <button onClick={(e) => loginSubmit(e)} type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
        Login
      </button>
    }
    if (e.secureWord) {
      return <button onClick={(e) => setShowPassword(true)} type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
        Next
      </button>
    }
    return <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
      Submit
    </button>
  }

  return (
    <>

      <Navbar />
      <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <div className="col-span-full">
            <div className="mt-2 flex items-center gap-x-3">
              <div style={{ marginBottom: 10 }}>
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{ width: '100%', padding: 8 }}
                />
              </div>
              <span>
                {secureWord}
              </span>
            </div>
          </div>
          {showPassword &&
            <div style={{ marginBottom: 10 }}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: 8 }}
              />
            </div>
          }
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          <LoginButton secureWord={secureWord} showPassword={showPassword} />
        </form>
      </div>
    </>
  );
}
