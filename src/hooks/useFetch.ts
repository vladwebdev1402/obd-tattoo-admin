import {useState} from "react"

export const useFetch = <T>(callback: () => Promise<T[]>) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoadingComplete, setIsLoadingComplete] = useState(true);

    const fething = async () => {
        setIsLoadingComplete(false);
        try {
            const response = await callback();
            setData(response);
        }
        catch (err) {
            if (err instanceof Error) setError("Произошла ошибка: " + err.message);
            else if (typeof err === "string") setError("Произошла ошибка: " + err);
            else setError("Произошла ошибка: ");
        } finally {
            setIsLoadingComplete(true);
        }
    }
    

    return {fething, data, setData, error, isLoadingComplete};
}