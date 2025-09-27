/**
 * The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.
 */
export function arrWith<T>(arr: T[], index: number, value: T): T[] {
  const newArr = [...arr]
  newArr[index] = value
  return newArr
}
