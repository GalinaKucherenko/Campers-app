import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, useEffect } from 'react-redux';
import { fetchCampersById } from '../../redux/campers/operations';
import { selectSelectedCamper, selectIsLoading, selectError } from '../../redux/campers/selectors';

export default function DetailsPage() {
    const { id } = useParams(); // Отримуємо id з URL
    const dispatch = useDispatch();
    const camper = useSelector(selectSelectedCamper);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCampersById(id)); // Завантажуємо дані кемпера за id
    }, [dispatch, id]);

    if (isLoading) return <p>Please wait, loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!camper) return null;

    return (
        <div>
            <h2>{camper.name}</h2>
            <p>{camper.rating}</p>
            <p>{camper?.reviews?.length || 0}</p>
            <p>{camper.location}</p>
            <p>{camper.price}</p>
            <p>{camper.description}</p>
        </div>
    );
}
