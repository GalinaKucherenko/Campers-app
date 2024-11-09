import { fetchCampersById } from "../../redux/campers/operations";
import Gallery from '../Gallery/Gallery';
import BookingForm from '../BookingForm/BookingForm';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectSelectedCamper } from "../../redux/campers/selectors";
import { useEffect } from "react";

export default function Camper() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const camper = useSelector(selectSelectedCamper);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchCampersById(id));
    }, [dispatch, id]);

    if (isLoading) return <p>Please wait, loading...</p>
    if (!camper) return null

    return (
        <div>
            <h2>{camper.name}</h2>
            <p>{camper.rating} </p>
            <p>{camper?.reviews?.length || 0}</p>
            <p>{camper.location}</p>
            <p>{camper.price}</p>
            <Gallery />
            <p>{camper.description}</p>
            <Features />
            <Reviews />
            <BookingForm/>

        </div>
    )
}