class MyStringBuilder {
    constructor(){
        this._array = [];
    }

    append(s) {
        this._array = this._array.concat(s.split(""));
    }

    addWithShift(s, from) {
        this._array = [...this._array.slice(0, from), s, ...this._array.slice(from)]
    }

    print() {
        console.log(this._array.join(""))
    }

    getByIndex(i) {
        return this._array[i];
    }

    getSubstring(leftBound, rightBound) {
        return this._array.slice(leftBound, rightBound).join("");
    }

    removeSubstring(leftBound, rightBound) {
        this._array = [...this._array.slice(0, leftBound), ...this._array.slice(rightBound)]
    }

    reverse() {
        this._array.reverse()
    }



}

const stringBuilder = new MyStringBuilder();
stringBuilder.append("hello")
stringBuilder.print()

console.log(stringBuilder.getSubstring(1, 3))

// stringBuilder.addWithShift("ak", 2)

stringBuilder.print()

stringBuilder.removeSubstring(1, 3)
stringBuilder.print()
stringBuilder.reverse()

stringBuilder.print()
