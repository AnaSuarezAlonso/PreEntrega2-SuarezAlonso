import {Link} from "react-router-dom"
import sneakersLogo from "../assets/sneakers.svg"
import CartWidget from "./CartWidget"
import NavBarButton from "./NavBarButton"

export default function NavBar() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-6 sm:py-3 px-2 sm:px-8 lg:px-20 2xl:px-40 text-white bg-ui-00">
      <Link to="/"><img src={sneakersLogo} alt="sneakersLogo" className="h-8"/></Link>
      <nav className="flex flex-col sm:flex-row justify-between gap-1">
        <ul className="flex gap-1 md:gap-4">
					<NavBarButton route={"/category/men"} title='Men'/>
					<NavBarButton route={"/category/women"} title='Women'/>
					<NavBarButton route={"/category/kids"} title='Kids'/>
          <NavBarButton route={"/category/sales"} title='Sales'/>
        </ul>
      </nav>
      <CartWidget number={2} />
    </header>
  )
}
