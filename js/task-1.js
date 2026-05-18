const catalog = document.querySelector('#categories');
const item = document.querySelectorAll('.item>ul');
const itemH2 = document.querySelectorAll('.item>h2');
console.log(`Number of categories: ${catalog.children.length}`);
for (let i = 0; i < catalog.children.length; i++) {
  console.log(`Category: ${itemH2[i].textContent}`);
  console.log(`Elements: ${item[i].children.length}`);
}