import { Link, useLocation } from "react-router-dom"

const Navlink = ({ title, url }: { title: string, url: string }) => {

  const { pathname } = useLocation();

  return (
    <Link to={url} className={`rounded p-1 ${pathname === url && "bg-black text-white"}`} >{title}</Link>
  )
}

export default Navlink