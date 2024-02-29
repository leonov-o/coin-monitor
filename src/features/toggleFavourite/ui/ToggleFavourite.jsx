import React, {useEffect, useState} from 'react';
import {StarFilledIcon, StarIcon} from "@radix-ui/react-icons";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../../../entities";

export const ToggleFavourite = ({id}) => {
    const {favourites} = useSelector(state => state.coins);
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(favourites.find((el) => el === id) !== undefined);

    useEffect(() => {
        localStorage.setItem("favourites", favourites);
    }, [favourites]);
    const handleFavourite = () => {
        setIsFavourite(true);
        dispatch(addFavourite(id));

    }

    const handleUnfavourite = () => {
        setIsFavourite(false);
        dispatch(removeFavourite(id));
    }

    return (
        <div onClick={() => setIsFavourite(!isFavourite)}>
            {
                isFavourite
                    ? <StarFilledIcon width={20} height={20} onClick={() => handleUnfavourite()}/>
                    : <StarIcon width={20} height={20} onClick={() => handleFavourite()}/>
            }
        </div>
    );
};
