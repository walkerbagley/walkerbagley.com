import Entry from '../components/Entry'

export default function Home() {
	return (
		<>
			<div className="grid">
				<Entry metadata={{ "0": "Single Shot", "1": "30mm", "2": "1/1250\"", "3": "f/2", "4": "ISO 100", "5": "17 Oct 2020", "6": "Moon Valley, AZ" }} tags={{ "0": "sunset", "1": "car" }} url="https://drive.google.com/uc?export=view&id=1NzvR57wR9Bz3uq7tS943w6q7DkqUPDUq" />
				<Entry metadata={{ "0": "Single Shot", "1": "-", "2": "-", "3": "-", "4": "-", "5": "28 May 2020", "6": "Flagstaff, AZ" }} tags={{ "0": "flagstaff", "1": "landscape" }} url="https://drive.google.com/uc?export=view&id=1kvK-QYw3LLgFQDAAjXFpsvYJ79dXIY94" />
				<Entry metadata={{ "0": "Single Shot", "1": "-", "2": "-", "3": "-", "4": "-", "5": "28 May 2020", "6": "Grand Canyon, AZ" }} tags={{ "0": "grandCanyon", "1": "landscape" }} url="https://drive.google.com/uc?export=view&id=1w7HnIgYBw8Cs234qOwFrzPI1dNgSsdf5" />
				<Entry metadata={{ "0": "Single Shot", "1": "35mm", "2": "5\"", "3": "f/1.4", "4": "ISO 50", "5": "7 Jul 2021", "6": "Saguaro Lake, AZ" }} tags={{ "0": "astrophotography", "1": "landscape" }} url="https://drive.google.com/uc?export=view&id=1qfht4XgM0X1Npe9yEfqH0STqqTPxfPK6" />
				<Entry metadata={{ "0": "Panorama", "1": "35mm", "2": "15\"", "3": "f/1.4", "4": "ISO 400", "5": "7 Jul 2021", "6": "Saguaro Lake, AZ" }} tags={{ "0": "astrophotography", "1": "landscape" }} url="https://drive.google.com/uc?export=view&id=1_cIQaIP2_mWnf7z6RgGOYr9RDE4abyJ_" />
				<Entry metadata={{ "0": "Single Shot", "1": "30mm", "2": "1/100\"", "3": "f/1.6", "4": "ISO 3200", "5": "24 Aug 2020", "6": "Scottsdale, AZ" }} tags={{ "0": "dog", "1": "portrait" }} url="https://drive.google.com/uc?export=view&id=1yiepSGAu_dyG-iwT6o3WJuXVqO_QaCzk" />
			</div>

			<style jsx global>{`
				.grid{
					padding: 5em 10vw;
					// display: grid;
					// grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
					// grid-template-rows: repeat(auto-fit, minmax(1fr, min-content));
					// gap: 1.5em;
					columns: 3;
					column-gap: 1.5em;
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
