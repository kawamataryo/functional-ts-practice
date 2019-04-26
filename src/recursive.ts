export const recursive = (num: number): number => {
  if(num === 0) {
    return 1
  }
  return num * recursive(num - 1)
}
