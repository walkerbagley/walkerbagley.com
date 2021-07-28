import Link from 'next/link'

export default function Navbar() {
	return (
        <>
            <div className="navbar">
                <Link href="/">
                    <a className="logo">
                        <div className="first">WALKER</div>
                        <div className="second">BAGLEY</div>
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="contact">Contact Me</a>
                </Link>
            </div>
            <style jsx global>{`
                .navbar{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1em 10vw;
                    color: var(--secondary);
                    background-color: var(--primary);
                }
                .logo{
                    display: flex;
                    font-size: 1.5em;
                    font-weight: 300;
                }
                .second{
                    padding-left: .05em;
                    font-weight: 600;
                }
                a:hover{
                    color: var(--accent);
                    transition: color .2s ease;
                }
            `}</style>
        </>
    )
}