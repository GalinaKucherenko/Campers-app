import Camper from "../Camper/Camper";
import { fetchCampers } from '../../redux/campers/operations';
import { selectCampers, selectIsLoading} from "../../redux/campers/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CampersList() {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (isLoading) return <p>Please wait, loading...</p>

    return (
        <div>
            {campers.map((camper) => (
                <div key={camper.id}>
                    <Camper key={camper.id} camper={camper} />
                    <Link to={`/catalog/${camper.id}`} target="_blank">
                        <button>Show more</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}