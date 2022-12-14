function useBaseURL(url: string): string {
    return url.match(new RegExp('^(http|https)://', 'i')) ? url : import.meta.env.BASE_URL + url;
}

export { useBaseURL };
