window.onload = function () {

   const allLanguages = document.querySelector('.all__languages'),
      selectedLanguages = document.querySelector('.selected__languages'),
      selectedLanguage = document.querySelector('.selected__language'),
      allLanguageLi = allLanguages.querySelectorAll('li'),
      selectedLanguageImg = selectedLanguage.querySelector('img'),
      selectedLanguageP = selectedLanguage.querySelector('p');


   allLanguageLi.forEach(el => el.addEventListener('click', () => {
      let src = el.querySelector('img').src;
      let language = el.querySelector('p').innerHTML;

      selectedLanguageImg.src = src;
      selectedLanguageP.innerHTML = language;

      selectedLanguage.dataset.languages = el.dataset.languages;
   }))

   window.addEventListener('click', function (el) {
      if (el.target != selectedLanguages && selectedLanguage != el.target) {
         selectedLanguages.classList.remove('show');
      }
   })

   selectedLanguage.addEventListener('click', () => selectedLanguages.classList.toggle('show'));
}