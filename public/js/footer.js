
siteFooter();

addEventListener("resize", (event) => {
    siteFooter();
});

function siteFooter() {
    var siteContent = document.getElementById('site-content');
    var siteContentHeight = siteContent.offsetHeight;
    var siteContentWidth = siteContent.offsetWidth;

    var siteFooter = document.getElementById('site-footer');
    var siteFooterHeight = siteFooter.offsetHeight;
    var siteFooterWidth = siteFooter.offsetWidth;

    
    siteContent.style.marginBottom = siteFooterHeight + 50 + "px";
 
};
