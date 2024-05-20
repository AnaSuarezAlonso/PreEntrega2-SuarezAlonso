import cart from "../assets/cart.svg"

export default function CartWidget({number}) {
  return (
    <button className="relative p-4 flex-shrink-0 hover:bg-slate-50 hover:bg-opacity-15 rounded-md">
      <img src={cart} alt="cart-icon" className="h-6"/>
      <div className="py-0.5 px-2 bg-primary rounded-full text-sm font-bold absolute top-0 right-0">{number}</div>
    </button>
  )
}
