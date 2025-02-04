import{r as o,j as e}from"./index-BA-jl_1n.js";import{S as f}from"./ScrollToTopButton-Beu5pvCT.js";const h="_projectsIntroContainer_1oz6h_1",u={projectsIntroContainer:h},C="_allProjectsContainer_11lyf_1",g="_projectCard_11lyf_15",v="_cardTechsBanner_11lyf_28",_="_cardOverlay_11lyf_64",y="_techBannerLogosContainer_11lyf_105",N="_modal_11lyf_137",S="_modalContent_11lyf_151",w="_modalTextPurpose_11lyf_177",s={allProjectsContainer:C,projectCard:g,cardTechsBanner:v,cardOverlay:_,techBannerLogosContainer:y,modal:N,modalContent:S,modalTextPurpose:w},b=()=>{const[t,l]=o.useState(null),[m,x]=o.useState(null),[c,j]=o.useState(null);return o.useEffect(()=>{fetch("data/projects.json").then(r=>{if(!r.ok)throw new Error("Erreur lors de la récupération des données projects.");return r.json()}).then(r=>l(r)).catch(r=>x(r.message))},[]),m?e.jsxs("p",{children:["Error: ",m]}):t?e.jsxs("div",{className:`${s.allProjectsContainer} d-flex flex-row all-center wrap p-20 gap-50`,children:[t.map(({id:r,title:i,image:d,tech:a})=>e.jsxs("div",{className:`${s.projectCard} big-card-container purple-model`,style:{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center left"},onClick:()=>j(r),children:[e.jsx("div",{className:`${s.cardOverlay}`}),e.jsxs("div",{className:`${s.cardTechsBanner} d-flex flex-row all-center p-10 gap-20 wrap`,children:[e.jsx("h3",{className:`${s.cardTitle} d-flex flex-column `,children:i}),a&&a.map((n,p)=>e.jsxs("div",{className:`${s.techBannerLogosContainer}d d-flex flex-column`,children:[e.jsx("img",{src:n.url,alt:"tech-logo"}),e.jsx("p",{children:n.techname})]},p))]})]},r)),c!==null&&e.jsx("div",{className:s.modal,onClick:()=>j(null),children:e.jsx("div",{className:`${s.modalContent} purple-model-modal`,children:t.filter(r=>r.id===c).map(({title:r,links:i,purpose:d,techdescription:a})=>e.jsxs("div",{style:{},children:[e.jsx("h3",{className:"rb gradient-title-purple",children:r}),e.jsx("p",{className:s.modalTextPurpose,children:d}),e.jsxs("p",{children:[" ",a]}),i.map((n,p)=>e.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:n.type},p))]},c))})})]}):e.jsx("p",{children:"Chargement des données..."})};function E(){const t=o.useRef(null),l=()=>{t.current.scrollIntoView({behavior:"smooth"})};return e.jsxs("div",{className:`${u.projectsContainer} d-flex flex-fill flex-column`,children:[e.jsx(f,{targetRef:t}),e.jsxs("section",{className:`${u.projectsIntroContainer} d-flex flex-column justify-content-sb align-items-center text-center `,children:[e.jsx("h1",{className:"relative gradient-title-purple-center",children:" MES PROJETS"}),e.jsx("article",{className:"relative",children:e.jsxs("p",{className:"text-shadow-outline",children:["Vous trouverez ici une sélection de mes réalisations ou projets en cours.",e.jsx("br",{}),"Découvrez différents projets de développement Front-End, Back-End, Full-Stack mais aussi de Debug & Optimisation SEO.",e.jsx("br",{}),e.jsx("br",{}),"Ce portfolio lui-même est développé avec React et stylisé en SCSS pour une gestion des styles efficace et un design responsive."]})}),e.jsxs("div",{className:"arrowsContainer",onClick:l,children:[e.jsx("div",{className:"arrow2 arrowSliding delay1"}),e.jsx("div",{className:"arrow2 arrowSliding delay2"}),e.jsx("div",{className:"arrow2 arrowSliding delay3"})]})]}),e.jsx("div",{className:"section-top-ref",ref:t}),e.jsx("section",{children:e.jsx(b,{})})]})}export{E as default};
