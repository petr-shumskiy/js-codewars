// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript


function towerBuilder(nFloors: number, marker: string="*"): string[] {
  const result: string[] = []
  for (let i = 1, j = 1; i <= nFloors; i++, j+=2) {
    result.push(
      " ".repeat(nFloors - i)
      + marker.repeat(j)
      + " ".repeat(nFloors - i)
    )
  }
  return result
}