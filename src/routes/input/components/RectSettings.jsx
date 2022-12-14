import { useState, useContext } from "react"
import { AnimDataContext } from "../../../App"
import { changeShapeProp, toggleRandomValue, changeRange } from "../functions";

export default function RectSettings() {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;
    
    // if rectangles checkbox is unchecked
    if (!animData.rectangles.checked) return null;

    return (
        <div className="input-group">
            <label className="form-label heading">Rectangles Settings</label>
            {/* name attribute is for identifying the shape */}
            {/* id attribute is for label working correctly */}
            {/* data attribute is for identifying the shape prop (width, height, radius...) */}
            <div className="input-subgroup">
                <label htmlFor="rect-width" className="form-label">Width</label>
                {
                        animData.rectangles.widthRand
                        ? (
                            <div className="grid-2-cols">

                                <div className="d-flex">
                                    <div className="input-prefix">From</div>
                                    <input
                                        type="number"
                                        className="form-control rounded-start-0"
                                        id="rect-width"
                                        name="rectangle width"
                                        min="1"
                                        value={animData.rectangles.widthRandRange[0]}
                                        onChange={e => changeRange(e, setAnimData, "rectangles", "widthRandRange", 0)}
                                    />
                                </div>

                                <div className="d-flex">
                                    <div className="input-prefix">To</div>
                                    <input
                                        type="number"
                                        className="form-control rounded-start-0"
                                        id="rect-width"
                                        name="rectangle width"
                                        min="1"
                                        value={animData.rectangles.widthRandRange[1]}
                                        onChange={e => changeRange(e, setAnimData, "rectangles", "widthRandRange", 1)}
                                    />
                                </div>

                            </div>
                        )
                        : (
                            <input
                                className="form-control"
                                type="number"
                                min="1"
                                id="rect-width"
                                name="rectangle width"
                                data-shape-prop="width"
                                data-shape="rectangles"
                                onChange={e => changeShapeProp(e, setAnimData)}
                                value={animData.rectangles.width}
                            />
                        )
                }

                <button
                    type="button"
                    className="button button-small mt-2"
                    onClick={() => toggleRandomValue(setAnimData, "rectangles", "widthRand")}
                >
                    {
                        animData.rectangles.widthRand
                        ? "Use Static Value"
                        : "Use Random Value"
                    }
                </button>
            </div>

            <div className="input-subgroup">
                <label htmlFor="rect-height" className="form-label">Height</label>
                {
                    animData.rectangles.heightRand
                    ? (
                        <div className="grid-2-cols">
                            <div className="d-flex">
                                <div className="input-prefix">From</div>
                                <input
                                    type="number"
                                    className="form-control rounded-start-0"
                                    id="rect-height"
                                    name="rectangle height"
                                    min="1"
                                    value={animData.rectangles.heightRandRange[0]}
                                    onChange={e => changeRange(e, setAnimData, "rectangles", "heightRandRange", 0)}
                                />
                            </div>

                            <div className="d-flex">
                                <div className="input-prefix">To</div>
                                <input
                                    type="number"
                                    className="form-control rounded-start-0"
                                    id="rect-height"
                                    name="rectangle height"
                                    min="1"
                                    value={animData.rectangles.heightRandRange[1]}
                                    onChange={e => changeRange(e, setAnimData, "rectangles", "heightRandRange", 1)}
                                />
                            </div>

                        </div>
                    )
                    : (
                        <input
                            className="form-control"
                            type="number"
                            min="1"
                            id="rect-height"
                            name="rectangle height"
                            data-shape-prop="height"
                            data-shape="rectangles"
                            onChange={e => changeShapeProp(e, setAnimData)}
                            value={animData.rectangles.height}
                        />
                    )
                }

                <button
                    type="button"
                    className="button button-small mt-2"
                    onClick={() => toggleRandomValue(setAnimData, "rectangles", "heightRand")}
                >
                    {
                        animData.rectangles.heightRand
                        ? "Use Static Value"
                        : "Use Random Value"
                    }
                </button>
            </div>

            <div className="input-subgroup">
                <label htmlFor="rect-corner-radius" className="form-label">Corner Radius</label>
                <input
                    className="form-control"
                    type="number"
                    min="0"
                    id="rect-corner-radius"
                    name="rectangle corner radius"
                    data-shape-prop="cornerRadius"
                    data-shape="rectangles"
                    onChange={e => changeShapeProp(e, setAnimData)}
                    value={animData.rectangles.cornerRadius}
                />
            </div>

            <div className="input-subgroup">
                <div className="checkbox-group">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="rect-filled"
                        name="rectangle filled"
                        data-shape-prop="filled"
                        data-shape="rectangles"
                        checked={animData.rectangles.filled}
                        onChange={e => changeShapeProp(e, setAnimData, true)}
                    />
                    <label htmlFor="rect-filled">Filled</label>
                </div>
            </div>
        </div>
    )
}