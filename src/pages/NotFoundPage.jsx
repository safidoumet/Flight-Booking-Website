import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="tag">404</p>
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist yet.</p>
      <Link className="btn-solid" to="/">
        Back To Home
      </Link>
    </main>
  )
}

export default NotFoundPage
