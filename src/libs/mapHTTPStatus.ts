interface MapHTTPStatusProps {
    status: number;
}

export const MapHTTPStatus = (props: MapHTTPStatusProps) => {
    switch (props.status) {
        case 200:
            return {message: "OK", code: props.status};
        case 201:
            return {message: "Created", code: props.status};
        case 204:
            return {message: "No Content", code: props.status};
        case 400:
            return {message: "Bad Request", code: props.status};
        case 401:
            return {message: "Unauthorized", code: props.status};
        case 403:
            return {message: "Forbidden", code: props.status};
        case 404:
            return {message: "Not Found", code: props.status};
        case 500:
            return {message: "Internal Server Error", code: props.status};
        case 502:
            return {message: "Bad Gateway", code: props.status};
        case 503:
            return {message: "Service Unavailable", code: props.status};
        default:
            return {message: "Unknown Status", code: props.status};
    }
}