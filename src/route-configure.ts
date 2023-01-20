import CreateCard from "./consultation/CreateCard";
import EditCard from "./consultation/EditCard";
import FilterCards from "./consultation/FilterCards";
import LandingPage from "./consultation/LandingPage";
import CreateCategory from "./CATEGORY1/CreateCategory";
import EditCategory from "./CATEGORY1/EditCategory";
import IndexCategory from "./CATEGORY1/IndexCategory";
import CreateCateg2 from "./CATEGORY2/CreateCateg2";
import EditCateg2 from "./CATEGORY2/EditCateg2";
import IndexCateg2 from "./CATEGORY2/IndexCateg2";
import CreateCateg3 from "./CATEGORY3/CreateCateg3";
import EditCateg3 from "./CATEGORY3/EditCateg3";
import IndexCategory3 from "./CATEGORY3/IndexCategory3";
import RedirectToLanding from "./Utils/RedirectToLanding";

const routes = [
    {path: '/Categories', component: IndexCategory, exact: true, isClient: true},
    {path: '/Categories/create', component: CreateCategory, isClient: true},
    {path: '/Categories/edit/:id(\\d+)', component: EditCategory, isClient: true},

    {path: '/CATEGORY2', component: IndexCateg2, exact: true, isClient: true},
    {path: '/CATEGORY2/create', component: CreateCateg2, isClient: true},
    {path: '/CATEGORY2/edit/:id(\\d+)', component: EditCateg2, isClient: true},

    {path: '/CATEGORY3', component: IndexCategory3, exact: true},
    {path: '/CATEGORY3/create', component: CreateCateg3, isClient: true},
    {path: '/CATEGORY3/edit/:id(\\d+)', component: EditCateg3, isClient: true},

    {path: '/cards/create', component: CreateCard},
    {path: '/cards/edit/:id(\\d+)', component: EditCard},
    {path: '/cards/filter', component: FilterCards},

    {path: "/", component: LandingPage, exact:true},
    {path: '*', component: RedirectToLanding}
];

export default routes;

// * -> is there is no valid url from the above, there is the last one who is there
//       and we want to redirect the user fo the landingPage - main Page