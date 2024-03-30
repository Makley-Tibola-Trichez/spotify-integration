import { useLoaderData } from "react-router-dom";

export const useTypedLoaderData = <T>() => useLoaderData() as T;
