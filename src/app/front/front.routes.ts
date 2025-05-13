import { Routes } from "@angular/router";
import { FrontLayoutComponent } from "./layout/front-layout/front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const frontRoutes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];

export default frontRoutes;
