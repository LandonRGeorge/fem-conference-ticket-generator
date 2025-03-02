import logo from '../assets/images/logo-full.svg'

export default function Header() {
  console.log(logo)
  return (
    <header>
      <nav>
        <img src={logo} alt="logo"/>
      </nav>
    </header>
  )
}