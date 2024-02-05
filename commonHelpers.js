import{a,i as f}from"./assets/vendor-58cda742.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function u(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=u(t);fetch(t.href,o)}})();a.defaults.headers.common["x-api-key"]="live_eedEBIhSa1Zz96n6kEJ4AN8kcMgPva3zDP62EgDebovjszetJvu8mLFCWJ8MUFs7";function m(){return a.get("https://api.thecatapi.com/v1/breeds")}function p(e){const r=new URLSearchParams({breed_ids:e});return a.get(`https://api.thecatapi.com/v1/images/search?${r}`)}const s={breedsList:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),catInfo:document.querySelector("div.cat-info")};v();s.breedsList.addEventListener("change",h);function h(e){g(e.target.value)}function g(e){d(),s.catInfo.innerHTML="",p(e).then(({data:[r]})=>{s.catInfo.innerHTML=L(r),i()}).catch(r=>{i(),l(r)})}function v(){d(),m().then(({data:e})=>{s.breedsList.innerHTML=e.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),i(),s.breedsList.classList.remove("visually-hidden")}).catch(e=>{i(),l(e)})}function L(e){return`<div class="cat-info-card">
            <img class="cat-info-image" src="${e.url}" alt="cat" />
            <div class="cat-info-holder">
              <h2 class="cat-info-title">${e.breeds[0].name}</h2>
              <p class="cat-info-text">${e.breeds[0].description}</p>
              <p class="cat-info-text"><b>Temperament:</b> ${e.breeds[0].temperament}</p>
            </div>
          </div>`}function d(){s.loader.classList.remove("visually-hidden")}function i(){s.loader.classList.add("visually-hidden")}function l(e){f.show({color:"red",title:"Ooops! error occured",message:`${e.name}: ${e.message}`,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map