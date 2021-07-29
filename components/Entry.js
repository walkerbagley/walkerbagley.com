import Image from 'next/image'
import styles from './Entry.module.css'

export default function Entry({ metadata, tags, url, toggle }) {
    let classList = "container " + String(tags);

    let show = " hide";
    if (classList.includes(toggle) || toggle === 'all') {
        show = "";
    }
    classList += show;

    // console.log(metadata);

    return (
        <>
            <div className={classList} onContextMenu={(e)=>e.preventDefault()}>
                <div className={styles.image}><Image src={url} className={styles.next} layout="fill" objectFit='cover'></Image></div>

                <div className="data hide">
                    <div className="metadata">
                        <div className="entry">{metadata[0]}</div>
                        <div className="entry">{metadata[1]}</div>
                        <div className="entry">{metadata[2]}</div>
                        <div className="entry">{metadata[3]}</div>
                        <div className="entry">{metadata[4]}</div>
                    </div>
                    <div className="other">
                        <div className="date">{metadata[5]}</div>
                        <div className="location">{metadata[6]}</div>
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