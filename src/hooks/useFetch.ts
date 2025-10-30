import useLoading from "./useLoading";
import { MapHTTPStatus } from "@/libs/mapHTTPStatus";

interface FetchProperties {
    url: string;
    options?: RequestInit;
}

const useFetch = () => {
    const {loading, startLoading, stopLoading} = useLoading();
    const fetchData = async ({url, options}:FetchProperties) => {
        try {
            startLoading();
            const response = await fetch(url, options)
            const status = MapHTTPStatus({status: response.status});
            if (status.message == "OK" || status.message == "Created") {
                return { data: await response.json(), message: status.message, code: status.code }
            } else {
                throw { message: status.message, code: status.code }
            }
            
        } catch (error) {
            stopLoading();
            console.error("Fetch error:", error)
            throw error
        } finally {
            stopLoading();
        }
    }
    return { fetchData, loading }
}

export default useFetch;