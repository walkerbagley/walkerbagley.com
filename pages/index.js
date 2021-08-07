import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Entry from '../components/Entry'

export default function Home() {
	const [searchToggle, setSearchToggle] = useState(false);
	const [activeFilter, setActiveFilter] = useState('all');
	const [activeSort, setActiveSort] = useState('newest');
	const [sortedEntries, setSortedEntries] = useState([]);

	// Array of Entry objects to populate gallery in mapping function html
	let images = [
		{id: "1", metadata: ["Single Shot", "30mm", "1/1250\"", "f/2", "ISO 100", "Moon Valley, AZ"], date: 201017, tags: "sunset car", url: "1NzvR57wR9Bz3uq7tS943w6q7DkqUPDUq"},
		{id: "2", metadata: ["Single Shot", "-", "-", "-", "-", "Flagstaff, AZ"], date: 200528, tags: "flagstaff landscape", url: "1kvK-QYw3LLgFQDAAjXFpsvYJ79dXIY94"},
		{id: "3", metadata: ["Single Shot", "-", "-", "-", "-", "Grand Canyon, AZ"], date: 200528, tags: "grandCanyon landscape", url: "1w7HnIgYBw8Cs234qOwFrzPI1dNgSsdf5"},
		{id: "4", metadata: ["Single Shot", "35mm", "5\'", "f/1.4", "ISO 50", "Saguaro Lake, AZ"], date: 210707, tags: "astrophotography landscape", url: "1qfht4XgM0X1Npe9yEfqH0STqqTPxfPK6"},
		{id: "5", metadata: ["Panorama", "35mm", "15\"", "f/1.4", "ISO 400", "Saguaro Lake, AZ"], date: 210707, tags: "astrophotography landscape", url: "1_cIQaIP2_mWnf7z6RgGOYr9RDE4abyJ_"},
		{id: "6", metadata: ["Single Shot", "30mm", "1/100\"", "f/1.6", "ISO 3200", "Scottsdale, AZ"], date: 200824, tags: "dog portrait", url: "1yiepSGAu_dyG-iwT6o3WJuXVqO_QaCzk"}
	];

	// update sort order of {images} array upon update of activeSort variable in sort html
	useEffect(() => {
		const sortImages = type => {
			if (type === 'newest') {
				const sortedImages = [...images].sort((a, b) => b.date - a.date);
				setSortedEntries(sortedImages);
				console.log(sortedImages[0]);
			}
			else if (type === 'oldest') {
				const sortedImages = [...images].sort((a, b) => a.date - b.date);
				setSortedEntries(sortedImages);
				console.log(sortedImages[0]);
			}
		}
		sortImages(activeSort);
	}, [activeSort]);
	
	return (
		<>
			<div className="search">
				<div className="filters">
					<div className={`searchName ${!searchToggle ? 'left' : ''}`}>Search</div>
					<div onClick={() => setSearchToggle(!searchToggle)} className={`collapseIcon ${!searchToggle ? 'left' : ''}`}>
						<svg version="1.1" id="Capa_1" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style={{ enableBackground: 'new 0 0 451.847 451.847' }}><g><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
					</div>
				</div>
				<div className={`filters ${!searchToggle ? 'hideFilter' : ''}`}>
					<div className="searchName">Filter</div>
					<div onClick={()=> setActiveFilter('all')} className={`filter ${activeFilter === 'all' ? 'active' : ''}`}>All</div>
					<div onClick={()=> setActiveFilter('landscape')} className={`filter ${activeFilter === 'landscape' ? 'active' : ''}`}>Landscapes</div>
					<div onClick={()=> setActiveFilter('astrophotography')} className={`filter ${activeFilter === 'astrophotography' ? 'active' : ''}`}>Astrophotography</div>
					<div onClick={() => setActiveFilter('portrait')} className={`filter ${activeFilter === 'portrait' ? 'active' : ''}`}>Portraits</div>
					<div onClick={()=> setActiveFilter('car')} className={`filter ${activeFilter === 'car' ? 'active' : ''}`}>Cars</div>
				</div>
				<div className={`filters ${!searchToggle ? 'hideFilter' : ''}`}>
					<div className="searchName">Sort</div>
					<div onClick={()=> setActiveSort('newest')} className={`filter ${activeSort === 'newest' ? 'active' : ''}`}>Date (Newest)</div>
					<div onClick={()=> setActiveSort('oldest')} className={`filter ${activeSort === 'oldest' ? 'active' : ''}`}>Date (Oldest)</div>
				</div>
			</div>
			<div className="grid">
				{sortedEntries.map(image => (
					<Link key={image['id']} href={`/image/[photograph]?photograph${image['id']}&metadata=${image['metadata']}&date=${image['date']}&url=${image['url']}`} as={`/image/${image['id']}`}>
						<a>
							<Entry metadata={image['metadata']} date={image['date']} tags={image['tags']} url={image['url']} toggle={activeFilter} showData={false}/>
						</a>
					</Link>
				))}
			</div>

			<style jsx global>{`
				.search{
					padding: 2em 10vw;
					overflow: hidden;
				}
				.filters{
					padding: 1em 0;
					display: flex;
					flex-wrap: wrap;
					align-itmes: center;
					justify-content: left;
					gap: .75em;
					transition: all .5s ease;
				}
				.filters:first-of-type{
					display: flex;
					justify-content: space-between;
					padding-top: 0;
					margin-top: -1em;
				}
				.filters:first-of-type .searchName{
					font-size: 1.8em;
					font-weight: 500;
					transition: opacity .2s ease;
				}
				.collapseIcon{
					width: 30px;
                    height: auto;
					display: flex;
					align-items: center;
					cursor: pointer;
					transition: all .2s ease;
				}
				.collapseIcon:hover{
					padding-top: .3em;
				}
				.collapseIcon.left:hover{
					padding-top: 0;
					margin-right: .3em;
				}
				.collapseIcon svg{
					width: 100%;
					height: 100%;
					fill: var(--secondary);
					transition: all .2s ease;
				}
				.searchName.left{
					opacity: .6;
				}
				.left svg{
					transform: rotate(90deg);
					opacity: .6;
				}
				.hideFilter{
					margin-top: -20%;
					opacity: 0;
					pointer-events: none;
				}
				.searchName{
					padding: .15em 0;
					width: 100px;
					font-weight: 300;
					font-size: 1.5em;
				}
				.filter{
					margin: 0;
					padding: .4em 1em;
					border: 2px solid var(--secondary);
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
					margin-top: 3em;
					padding: .2em 10vw;
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
                    .filters{
						display: block;
					}
					.filter{
						margin: .5em 0;
						width: auto;
					}
					.hideFilter{
						margin-top: -80%;
					}
					.grid {
                      columns: 1;
                    }
                }
      		`}</style>
		</>
	)
}
