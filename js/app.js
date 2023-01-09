window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
const height = $('.scrollable-main').height();
ScrollTrigger.create({
	trigger: ".main-article",
	start: "top top",
	end: height,
	pinType: "transform",
	onRefreshInit: self => self.scroll(0),
	pin: true,
});