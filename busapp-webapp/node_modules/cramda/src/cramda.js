// @flow
export const curry = (fn: Function): Function => (...args: Array<any>) =>
  fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args)

export const assoc = curry((key: string | number, val, obj: Object) => ({
  ...obj,
  [key]: val
}))

export const assocPath = curry(
  (keyPath: $ReadOnlyArray<string | number>, val, obj) => {
    if (keyPath.length === 0) {
      return val
    }

    if (keyPath.length === 1) {
      return assoc(keyPath[0], val, obj)
    } else {
      return {
        ...obj,
        [keyPath[0]]: assocPath(keyPath.slice(1), val, obj[keyPath[0]])
      }
    }
  }
)

// concatenate two arrays
// if set1 = [2, 4, 5] and set2 = [6, 0] then concat(set1, set2) = [2, 4, 5, 6, 0]
export const concat = curry((set1, set2) => {
  set1 = set1 || []
  set2 = set2 || []
  let idx = 0
  let result = []

  while (idx < set1.length) {
    result[result.length] = set1[idx++]
  }
  idx = 0
  while (idx < set2.length) {
    result[result.length] = set2[idx++]
  }

  return result
})

/**
 * given an object and a property name, returns the value of that property in the object
 * super complicated :)
 * but get really useful as a curried function
 */
export const prop = curry((prop, obj) => {
  return obj[prop]
})

/**
 * given a property name and a value, check if the property in the object equals the given value
 * e.g. propEq('id', 1, {id: 1, name: 'mukesh'}) === true
 * e.g. propEq('id', 2, {id: 1, name: 'mukesh'}) === false
 */
export const propEq = curry((prop, val, obj) => {
  return equals(val, obj[prop])
})

/**
 * Tells whether the two objects have same value for a property
 * E.g. p1 = {fname: 'rustom', lname: 'yadav'}; p2 = { fname: 'kuldev', lname: 'yadav'}
 * then eqProps('lname', p1, p2) === true
 * but eqProps('fname', p1, p2) === false
 */
export const eqProps = curry((prop, o1, o2) => {
  return equals(o1[prop], o2[prop])
})

/**
 * In a given list, update the value at a particular index
 * E.g. update(10, 2, [0,1,2,3,4]) === [0,1,10,3,4]
 */
export const update = curry(<T>(index: number, val: any, arr: Array<T>): Array<
  T
> => {
  if (index >= 0 && index < arr.length) {
    return [...arr.slice(0, index), val, ...arr.slice(index + 1)]
  } else {
    return arr
  }
})

/**
 * find a value inside a list/array and replace with a given value
 */
export const findAndUpdate = curry(<T>(findFn, val, arr: Array<T>): Array<
  T
> => {
  const index = arr.findIndex(findFn)
  if (index >= 0) {
    return update(index, val, arr)
  } else {
    return arr
  }
})

// prepend an element to an array
// e.g. prepend(4, [0, 1]) = [4, 0, 1]
export const prepend = curry((el, arr) => {
  return concat([el], arr)
})

// append an element to end of an array
// e.g. append(4, [0, 1]) = [0, 1, 4]
export const append = curry((el, arr) => {
  return concat(arr, [el])
})

export const pipe = function(...fns: Array<Function>) {
  return function() {
    return fns.reduce(
      (acc, fn: Function) => [fn.apply(null, acc)],
      (arguments: $ReadOnlyArray<Function>)
    )[0]
  }
}

export function negate(fn: Function, context: ?Object) {
  return function() {
    return !fn.apply(context, arguments)
  }
}

export const dedupe = curry(<T>(arr: Array<T>, fn: Function): Array<T> => {
  return arr.filter((item, index, self) => {
    return index === self.findIndex(fn.bind(null, item))
  })
})

export const equals = curry((a, b) => {
  return a === b
})

export const eqBy = curry((fn, a, b) => {
  return equals(fn.call(null, a), fn.call(null, b))
})

export const find = curry((pred, arr) => {
  return arr.find(pred)
})

export function printIt(item: Object) {
  console.log("to print", item)
  return item
}

export const without = curry(
  <T>(discardArr: $ReadOnlyArray<T>, arr: $ReadOnlyArray<T>): Array<T> => {
    return arr.filter(item => !discardArr.some(equals(item)))
  }
)

export const startsWith = curry((prefix, str) => {
  if (!str) {
    return false
  } else {
    return str.indexOf(prefix) === 0
  }
})

export function first(list) {
  return list[0]
}

export const head = first

export function tail(list) {
  return list.slice(1)
}

export const any = curry((pred, list) => {
  if (list && list.some && typeof list.some === "function") {
    return list.some(pred)
  } else {
    return list.reduce((acc, item) => {
      return acc || pred(item)
    }, false)
  }
})

export const findIndex = curry((finder, list) => {
  if (!list) {
    return -1
  }

  let itemIndex = -1

  for (let i = 0; i < list.length; i++) {
    if (finder(list[i])) {
      itemIndex = i
      break
    }
  }

  return itemIndex
})

const R = {
  any,
  curry,
  assoc,
  assocPath,
  append,
  prepend,
  concat,
  pipe,
  negate,
  dedupe,
  equals,
  eqBy,
  prop,
  propEq,
  eqProps,
  find,
  without,
  update,
  printIt,
  first,
  head,
  tail,
  startsWith,
  findIndex
}

export default R
