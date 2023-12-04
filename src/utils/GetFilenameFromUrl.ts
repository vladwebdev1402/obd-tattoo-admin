export const GetFilenameFromUrl = (url: string): string => {
    return url.split('/').at(-1) ?? "";
}