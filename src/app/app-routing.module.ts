import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';

import { ConcatComponent } from './components/concat.component';
import { FaqComponent } from './components/faq.component';
import { NewsComponent } from './components/news.component';
import { SiteNamePageTitleStrategy } from './site-name-page-title-strategy';

const routes: Routes = [
  {
    path: 'news',
    title: 'Breaking News',
    component: NewsComponent,
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions',
    component: FaqComponent,
  },
  {
    path: 'concat',
    title: 'Concat Us',
    component: ConcatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: SiteNamePageTitleStrategy,
    },
  ],
})
export class AppRoutingModule {}
