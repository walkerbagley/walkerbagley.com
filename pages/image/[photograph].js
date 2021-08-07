import { useRouter } from "next/router";
import Entry from "../../components/Entry";

export default function PhotoPage() {
    const router = useRouter();
    const {photograph} = router.query;
    const metadata = router.query['metadata'].split(',');
    const date = router.query['date'];
    const url = router.query['url'];

    console.log(metadata);
    console.log(date);
    console.log(url);
    
    return (
        <>
            <div className="wrapper">
                <Entry metadata={metadata} date={date} tags='' url={url} toggle='' showData={true} />
            </div>
            <style jsx global>{`
                .wrapper{
                    padding: 0 10vw;
                }
            `}</style>
        </>
    )
}