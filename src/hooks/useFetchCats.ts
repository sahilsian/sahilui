import { CatsRESTAPIURL } from "@/libs/constants"
import useFetch from "./useFetch"
import { useEffect, useState } from "react";

const useFetchCats = () => {
    const {fetchData, loading} = useFetch();
    const [catImages, setCatImages] = useState<any[]>([]);

    const getCatsImages = async () => {
        try {
            const result = await fetchData({url: CatsRESTAPIURL});
            return result;
        } catch (error) {
            console.error("Error fetching cat images:", error);
            return null;
        }
    }

    useEffect(() => {
        const fetch = async () => { 
            const res = await getCatsImages();
            setCatImages(res?.data || []);
        }
        
        fetch()
    }, [])

    return { cats: catImages, loading }
}

export default useFetchCats;