export default interface FetchOptions {
    method: string;
    headers?: {
        'Content-Type': string;
    };
    body?: BodyInit;
    mode?: RequestMode;
    credentials?: RequestCredentials;
}