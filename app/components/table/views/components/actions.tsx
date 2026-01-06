import InformationButton from "../../information";
import FavoriteButton from "../../favorite";

interface ActionsProps {
    id: string;
}

export default function Actions({ id }: ActionsProps) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <InformationButton id={id} />
            <FavoriteButton id={id} />
        </div>
    );
}