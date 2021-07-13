import Link from 'next/link'
import Head from 'next/head'
import ContactCard from '../components/ContactCard'

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact Me</title>
			</Head>
			<div className="grid">
                {/* <ContactCard title="Instagram" color="var(--accent)" icon="instagram.png" info="@bagley.photo" link="https://instagram.com/bagley.photo"/>
                <ContactCard title="LinkedIn" color="var(--accent)" icon="linkedin.png" info="@walkerbagley" link="https://www.linkedin.com/in/walkerbagley/"/>
                <ContactCard title="Email" color="var(--accent)" icon="email.png" info="walkerabagley@gmail.com" link="mailto:walkerabagley@gmail.com"/>
                <ContactCard title="Phone" color="var(--accent)" icon="phone.png" info="(480)-765-7235" link="tel:4807657235"/> */}
                <a href="https://instagram.com/bagley.photo" target="_blank" rel="noopener noreferrer">
                    <div className="container">
                        <div className="icon" id="1">
                        </div>
                        <div className="info">
                            <div className="title">Instagram</div>
                            <div className="handle">@bagley.photo</div>
                        </div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/walkerbagley/" target="_blank" rel="noopener noreferrer">
                    <div className="container">
                        <div className="icon 2">
                        </div>
                        <div className="info">
                            <div className="title">LinkedIn</div>
                            <div className="handle">@walkerbagley</div>
                        </div>
                    </div>
                </a>
                <a href="mailto:walkerabagley@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="container">
                        <div className="icon 3">
                        </div>
                        <div className="info">
                            <div className="title">Email</div>
                            <div className="handle">walkerabagley@gmail.com</div>
                        </div>
                    </div>
                </a>
                <a href="tel:4807657235" target="_blank" rel="noopener noreferrer">
                    <div className="container">
                        <div className="icon 4">
                        </div>
                        <div className="info">
                            <div className="title">Phone</div>
                            <div className="handle">(480)-765-7235</div>
                        </div>
                    </div>
                </a>
            </div>
			<style jsx>{`
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
                    background-image: url('/linkedin.png');
                    background-size: cover;
					background-position: center;
                }
                #1{
                    background-image: url('/instagram.png');
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
                    color: var(--accent);
                }
			`}</style>
		</>
	)
}