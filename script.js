// 滚动触发动画
const contents=document.querySelectorAll('.content');
window.addEventListener('scroll',()=> {
  contents.forEach(c=>{
    const top=c.getBoundingClientRect().top;
    if(top<window.innerHeight-100){c.classList.add('show');}
  });
});

// 视频弹窗
const modal=document.getElementById('videoModal');
document.getElementById('playVideo').addEventListener('click',()=>{modal.classList.add('active');});
modal.addEventListener('click',()=>{modal.classList.remove('active');});
