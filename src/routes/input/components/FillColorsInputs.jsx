import { useContext } from "react";
import { AnimDataContext } from "../../../App";
import { BiTrash } from "react-icons/bi"

export default function FillColorsInputs() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    function deleteColor(id) {
        setAnimData(prevState => {
            // filter out the color user wants to delete
            const newFillColors = prevState.fillColors.filter((i, index) => {
                return id !== index;
            })
            return {
                ...prevState,
                fillColors: newFillColors
            }
        })
    }


    function changeColor(e) {
        setAnimData(prevState => {
            // copy all previous colors
            let newFillColors = [...prevState.fillColors]
            // modify a color
            newFillColors[e.target.id] = e.target.value;

            return {
                ...prevState,
                fillColors: newFillColors
            }
        })
    }


    return animData.fillColors.map((item, index) => {
        return (
            <div className="input-subgroup input-color-wrapper" key={index}>
                <input
                    type="color"
                    className="form-control form-control-color"
                    value={item}
                    id={index}
                    onChange={changeColor}
                />

                <div className="color-hex-and-trash-icon w-100">
                    {item}
                    <BiTrash
                        title="Delete Color"
                        className="icon" 
                        onClick={() => deleteColor(index)}
                    />
                </div>
            </div>
        )
    })
}