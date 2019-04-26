import {sum} from "../src/sum";

test('足し算できること', () => {
  const num1list: number[] = [1,2,3,4,5]
  const num2list: number[] = [2,3,4,5,6]
  const answerList: number[] = [3,5,7,9,11]

  num1list.forEach((num, i) => {
    expect(sum(num1list[i])(num2list[i])).toBe(answerList[i])
  })
})
