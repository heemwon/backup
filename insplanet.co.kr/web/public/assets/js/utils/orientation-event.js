const OrientationEvent = (function(){
    let _created = function () {
        window.addEventListener('orientationchange', _orientationHandler);
        _orientationHandler();
    };


    const _orientationHandler = function () {
        let screenOrientation = window.orientation;
        //console.log('screenOrientation', screenOrientation)
        $(window.GlobalEvent).trigger(window.GlobalEvent.CHANGE_ORIENTATION,  {dir: screenOrientation});
    }

    return{
        created: _created
    }
})();