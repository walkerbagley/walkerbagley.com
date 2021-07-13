export default function ContactCard({title, color, icon, info, link}) {
    return(
        <>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="container">
                <div className="icon">
                </div>
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="handle">{info}</div>
                </div>
            </div>
        </a>
        <style jsx global>{`
                .container{
                    width: 500px;
                    height: 200px;
                    padding: 3em;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #f3f3f3;
                    border-radius: 1em;
                }
                .icon{
                    width: 100px;
                    height: 100px;
                    background-image: url('/${icon}');
                    background-size: cover;
					background-position: center;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    text-align: right;
                    font-size: 1.1em;
                    font-weight: 300;
                    color: var(--charcoal);
                    transition: color .2s ease;
                }
                .title{
                    font-size: 1.5em;
                    padding-bottom: .3em;
                    font-weight: 500;
                }
                a{
                    
                }
                a:hover{
                    color: black;
                }
                a:hover .info{
                    color: ${color};
                }
            `}</style>
        </>
    )
}