export interface RepoApiInterface {
    repo: string,
    desc: string,
    lastUpdated: string,
    flag: boolean
}

export interface GitHubApiInterface {
    name: string,
    id: string,
    owner: {login: string},
    html_url: String

}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}