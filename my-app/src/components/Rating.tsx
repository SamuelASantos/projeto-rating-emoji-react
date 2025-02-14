import { ReactNode } from "react";

type RatingProps = {
    value: number;
}

export function Rating({ value }: RatingProps) {
    if (value > 5) value = 5;
    if (value < 0) value = 0;
    let res = '';

    switch (Math.floor(value)) {
        case 0:
            res = "😶😶😶😶😶";
            break;
        case 1:
            res = "😭😶😶😶😶";
            break;
        case 2:
            res = "😔😔😶😶😶";
            break;
        case 3:
            res = "😐😐😐😶😶";
            break;
        case 4:
            res = "😊😊😊😊😶";
            break;
        case 5:
            res = "😁😁😁😁😁";
            break;

        default:
            break;
    }

    return (
        <div className="text-4xl text-center p-4">
            {value.toFixed(1) + " = " + res}
        </div>
    );
}