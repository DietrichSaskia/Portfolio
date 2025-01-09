import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'legal-notice', component: LegalNoticeComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
];
