// 当点击 pre 展示 上一页 展示相应的indicator
// 当点击 next 展示下一页 展示相应的indicator

// 当点击indicator 展示 第n页

const $ = (s) => document.querySelector(s); // 把获取dom节点封装成函数
const $$ = (s) => document.querySelectorAll(s); // 把获取dom节点封装成函数

const $pre = $(".carousel .arrows-pre");
const $next = $(".carousel .arrows-next");
const $$indicators = $$(".carousel .indicators > li");
const $$panels = $$(".carousel .panels > a");

const getIndex = () => {
  return [...$$indicators].indexOf($(".carousel .indicators .active"));
  //ES6 这样可以转化成数组
};
const getPreIndex = () => {
  return (getIndex() - 1 + $$indicators.length) % $$indicators.length;
};
const getNextIndex = () => {
  return (getIndex() + 1) % $$indicators.length;
};

const setPage = (index) => {
  $$panels.forEach(($panels) => $panels.classList.remove("active"));
  $$panels[index].classList.add("active");
};
const setIndicator = (index) => {
  $$indicators.forEach(($indicators) => $indicators.classList.remove("active"));
  $$indicators[index].classList.add("active");
};

$pre.onclick = function () {
  let index = getPreIndex();
  setPage(index);
  setIndicator(index);
};

$next.onclick = function () {
  let index = getNextIndex();
  setPage(index);
  setIndicator(index);
};

$$indicators.forEach(
  ($indicators) =>
    ($indicators.onclick = function (e) {
      let index = [...$$indicators].indexOf(e.target);
      setIndicator(index);
      setPage(index);
    })
);
