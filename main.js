// rewritten in js by 9n25
// modulo function taken from stackoverflow. thanks to the core % operator for being Fucked Up!
// feel free to use this wherever

const vals = ["196, 40, 28", "13, 105, 172", "39, 70, 45", "107, 50, 124", "218, 133, 65", "245, 205, 48", "232, 186, 200", "215, 197, 154"]

const getValue = name => {
    let value = 0
    for(let index = 0; index < name.length; index++) {
        const utf8Encode = new TextEncoder();
        let cValue = Array.from(utf8Encode.encode(name[index]))[0]
        let reverseIndex = name.length - index
        if(name.length % 2 == 1) {
            reverseIndex--
        }
        if(reverseIndex % 4 >= 2) {
            cValue = -cValue
        }
        value += cValue
    }
    return value
}

const getNameColour = name => {
    function mod(n, m) {
        return ((n % m) + m) % m;
    }
    return vals[mod(getValue(name), 8)] 
}

document.getElementById("check").addEventListener("click", () => {
    const rgb = getNameColour(document.getElementById("input").value)
    const col = document.createElement("div")
    col.style.background = `rgb(${rgb})`
    col.className = "colour"
    
    document.getElementById("output").innerHTML = rgb
    document.getElementById("output").prepend(col)
})