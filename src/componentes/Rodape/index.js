

import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="https://i.imgur.com/u2Xpgta.png" alt="teste" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="https://i.imgur.com/fiMCPcZ.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="https://i.imgur.com/Y0gp2MR.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Júlio Bandeira e Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape