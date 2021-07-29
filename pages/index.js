import React, { useState } from 'react'
import Entry from '../components/Entry'

export default function Home() {
	const [active, setActive] = useState('all');
	
	let images = [
		{metadata: ["Single Shot", "30mm", "1/1250\"", "f/2", "ISO 100", "Moon Valley, AZ"], date: 201017, tags: "sunset car", url: "1NzvR57wR9Bz3uq7tS943w6q7DkqUPDUq"},
		{metadata: ["Single Shot", "-", "-", "-", "-", "Flagstaff, AZ"], date: 200528, tags: "flagstaff landscape", url: "1kvK-QYw3LLgFQDAAjXFpsvYJ79dXIY94"},
		{metadata: ["Single Shot", "-", "-", "-", "-", "Grand Canyon, AZ"], date: 200528, tags: "grandCanyon landscape", url: "1w7HnIgYBw8Cs234qOwFrzPI1dNgSsdf5"},
		{metadata: ["Single Shot", "35mm", "5\"", "f/1.4", "ISO 50", "Saguaro Lake, AZ"], date: 210707, tags: "astrophotography landscape", url: "1qfht4XgM0X1Npe9yEfqH0STqqTPxfPK6"},
		{metadata: ["Panorama", "35mm", "15\"", "f/1.4", "ISO 400", "Saguaro Lake, AZ"], date: 210707, tags: "astrophotography landscape", url: "1_cIQaIP2_mWnf7z6RgGOYr9RDE4abyJ_"},
		{metadata: ["Single Shot", "30mm", "1/100\"", "f/1.6", "ISO 3200", "Scottsdale, AZ"], date: 200824, tags: "dog portrait", url: "1yiepSGAu_dyG-iwT6o3WJuXVqO_QaCzk"}
	];

	const sortedImages = images.sort((a, b) => b.date - a.date);

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
				{sortedImages.map(image => (
					<Entry key={image} metadata={image['metadata']} date={image['date']} tags={image['tags']} url={image['url']} toggle={active} />
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
