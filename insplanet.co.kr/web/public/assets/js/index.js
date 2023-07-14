requirejs.config({
    baseUrl: './assets',
    paths: {
        jquery:'vendors/jquery-3.4.1.min',
        swiper:'vendors/swiper/swiper.min',
        TweenMax: 'vendors/gsap/TweenMax.min',
        TweenLite: 'vendors/gsap/TweenLite.min',
        TimelineMax:'vendors/gsap/TimelineMax.min',
        ScrollMagic: 'vendors/scrollMagic/ScrollMagic.min',
        ScrollMagicPlugin:'vendors/scrollMagic/plugins/animation.gsap.min',
        ScrollMagicDebug:'vendors/scrollMagic/plugins/debug.addIndicators.min',
        TweenScrollTo:'vendors/gsap/ScrollToPlugin.min',
        app:'./js/interactive/App'
    },
    //waitSeconds: 1
});

const vendorFiles =['vendors/modernizr-detectizr','vendors/jquery.mousewheel'];

const pathCommon = './js/common/';
const commonFiles = ['GlobalVars'];

const pathUtil = './js/utils/';
const utilFiles = ['ins.utils', 'resize-event','scroll-event', 'orientation-event'];

const pathInteractive = './js/interactive/';
const appFiles = ['frame','content.main', 'content.work', 'content.company', 'content.list'];



//커먼 모듈
let tmpCommonArr =[];
if(commonFiles.length > 0){
    commonFiles.forEach(function(filename){
        tmpCommonArr.push(pathCommon + filename);
    });
    tmpCommonArr = tmpCommonArr.concat(vendorFiles);
}
//requirejs(tmpCommonArr);

//유틸 모듈
let tmpUtilArr =[];
utilFiles.forEach(function(filename){
    tmpUtilArr.push(pathUtil + filename);
});
//requirejs(tmpUtilArr);

//앱 모듈
let tmpAppArr =[];
appFiles.forEach(function(filename){
    tmpAppArr.push(pathInteractive + filename);
});

//최종 js 배열 합치기
requirejs(tmpCommonArr.concat(tmpUtilArr).concat(tmpAppArr));