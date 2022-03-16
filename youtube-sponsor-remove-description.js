//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/// youtube-sponsor-remove-description.js
/// alias ysrd.js

function myFunction() {
    var styles = `
    #description>.content{
      background-color: #323232;
    }
    #description>.content>*{
      visibility: hidden;
    }
    `
    
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    
    document.querySelector("#description>.content").addEventListener("mouseover", function () {
    
      var styles = `
    #description>.content{
      background-color: unset;
    }
    #description>.content>*{
      visibility: visible;
    }
    `
    
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    
    });
    }
    
    

function myFunctionn() {
    var styles = `
    ytd-comment-thread-renderer.style-scope:nth-child(1) > ytd-comment-renderer:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ytd-expander:nth-child(2) > div:nth-child(1) > yt-formatted-string:nth-child(3){
      background-color: #323232;
    }
    ytd-comment-thread-renderer.style-scope:nth-child(1) > ytd-comment-renderer:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ytd-expander:nth-child(2) > div:nth-child(1) > yt-formatted-string:nth-child(3) > span{
      visibility: hidden;
    }
    `
    
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    
    document.querySelector("#description>.content").addEventListener("mouseover", function () {
    
      var styles = `
    ytd-comment-thread-renderer.style-scope:nth-child(1) > ytd-comment-renderer:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ytd-expander:nth-child(2) > div:nth-child(1) > yt-formatted-string:nth-child(3){
      background-color: unset;
    }
    ytd-comment-thread-renderer.style-scope:nth-child(1) > ytd-comment-renderer:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ytd-expander:nth-child(2) > div:nth-child(1) > yt-formatted-string:nth-child(3) > span{
      visibility: visible;
    }
    `
    
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    
    });
    }
    
    



setTimeout(myFunctionn, 1500);
setTimeout(myFunction, 1500);
