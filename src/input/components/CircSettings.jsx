import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import { changeShapeProp, toggleRandomValue } from "../functions";

export default function CircSettings() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    // if circles checkbox is unchecked
    if (!animData.circles.checked) return null;

    return (
        <div className="input-group">
            <label className="form-label heading">Circles Settings</label>

            <div className="input-subgroup">
                <label htmlFor="circ-radius" className="form-label">Radius</label>
                {
                    animData.circles.radiusRand
                        ? (
                            <div className="grid-2-cols">

                                <div className="d-flex">
                                    <div className="rounded-start bg-main text-dark d-flex align-items-center px-2 py-1">From</div>
                                    <input
                                        type="number"
                                        className="form-control rounded-start-0"
                                        value={animData.circles.radiusRandRange[0]}
                                    />
                                </div>

                                <div className="d-flex">
                                    <div className="rounded-start bg-main text-dark d-flex align-items-center px-2 py-1">To</div>
                                    <input
                                        type="number"
                                        className="form-control rounded-start-0"
                                        value={animData.circles.radiusRandRange[1]}
                                    />
                                </div>

                            </div>
                        )
                        : (
                            <input
                                className="form-control"
                                type="number"
                                id="circ-radius"
                                name="circ-radius"
                                data-shape-prop="radius"
                                data-shape="circles"
                                onChange={e => changeShapeProp(e, setAnimData)}
                                value={animData.circles.radius}
                            />
                        )
                }

                <button
                    type="button"
                    className="button button-small mt-2"
                    onClick={() => toggleRandomValue(setAnimData, "circles", "radiusRand")}
                >
                    {
                        animData.circles.radiusRand
                        ? "Use Static Value"
                        : "Use Random Value"
                    }
                </button>
            </div>

            <div className="input-subgroup">
                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="circ-filled"
                        name="circ-filled"
                        data-shape-prop="filled"
                        data-shape="circles"
                        checked={animData.circles.filled}
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                    />
                    <label htmlFor="circ-filled">Filled</label>
                </div>
            </div>
        </div>
    )
}