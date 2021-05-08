import {
    pipe,
    prop,
    propEq,
    without,
    update,
    findAndUpdate
} from "./src/cramda.js"

it("pipes values from one function to another", () => {
    function mulBy2(x) {
        return x * 2
    }
    function add2(x) {
        return x + 2
    }

    const a = [1, 2, 3]
    const b = [1, 2, 3].map(pipe(mulBy2, add2))
    expect(b).toEqual([4, 6, 8])

    const persons = [
        {
            name: "burj"
        },
        {
            name: "khalifa"
        }
    ]

    const names = persons.map(pipe(prop("name"), add2))
    expect(names).toEqual(["burj2", "khalifa2"])
})

it("should return array without given values", () => {
    const items = ["apple", "banana", "orange", "watermelon", "mousambi"]
    const discardList = ["apple", "mousambi"]

    expect(without(discardList, items)).toEqual([
        "banana",
        "orange",
        "watermelon"
    ])
})

describe("update", () => {
    it("should update value at given index", () => {
        const arr = [1, 2, 3]
        expect(update(1, 10, arr)).toEqual([1, 10, 3])
    })

    it("should return same array if index is out of bounds of the given array", () => {
        const arr = [1, 2, 3]
        expect(update(4, 10, arr)).toEqual([1, 2, 3])
        expect(update(-1, 10, arr)).toEqual([1, 2, 3])
    })
})

describe("findAndUpdate", () => {
    it("should find entry and update that entry", () => {
        const people = [
            {
                id: 1,
                name: "mukesh"
            },
            {
                id: 2,
                name: "nikita"
            }
        ]

        expect(
            findAndUpdate(propEq("id", 1), { id: 1, name: "soni" }, people)
        ).toEqual([
            {
                id: 1,
                name: "soni"
            },
            {
                id: 2,
                name: "nikita"
            }
        ])
    })

    it("should return same list if the value is not found", () => {
        const people = [
            {
                id: 1,
                name: "mukesh"
            },
            {
                id: 2,
                name: "nikita"
            }
        ]

        expect(
            findAndUpdate(propEq("id", 3), { id: 1, name: "soni" }, people)
        ).toEqual([
            {
                id: 1,
                name: "mukesh"
            },
            {
                id: 2,
                name: "nikita"
            }
        ])
    })
})
