export default function Footer() {
	return (
        <>
            <div className="footer">&copy;2021 Walker Bagley
            </div>
            <style jsx global>{`
                .footer{
                    padding: 2em 10vw;
                    text-align: center;
                    font-weight: 400;
                    color: var(--secondary);
                }
            `}</style>
        </>
    )
}