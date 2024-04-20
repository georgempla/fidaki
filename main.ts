function create_array () {
    λίστα = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
}
function findxy (x: number, y: number) {
    counter = 0
    temp = 0
    for (let index = 0; index < 25; index++) {
        if (x == counter && y == counter / 5 - counter % 5) {
            temp = counter
        }
        counter += 1
    }
    return λίστα[temp]
}
function findvaluex (value: number) {
    counter = 0
    for (let index = 0; index < 25; index++) {
        if (λίστα[counter] == value) {
            temp = counter
        }
    }
    return counter
}
function _set (x: number, y: number, value: number) {
    λίστα[x + y * 5] = value
}
function findvaluey (value: number) {
    counter = 0
    for (let index = 0; index < 25; index++) {
        if (λίστα[counter] == value) {
            temp = counter / 5
        }
    }
    return counter
}
let counter = 0
let λίστα: number[] = []
let temp = 0
create_array()
_set(2, 2, 1)
let temp2 = 0
temp = 0
if (input.compassHeading() > 45 && input.compassHeading() < 135) {
    let first = 0
    if (first == 0) {
        temp = findvaluex(1)
        temp2 = findvaluey(1)
        _set(temp, temp2, 0)
        _set(temp + 1, temp2, 1)
    } else {
        temp = findvaluex(3)
        temp2 = findvaluey(3)
        if (findxy(temp + 1, temp2 + 0) == 2) {
        	
        } else if (findxy(temp + -1, temp2 + 0) == 2) {
        	
        } else if (findxy(temp + 0, temp2 + 1) == 2) {
        	
        } else if (findxy(temp + 0, temp2 + -1) == 2) {
        	
        }
    }
} else if (false) {
	
} else if (false) {
	
} else if (false) {
	
}
basic.forever(function () {
	
})
