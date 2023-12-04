export const CheckImage = (image: FormData) : boolean=> {
    return  image.getAll("file").length > 0 &&
    !image.getAll("file").includes("indefined") 
}