export default function ItemCount({quantity}) {
  return (
    <div className="py-2 px-2 flex flex-row gap-4 items-center justify-between rounded-full border border-white w-44">
      <button className="py-2 px-4 hover:bg-slate-50 hover:bg-opacity-15 rounded-full">-</button>
      <span>{quantity}</span>
      <button className="py-2 px-4 hover:bg-slate-50 hover:bg-opacity-15 rounded-full">+</button>
    </div>
  )
}
