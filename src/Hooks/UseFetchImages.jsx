import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Post } from "../store/post";

export const useFetch = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Post());
    }, [dispatch]);
};










