import { FC } from "react";
import { Radio } from "../ui/radio";
interface PropsI {
    title: string;
    description?: string;
    image?: string;
    checked?: boolean;
    onClick: () => void;
}
const PrimaryCard: FC<PropsI> = (props) => {
    const { checked, title, description, image } = props;
    return (
        <div
            onClick={props.onClick}
            className={`t-py-5 t-rounded-sm t-px-4 t-flex  t-justify-between ${
                checked ? "t-shadow-greenSm" : "t-shadow-default"
            }`}
        >
            <div className="t-flex t-gap-x-4 t-items-center">
                <div>
                    <Radio checked={Boolean(checked)} />
                </div>
                <div className="t-flex t-flex-col t-gap-y-2">
                    <h2 className="t-font-12-regular">{title}</h2>
                    <p className="t-font-8-regular t-text-text-1">
                        {description}
                    </p>
                </div>
            </div>
            {image && (
                <div className="t-h-12 t-w-12">
                    <img src={image} alt={title} className="t-object-cover" />
                </div>
            )}
        </div>
    );
};

export default PrimaryCard;
