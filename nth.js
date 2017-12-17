//procedurale and recursive function wich returns an element value of a list{value:value,rest:list} if present
//or the undefined value if not present
//eloquent js

function nth(li, num) {

    for (let node = li, i = 0; node; node = node.rest, i++) {
        if (i == num) return node.value;
    }
    return undefined;
}

function nth(li, num) {
    if (li.rest == null) return undefined;
    if (num == 0) return li.value;
    return nth(li.rest, (num - 1))
}