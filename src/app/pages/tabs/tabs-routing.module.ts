import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "album",
        loadChildren: () =>
          import("../album/album.module").then((m) => m.AlbumPageModule),
      },
      {
        path: "blog",
        loadChildren: () =>
          import("../blog/blog.module").then((m) => m.BlogPageModule),
      },
      {
        path: "nba",
        loadChildren: () =>
          import("../nba/nba.module").then((m) => m.NbaPageModule),
      },
    ],
  },
  {
    path: "",
    redirectTo: "tabs/nba",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
