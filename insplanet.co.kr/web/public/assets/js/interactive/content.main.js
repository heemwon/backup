/*=========================================================== [ 공통 Contents ] =======================================================================*/
define(['app'], function (App) {
    const ContentMain = (function (ns) {
        let headerContainer, mainContainer, footerContainer;
        let btnDownloadFile;

        //공통 변수
        let scrollTop, scrollBottom;

        const _init = function () {
            _setDomElements();
            _setBrochureFileSrc();
            //_addEvent();

            //$(window.GlobalEvent).on(window.GlobalEvent.CHANGE_SCROLL, _onScroll);
            //$(window.GlobalEvent).on(window.GlobalEvent.CHANGE_DEVICE_SIZE, _onChangeDeviceSizeHandler);
        };

        const _setDomElements = function(){
            headerContainer = $('header');
            footerContainer = $('footer');
			mainContainer = $('#main');

            // 브로슈어 다운로드
            btnDownloadFile = $('.btn-download');
        };



        const _addEvent = function(){
            btnDownloadFile.on('click', _onClickFileDownload);
        }

        const _onScroll = function(e, $val){
            scrollTop = $val;
            _onScrollContentSection();
        };

        const _onChangeDeviceSizeHandler = function(){

        };

        const _onScrollContentSection = function(){
            console.log('_onScroll ContentMain')
        }


        // 현재 요소 보이는지 체크
        function elementInViewport(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < window.pageYOffset + window.innerHeight &&
                left < window.pageXOffset + window.innerWidth &&
                top + height > window.pageYOffset &&
                left + width > window.pageXOffset
            );
        }

        const _setBrochureFileSrc = function(){
            btnDownloadFile.attr({
                href: window.GlobalVars.URL_BROCHURE_FILE,
                target: '_blank'
            });
        }

        const _fileDownload = function(url){
            //ie 브라우저 및 EDGE 브라우저

            if (Detectizr.browser.name == 'ie' || Detectizr.browser.name == 'edge') {
                //ie11
                var _window = window.open(url, "_blank");
                _window.document.close();
                _window.document.execCommand('SaveAs', true, "file.hwp" || url);
                _window.close();
            } else { //chrome
                var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
                var xhr = new XMLHttpRequest(); xhr.responseType = 'blob';
                xhr.onload = function () {
                    var a = document.createElement('a');
                    a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
                    a.download = filename; // Set the file name.
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    delete a;
                };
                xhr.open('GET', url);
                xhr.send();
            }
        };

        return {
            init: _init,
        }
    })(App);

    App.content.main = ContentMain;
});
