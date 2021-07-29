import Image from 'next/image'
import styles from './Entry.module.css'

export default function Entry({ metadata, date, tags, url, toggle }) {
    let classList = "container " + String(tags);

    // Show/hide entry based on selected tag
    let show = " hide";
    if (classList.includes(toggle) || toggle === 'all') {
        show = "";
    }
    classList += show;
    
    // Date manipulation
    const realDate = new Date("20" + String(date).substring(0, 2) + "-" + String(date).substring(2, 4) + "-" + String(date).substring(4));
    realDate.setHours(24);
    let dateContent = realDate.toDateString().slice(4);
    dateContent = dateContent.substring(4, 7) + dateContent.substring(0, 4) + dateContent.substring(7);
    
    // url handling
    const finalURL = "https://drive.google.com/uc?export=view&id=" + url;

    // console.log(metadata);
    // console.log(dateContent);

    return (
        <>
            <div className={classList} onContextMenu={(e)=>e.preventDefault()}>
                <div className={styles.image}><Image src={finalURL} className={styles.next} layout="fill" objectFit='cover'></Image></div>

                <div className="data hide">
                    <div className="metadata">
                        <div className="entry">{metadata[0]}</div>
                        <div className="entry">{metadata[1]}</div>
                        <div className="entry">{metadata[2]}</div>
                        <div className="entry">{metadata[3]}</div>
                        <div className="entry">{metadata[4]}</div>
                    </div>
                    <div className="other">
                        <div className="date">{dateContent}</div>
                        <div className="location">{metadata[5]}</div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .container{
                    width: 100%;
                    height: 100%;
                    // border: 3px solid red;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding-bottom: 1.5em;
                }
                .image img{
                    max-width: 100%;
                    max-height: 350px; 
                }
                .hide{
                    display: none;
                }
            `}</style>
        </>
    )
}