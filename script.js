// Hero轮播透明切换
const slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide() {
  slides.forEach((s, i) => s.style.opacity = i === current ? 1 : 0);
  current = (current + 1) % slides.length;
}
showSlide();
setInterval(showSlide, 8000);

// 滚动触发动画
const contents = document.querySelectorAll('.content');
window.addEventListener('scroll', () => {
  contents.forEach(c => {
    const top = c.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) c.classList.add('show');
  });
});

// 视频弹窗
const modal = document.getElementById('videoModal');
document.getElementById('playVideo').addEventListener('click', () => { modal.classList.add('active'); });
modal.addEventListener('click', () => { modal.classList.remove('active'); });

// ---------- 新增：显示额外信息 ----------
const showInfoButtons = document.querySelectorAll('.show-info');

showInfoButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.nextElementSibling;
    if(extra) extra.classList.toggle('show');
    btn.textContent = extra.classList.contains('show') ? '收起信息' : '查看更多';
  });
});
