export interface RepoApiInterface {
    repo: string,
    desc: string,
    lastUpdated: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}