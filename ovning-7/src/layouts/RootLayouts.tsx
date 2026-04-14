import {Link, Outlet} from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/songs/1">Song 1</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default RootLayout
