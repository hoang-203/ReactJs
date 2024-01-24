
function Header(){
  var title = "Welcome to Huy Hoàng"

  return(
    <header className="h-24 bg-red-300">
        <a
          className="App-link "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </header>
  )
}
export default Header