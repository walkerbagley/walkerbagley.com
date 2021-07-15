import Image from 'next/image'

export default function Entry({ metadata, tags, url }) {

    let tagList = Object.values(tags);
    let classList = "container";
    for (const tag of tagList) {
        classList += " ";
        classList += String(tag);
        console.log(classList);
    };

    return (
        <>
            <div className={classList}>
                <div className="image"><Image src={url} width="100%" height="100%"></Image></div>

                <div className="data">
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
                }
                .image img{
                    max-width: 100%;
                    max-height: 350px; 
                }
                .data{
                    display: none;
                }
            `}</style>
        </>
    )
}