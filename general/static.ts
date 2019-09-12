export function getStaticHome(env: string) {
    switch(env) {
        case "development":
            return "http://localhost:8091/static/";
        case "production":
            /// prod URL
    }
}

export function fileMapper(env: string): (filename: string) => string {
    return (filename) => getStaticHome(env) + filename;
} 