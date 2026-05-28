import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/produtos">Produto</Link> {" | "}
                <Link to="/quemsomos">Quem Somos</Link> {" | "}
                <Link to="/cadfrutas">Frutas</Link>

            </nav>

        </header>
    )
}

export default Header