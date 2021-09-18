
function ScrollHeader(){
  const nav= document.getElementById('header');
  if(this.scrollY>=50) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
}
export default ScrollHeader;