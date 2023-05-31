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
    html_url: string,
    description: string,
    language: string,
    url: string,
    readMe: string
}

export interface GistInterface {

    files: string,
    url: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}