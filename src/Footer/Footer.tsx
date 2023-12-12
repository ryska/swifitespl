import './Footer.scss';

const Footer = () => {
    return (<div className="footer">
        <div className="wrapper">
            <p className="text">
                Ta strona nie jest powiązana z Taylor Swift, jej firmami ani jej wytwórnią.
                Nie pobieram wynagrodzenia za reklamy na tej stronie,
                ale mogę otrzymywać małe kwoty dzięki afiliacji i produktom które są tu umieszczone 🤍
            </p>
            <p className="text">
                Żadne zdjęcia na tej stronie nie są moją własnością.
            </p>
            <p className="text">
                Jest to poboczny projekt i wkładam to swój wolny czas i pieniądze, jeśli masz pomysł jak mogę ulepszyć tę stronę, napisz na
                <br /><a href="mailto:thepolishswiftie@gmail.com">thepolishswiftie@gmail.com</a>
            </p>
            <br />
            <p className="text">
                ©2023 thepolishswiftie
            </p>
        </div>
    </div>)
}

export default Footer;