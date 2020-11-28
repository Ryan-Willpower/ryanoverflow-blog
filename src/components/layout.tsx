import React from "react"
import { Link } from "gatsby"
import { ILayoutProps } from "../type"

const Layout: React.FC<ILayoutProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = isRootPath ? (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  ) : (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Create with 🍱 by
        {` `}
        <a href="https://github.com/Ryan-Willpower">Surasak C.</a>
      </footer>
    </div>
  )
}

export default Layout
