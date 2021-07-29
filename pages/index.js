import React, { useState } from 'react'
import Entry from '../components/Entry'

export default function Home() {
	const [active, setActive] = useState('all');
	
	let images = [
		[["Single Shot", "30mm", "1/1250\"", "f/2", "ISO 100", "17 Oct 2020", "Moon Valley, AZ"], "sunset car", "https://drive.google.com/uc?export=view&id=1NzvR57wR9Bz3uq7tS943w6q7DkqUPDUq"],
		[["Single Shot", "-", "-", "-", "-", "28 May 2020", "Flagstaff, AZ"], "flagstaff landscape", "https://drive.google.com/uc?export=view&id=1kvK-QYw3LLgFQDAAjXFpsvYJ79dXIY94"],
		[["Single Shot", "-", "-", "-", "-", "28 May 2020", "Grand Canyon, AZ"], "grandCanyon landscape", "https://drive.google.com/uc?export=view&id=1w7HnIgYBw8Cs234qOwFrzPI1dNgSsdf5"],
		[["Single Shot", "35mm", "5\"", "f/1.4", "ISO 50", "7 Jul 2021", "Saguaro Lake, AZ"], "astrophotography landscape", "https://drive.google.com/uc?export=view&id=1qfht4XgM0X1Npe9yEfqH0STqqTPxfPK6"],
		[["Panorama", "35mm", "15\"", "f/1.4", "ISO 400", "7 Jul 2021", "Saguaro Lake, AZ"], "astrophotography landscape", "https://drive.google.com/uc?export=view&id=1_cIQaIP2_mWnf7z6RgGOYr9RDE4abyJ_"],
		[["Single Shot", "30mm", "1/100\"", "f/1.6", "ISO 3200", "24 Aug 2020", "Scottsdale, AZ"], "dog portrait", "https://drive.google.com/uc?export=view&id=1yiepSGAu_dyG-iwT6o3WJuXVqO_QaCzk"],
	];

	return (
		<>
			<div className="filters">
				<div onClick={()=> setActive('all')} className={`filter ${active === 'all' ? 'active' : ''}`}>All</div>
				<div onClick={()=> setActive('landscape')} className={`filter ${active === 'landscape' ? 'active' : ''}`}>Landscapes</div>
				<div onClick={()=> setActive('astrophotography')} className={`filter ${active === 'astrophotography' ? 'active' : ''}`}>Astrophotography</div>
				<div onClick={() => setActive('portrait')} className={`filter ${active === 'portrait' ? 'active' : ''}`}>Portraits</div>
				<div onClick={()=> setActive('car')} className={`filter ${active === 'car' ? 'active' : ''}`}>Cars</div>
			</div>
			<div className="grid">
				{images.map(image => (
					<Entry key={image} metadata={image[0]} tags={image[1]} url={image[2]} toggle={active} />
				))}
			</div>

			<style jsx global>{`
				.filters{
					padding: 0 10vw;
					padding-top: 2em;
					display: flex;
					flex-wrap: wrap;
					align-itmes: center;
					justify-content: center;
					gap: .75em;
				}
				.filter{
					margin: 0;
					padding: .4em 1em;
					border: 2px solid var(--charcoal);
					border-radius: .5em;
					transition: all .25s ease;
				}
				.filter:hover,
				.active{
					cursor: pointer;
					color: white;
					background-color: var(--accent);
					border: 2px solid transparent;
				}
				.grid{
					padding: 3em 10vw;
					columns: 3;
					column-gap: 1.5em;
					// display: grid;
					// grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
					// grid-template-rows: repeat(auto-fit, minmax(1fr, min-content));
					// gap: 1.5em;
				}
				@media only screen and (max-width: 900px) {
                    .grid {
                      columns: 2;
                    }
                }
				@media only screen and (max-width: 500px) {
                    .grid {
                      columns: 1;
                    }
                }
      		`}</style>
		</>
	)
}
