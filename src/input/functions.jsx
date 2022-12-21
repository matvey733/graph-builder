// changes "Amount of Shapes", "Velocity"...
function changeProp(e, setAnimData) {
    const prop = e.target.dataset.prop
    let value = e.target.value;
    if (e.target.type === "number") {
        value = parseInt(e.target.value);
    }
    
    setAnimData(prevState => ({
        ...prevState,
        [prop]: value
    }))
}

// changes rect width, rect height, circle radius...
function changeShapeProp(e, setAnimData, isBoolean = false) {
    // example:
    // e.target.dataset.shapeProp === "height"
    // e.target.dataset.shape === "rectangles"
    // if isBoolean, use "checked" attribute insead of "value" because value for checkboxes is always "on"
    const shape = e.target.dataset.shape;
    const prop = e.target.dataset.shapeProp;
    let value = e.target.value;
    if (e.target.type === "number") {
        value = parseInt(e.target.value);
    }

    setAnimData(prevState => {
        return {
            ...prevState,
            [shape]: {
                ...prevState[shape],
                [prop]: isBoolean ? e.target.checked : value
            }
        }   
    })
}

// toggles "widthRand", "heightRand", "radiusRand"...
function toggleRandomValue(setAnimData, shape, shapeProp) {
    setAnimData(prevState => ({
        ...prevState,
        [shape]: {
            ...prevState[shape],
            [shapeProp]: !prevState[shape][shapeProp]
        }
    }))
}

function intFromRangeArr(range) {
    const min = range[0];
    const max = range[1];
    return Math.ceil(Math.random() * (max - min) + min);
}

// changes ranges for values like width, height that look like [30, 50]
function changeRange(e, setAnimData, shape, shapeProp, rangeIndex) {
    // rangeIndex must be either 0 (start) or 1 (end)
    setAnimData(prevState => {
        let value = parseInt(e.target.value);
        console.log(value);
        // react needs value to be casted to a string if it's typeof NaN
        if (isNaN(value)) value = "";

        // copy previous state of range array
        let newRange = [...prevState[shape][shapeProp]];
        // replace value at "rangeIndex"
        newRange.splice(rangeIndex, 1, value);

        return {
            ...prevState,
            [shape]: {
                ...prevState[shape],
                [shapeProp]: newRange
            }
        }
    })
}


function useDefaultVals(setAnimData, shape, prop) {
    setAnimData(prevState => {
        // if value is not provided (empty string), replace it with a default
        // animData.rectangles.widthRandRange.range.forEach
        const newRange = prevState[shape][prop].range.map((item, index) => {
            if (typeof item === "string") {
                console.log(item);
                const defaultVal = prevState[shape][prop].default[index];
                item = defaultVal;
            }
            return item;
        })
        
        return {
            ...prevState,
            [shape]: {
                ...prevState[shape],
                [prop]: {
                    ...prevState[shape][prop],
                    range: newRange
                }
            }
        }
    })
}

function checkValuesProvided(setAnimData) {
    // if a value is not provided (empty string), replace it with a default value
    useDefaultVals(setAnimData, "rectangles", "widthRandRange");
    useDefaultVals(setAnimData, "rectangles", "heightRandRange");
    useDefaultVals(setAnimData, "circles", "radiusRandRange");
}

export {
    changeProp,
    changeShapeProp,
    intFromRangeArr,
    toggleRandomValue,
    changeRange,
    useDefaultVals,
    checkValuesProvided
}