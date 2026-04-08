import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="app-container">
            <header>
                <div className="container">
                    <h1>Pulsar News Galaxy</h1>
                    <a href="/sobre">Sobre Nós</a>
                    <a href="/news">Noticias</a>
                </div>
            </header>    
        </div>
    )
}

export default Home;