var bodyElement = document.querySelector('body');
var htmlElement = document.querySelector('html');

// Over mij pagina
var skillsOvermij = document.querySelector('main>section>div');
var pijlScroll = document.querySelector('main>img');

// Portfolio pagina
var contentPortfolioIntro = document.querySelector('.portfolio main>article:first-of-type');
var contentPortfolioOutro = document.querySelector('.portfolio main>article:nth-of-type(2)')
var sectionPortfolio = document.querySelector('.portfolio main>section');

var laysArticle = document.querySelector('.portfolio main>section article:first-of-type');
var laysArticleImg = document.querySelector('.portfolio main>section article:first-of-type img');
var tripplannerArticle = document.querySelector('.portfolio main>section article:nth-of-type(2)');
var tripplannerArticleImg = document.querySelector('.portfolio main>section article:nth-of-type(2) img');
var bonusArticle = document.querySelector('.portfolio main>section article:nth-of-type(3)');
var bonusArticleImg = document.querySelector('.portfolio main>section article:nth-of-type(3) img');
var artisArticle = document.querySelector('.portfolio main>section article:nth-of-type(4)');
var artisArticleImg = document.querySelector('.portfolio main>section article:nth-of-type(4) img');
var boterhamArticle = document.querySelector('.portfolio main>section article:nth-of-type(5)');
var boterhamArticleImg = document.querySelector('.portfolio main>section article:nth-of-type(5) img');


// Over mij pagina
function contentSkillsWeergeven () {
    var scrollY = window.scrollY;

    if (window.screen.width >= 768) {
        if (scrollY >= 100) {
            skillsOvermij.classList.add('infadenSection');
        }
        else {
            skillsOvermij.classList.remove('infadenSection');
        }
    }
    else {
        if (scrollY >= 200) {
            skillsOvermij.classList.add('infadenSection');
        }
        else {
            skillsOvermij.classList.remove('infadenSection');
        }
    }
}
function pijlUitfaden () {
    var scrollY = window.scrollY;

    if (scrollY >=10) {
        pijlScroll.classList.add('pijlUitfaden');
    }
    else {
        pijlScroll.classList.remove('pijlUitfaden');
    }
}


// Portfolio pagina
function tekstPortfolioUitfaden () {
    var scrollX = sectionPortfolio.scrollLeft;

    if (window.screen.width >= 768) {
        if (scrollX >= 400) {
            contentPortfolioIntro.classList.add('tekstUitfaden');
        }
        else {
            contentPortfolioIntro.classList.remove('tekstUitfaden');
        }
    }
    else {
        if (scrollX >= 30) {
            contentPortfolioIntro.classList.add('tekstUitfaden');
        }
        else {
            contentPortfolioIntro.classList.remove('tekstUitfaden');
        }
    }
}
function tekstPortfolioInfaden () {
    var scrollX = sectionPortfolio.scrollLeft;

    if (window.screen.width >= 768) {
        if (scrollX >= 5000) {
            contentPortfolioOutro.classList.add('tekstInfaden');
        }
        else {
            contentPortfolioOutro.classList.remove('tekstInfaden');
        }
    }
    else {
        if (scrollX >= 1950) {
            contentPortfolioOutro.classList.add('tekstInfaden');
        }
        else {
            contentPortfolioOutro.classList.remove('tekstInfaden');
        }
    }
}

function laysArticleUitklappen () {
    bodyElement.classList.add('openProject');
    htmlElement.classList.add('openProject');
    sectionPortfolio.classList.add('openProject');
    laysArticle.classList.add('openProject');

    sectionPortfolio.scroll(0, 0);
}
function tripplannerArticleUitklappen () {
    bodyElement.classList.add('openProject');
    htmlElement.classList.add('openProject');
    sectionPortfolio.classList.add('openProject');
    tripplannerArticle.classList.add('openProject');

    sectionPortfolio.scroll(0, 0);
}
function bonusArticleUitklappen () {
    bodyElement.classList.add('openProject');
    htmlElement.classList.add('openProject');
    sectionPortfolio.classList.add('openProject');
    bonusArticle.classList.add('openProject');

    sectionPortfolio.scroll(0, 0);
}
function artisArticleUitklappen () {
    bodyElement.classList.add('openProject');
    htmlElement.classList.add('openProject');
    sectionPortfolio.classList.add('openProject');
    artisArticle.classList.add('openProject');

    sectionPortfolio.scroll(0, 0);
}
function boterhamArticleUitklappen () {
    bodyElement.classList.add('openProject');
    htmlElement.classList.add('openProject');
    sectionPortfolio.classList.add('openProject');
    boterhamArticle.classList.add('openProject');

    sectionPortfolio.scroll(0, 0);
}


// Over mij pagina
window.addEventListener('scroll', contentSkillsWeergeven);
window.addEventListener('scroll', pijlUitfaden);

// Portfolio pagina
sectionPortfolio.addEventListener('scroll', tekstPortfolioUitfaden);
sectionPortfolio.addEventListener('scroll', tekstPortfolioInfaden);

laysArticleImg.addEventListener('click', laysArticleUitklappen);
laysArticleImg.addEventListener('keypress', laysArticleUitklappen);
tripplannerArticleImg.addEventListener('click', tripplannerArticleUitklappen);
tripplannerArticleImg.addEventListener('keypress', tripplannerArticleUitklappen);
bonusArticleImg.addEventListener('click', bonusArticleUitklappen);
bonusArticleImg.addEventListener('keypress', bonusArticleUitklappen);
artisArticleImg.addEventListener('click', artisArticleUitklappen);
artisArticleImg.addEventListener('keypress', artisArticleUitklappen);
boterhamArticleImg.addEventListener('click', boterhamArticleUitklappen);
boterhamArticleImg.addEventListener('keypress', boterhamArticleUitklappen);
