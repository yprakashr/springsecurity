var alphas: string[];
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
console.log(alphas[2]);
console.log(alphas[3]);

var nums: number[] = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);

var names: string[] = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];
for (var i = 0; i < multi.length; i++) {
  for (var j = 0; j < multi.length; j++) {
    console.log(multi[i][j]);
  }
}
