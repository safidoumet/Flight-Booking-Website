import { useState } from 'react'

function SignupPage() {
  const [created, setCreated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setCreated(true)
  }

  return (
    <main className="auth-page">
      <section className="auth-card" data-aos="zoom-in-up">
        <p className="tag">Create account</p>
        <h1>Join SkyWave Today</h1>
        <p>Save bookings, track fares, and manage your flights in one place.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="fullName" required placeholder="John Doe" />
          </label>

          <label>
            Email Address
            <input type="email" name="email" required placeholder="john@email.com" />
          </label>

          <label>
            Password
            <input type="password" name="password" minLength={8} required placeholder="********" />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              minLength={8}
              required
              placeholder="********"
            />
          </label>

          <button type="submit" className="btn-solid auth-submit">Create Account</button>
        </form>

        {created && (
          <p className="auth-success">Account created successfully. Welcome onboard.</p>
        )}
      </section>
    </main>
  )
}

export default SignupPage
