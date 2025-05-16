import placeholderPicture from '../images/2.jpg';
import presentPicture from '../images/present.jpg';

export const calendarContent = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `December ${i + 1}`,
    description: "Lahjacontent tähän",
    image: placeholderPicture,
    contentImage: presentPicture,
}));