function Footer () {
    return   <footer className="page-footer brown darken-4">
      <div className="footer-copyright brown darken-4">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/olgamitsiuk/cocktail-project" target ="_blank"
         rel="noreferrer">Repo</a>
      </div>
    </div>
  </footer>
}
export { Footer }